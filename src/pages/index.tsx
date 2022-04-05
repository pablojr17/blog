/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import techsImage from "../../public/images/techs.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pablo Gomes</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1 className={styles.animatee}>HI, I'M PABLO GOMES</h1>
            <div>
              <span>
                Software developer with experience in building ReactJs and React
                Native projects, specializing in delivering high quality
                Front-end solutions.
              </span>
              <span>• Tools: ReactJS, Next.js, TypeScript, CSS-in-JS</span>
            </div>
            <a>
              <button>
                <span>CONHECER AGORA</span>
              </button>
            </a>
          </section>
          <section className={styles.contentImg}>
            <img src="/images/eu.jpeg" alt="Conteúdos Sujeito Programador" />
          </section>
        </div>

        {/* <hr className={styles.divisor} />

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

        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt="Tecnologias" />

          <h2>
            Mais de <span className={styles.alunos}>15 mil</span> alunos já
            levaram sua carreira ao proximo nivel
          </h2>
          <span>
            E você vai perder a chance de evoluir de uma vez por todas?
          </span>

          <a>
            <button>
              <span>COMEÇAR AGORA!</span>
            </button>
          </a>
        </div> */}
      </main>
    </>
  );
}
