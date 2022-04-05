import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import thumImg from "../../../public/images/thumbb.png";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog - Pablo Gomes</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <a>
              <Image
                src={thumImg}
                width={720}
                height={410}
                quality={100}
                alt="post titulo 1"
              />
              <strong>
                Criando meu primeiro projeto com Next.js e TypeScript
              </strong>
              <time>31 MARÇO 2022</time>
              <p>
                Hoje eu estou criando meu primeiro projeto com Next.js e
                TypeScript, e estou aprendendo a desenvolver com ele.
              </p>
            </a>
          </Link>

          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} />
              </button>
              <button>
                <FiChevronLeft size={25} />
              </button>
            </div>
            <div>
              <button>
                <FiChevronsRight size={25} />
              </button>
              <button>
                <FiChevronRight size={25} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
