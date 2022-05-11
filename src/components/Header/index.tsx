import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Image src={logo} alt="Pablo Gomes Logo" />
          </a>
        </ActiveLink>

        {/* <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <a>Quem sou</a>
          </ActiveLink>
        </nav> */}

        <a
          className={styles.readyButton}
          type="button"
          target={`_blank"`}
          href="https://www.linkedin.com/in/pablo-r-gomes/"
        >
          CONHECER
        </a>
      </div>
    </header>
  );
}
