import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";
import { useEffect, useState } from "react";

export function Header() {
  const [visitorsCount, setVisitorsCount] = useState(0);

  useEffect(() => {
    // Faz a chamada à API para obter o contador de visitantes
    fetch("/api/visitors")
      .then((response) => response.json())
      .then((data) => setVisitorsCount(data.visitors));
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Image src={logo} alt="Pablo Gomes Logo" />
          </a>
        </ActiveLink>

        <div className={styles.content}>
          <Link href="/paint">
            <a className={styles.readyButton}>MEU PAINT</a>
          </Link>
          <a
            className={styles.paint}
            type="button"
            target={`_blank"`}
            href="https://www.linkedin.com/in/pablo-r-gomes/"
          >
            CONECTAR
          </a>
        </div>
      </div>
      <p className={styles.totalView}>Visitantes: {visitorsCount}</p>
    </header>
  );
}
