/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import techsImage from "../../public/images/techs.svg";

export default function Home() {
  const texto = "Olá Mundo!\n\nComo vai você?";
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(texto)}`;

  function handleClick() {
    window.location.href = whatsappURL;
  }

  return (
    <>
      <Head>
        <title>Pablo Gomes</title>
        <meta
          name="description"
          content="Web developer page Pablo Gomes, developed in nextJs."
        />
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <button onClick={handleClick}>Compartilhar no WhatsApp</button>

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
          </section>
          <Image
            src="/images/eu.jpeg"
            height={400}
            width={360}
            objectFit="contain"
            alt="Conteúdos Sujeito Programador"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Community Expert.</h2>
            <span>
              Selecionado entre +2000 Devs, para o programa "DioX Squad"
              promovido pela Digital Innovation One, nessa oportunidade tive
              acesso a rede global de mentores, onde pude impulsionar minhas o
              meu desenvolvimento em: Liderança técnica, arquitetura escalável,
              desenvolvimento ágil, protagonismo, colaboração e transformação
              socioeconômica.
            </span>
          </section>

          <img
            src="/images/img-dio.jpg"
            alt="Conteudos desenvolvimento de apps"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img
            src="/images/img-agri.png"
            alt="Conteúdos desenvolvimento de aplicacoes web"
          />

          <section>
            <h2>1º lugar no Hackthon Agritech.</h2>
            <span>
              Hackthon Agritech, realizado pela Faeb Senar, juntamente com o
              Sebrae Bahia.
            </span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image quality={100} src={techsImage} alt="Tecnologias" />
          <h2>
            Mais de <span className={styles.alunos}>4 mil</span> views no
            Youtube.
          </h2>
          <a
            href="https://www.youtube.com/channel/UCrtsXqKMFh7CNxmvv1vpiyg"
            target="_blank"
            rel="noreferrer"
          >
            <button>Visitar canal!</button>
          </a>
        </div>
      </main>
    </>
  );
}
