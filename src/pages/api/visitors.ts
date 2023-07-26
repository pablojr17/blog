import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const filePath = path.join(process.cwd(), "data", "visitors.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Ler o arquivo visitors.json e obter o contador atual
    const data = fs.readFileSync(filePath, "utf-8");
    const visitors = JSON.parse(data);

    res.status(200).json({ visitors });
  } else if (req.method === "POST") {
    // Atualizar o contador e salvar no arquivo visitors.json
    const data = fs.readFileSync(filePath, "utf-8");
    let visitors = JSON.parse(data);

    visitors++;

    fs.writeFileSync(filePath, JSON.stringify(visitors), "utf-8");

    res.status(200).json({ visitors });
  } else {
    res.status(405).end(); // Método não permitido
  }
}
