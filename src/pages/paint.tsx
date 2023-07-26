import { useState, useEffect, useRef } from "react";
import styles from "../styles/paint.module.scss";

const PaintCanvas: React.FC = () => {
  // Ref para o elemento do canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Ref para o elemento da imagem importada
  const imageRef = useRef<HTMLImageElement>(null);

  // Variáveis para guardar informações sobre a pintura
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [brushColor, setBrushColor] = useState("#000000"); // Cor do pincel padrão (preto)
  const [brushSize, setBrushSize] = useState(5); // Tamanho do pincel padrão
  const [brushType, setBrushType] = useState("normal"); // Tipo do pincel: "normal" ou "round"
  const [importedImage, setImportedImage] = useState<string | null>(null);

  // Função para desenhar no canvas
  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const currentX = e.clientX - canvas.offsetLeft;
    const currentY = e.clientY - canvas.offsetTop;

    // Inicia o desenho do ponto anterior até o atual
    ctx.beginPath();
    if (brushType === "round") {
      ctx.arc(lastX, lastY, brushSize / 2, 0, Math.PI * 2); // Desenha uma forma circular se o pincel for "round"
    } else {
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(currentX, currentY);
    }
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.stroke();

    // Atualiza a última posição
    setLastX(currentX);
    setLastY(currentY);
  };

  // Event listeners para começar e parar o desenho
  const handleMouseDown = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (canvas) {
      setLastX(e.clientX - canvas.offsetLeft);
      setLastY(e.clientY - canvas.offsetTop);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleMouseOut = () => {
    setIsDrawing(false);
  };

  // Função para lidar com a importação da imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImportedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para fazer o download da imagem gerada no paint
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL();
      downloadLink.download = "paint_image.png";
      downloadLink.click();
    }
  };

  useEffect(() => {
    // Configurações iniciais do contexto
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineJoin = "round"; // Define o estilo de junção das linhas como arredondado
        ctx.fillStyle = "white"; // Define a cor de fundo do canvas como branco
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Preenche o canvas com a cor branca
      }
    }
  }, []);

  useEffect(() => {
    // Desenha a imagem importada no canvas
    if (importedImage && imageRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(imageRef.current, 0, 0, canvas?.width, canvas?.height);

      // Define um retângulo de recorte para evitar que as linhas da imagem sejam pintadas
      ctx.globalCompositeOperation = "destination-in";
      ctx.beginPath();
      ctx.rect(0, 0, canvas?.width, canvas?.height);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }
  }, [importedImage]);

  return (
    <div className={styles.container}>
      <div className={styles.contentBtn}>
        <input
          type="color"
          id="brushColorPicker"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        />
        <input
          type="range"
          id="brushSize"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
        />
        <select
          id="brushType"
          value={brushType}
          onChange={(e) => setBrushType(e.target.value)}
        >
          <option value="normal">Pincel normal</option>
          <option value="round">Pincel arredondado</option>
        </select>
      </div>
      <canvas
        ref={canvasRef}
        id="paintCanvas"
        width={600}
        height={400}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        onMouseMove={draw}
        className={styles.canvas}
      ></canvas>
      {importedImage && (
        <img
          ref={imageRef}
          src={importedImage}
          alt="Imagem importada"
          style={{ display: "none" }}
        />
      )}
      <div style={{ display: "flex", gap: "8px" }}>
        <label htmlFor="imageInput" className={styles.customFileInput}>
          Escolher Imagem
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        <button className={styles.buttonDownload} onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default PaintCanvas;
