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
          <img
            src="/images/banner-conteudos.png"
            alt="Conteúdos Sujeito Programador"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a cria aplicativos para android e IOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver app nativos
              IOS e android
            </span>
          </section>

          <img
            src="/images/financasApp.png"
            alt="Conteudos desenvolvimento de apps"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Aprenda criar sistemas web" />
          <section>
            <h2>Aprenda a cria aplicativos para android e IOS</h2>
            <span>
              Criar sistemas web é uma das tarefas mais importantes para
              desenvolvedores.
            </span>
          </section>
        </div>
      </main>
    </>
  );
}
