import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import EmBreve from "../../../public/images/embreve.png";
import Image from "next/image";

export function FingerPrint() {
  return (
    <div className={styles.container}>
      <div className={styles.scan}>
        <div className={styles.fingerprint}></div>
        <h3>Loading...</h3>
      </div>
    </div>
  );
}
