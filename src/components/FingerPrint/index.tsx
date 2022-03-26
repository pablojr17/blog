import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import EmBreve from "../../../public/images/embreve.png";
import Image from "next/image";

export function FingerPrint() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.scan}>
          <div className={styles.fingerprint}></div>
          <h3>Scanning...</h3>
        </div>
      ) : (
        <Image src={EmBreve} alt="Tecnologias" />
      )}
    </div>
  );
}
