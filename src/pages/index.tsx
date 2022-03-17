/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Pablo Gomes</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Descrição interessante aqui!</h1>
            <span>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown
            </span>

            <a>
              <button>
                <span>COMEÇAR AGORA</span>
              </button>
            </a>
          </section>
          {/* <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos Sujeito Programador"
          /> */}
        </div>
      </main>
    </>
  );
}
