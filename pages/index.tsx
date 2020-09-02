import Head from 'next/head'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Next JS</title>
      </Head>

      <main >
        <div className="titulo">
          <h1>Seu Projeto Next JS</h1>
          <h2> <span>by</span>  Carlos Eduardo Molmelstet</h2>
        </div>
        <div className="midias">
            <a href="https://github.com/carlosmolmelstet" target="_blank">GitHub</a>      
            <a href="https://www.linkedin.com/in/carlos-eduardo-molmelstet-aab775193/" target="_blank">Linkedin</a>      
            <a href="https://www.instagram.com/molmelstet_16/" target="_blank">Instagram</a>         
        </div>
      </main>

    </div>
  )
}
