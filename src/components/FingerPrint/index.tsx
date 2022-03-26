import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import EmBreve from "../../../public/images/embreve.png";
import Image from "next/image";

export function FingerPrint() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.scan}>
          <div className={styles.fingerprint}></div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <Image src={EmBreve} alt="Tecnologias" />
      )}
    </div>
  );
}
