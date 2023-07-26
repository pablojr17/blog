import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    // Verifique se a chamada à API ainda não foi feita
    if (!apiCalled) {
      // Faz a chamada à API para incrementar o contador de visitantes somente uma vez
      fetch("/api/visitors", {
        method: "POST",
      });
      // Defina o estado para indicar que a chamada à API já foi feita
      setApiCalled(true);
    }
  }, [apiCalled]); // Dependência apiCalled para observar as mudanças no estado

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
