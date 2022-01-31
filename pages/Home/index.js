/*
    content,
    userName,
    avatar,
    userId,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likeCount: 0,
    sharedCount: 0

    id
*/


import Devit from "components/Devit";
import useUser from "components/hooks/useUser";
import { fetchLastestComments } from "../../firebase/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Create from "components/Icons/Create";
import Home from "components/Icons/Home";
import Search from "components/Icons/Search";
import Head from "next/head";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);

  // debo llamarlo para ver si el usuario está autentificado
  //sino no controla y por mas que elimine mis datos del histoy sigue mostrandome el home

  const userInfo = useUser();

  useEffect(() => {
    userInfo &&
      fetchLastestComments()
        //esta promesa es la misma que defino en client, pero debo usarla para rcibir la info, esa info la paso al setTimeline
        .then(setTimeline);
  }, [userInfo]);

  return (
    <>
     
        <Head>
          <title>Inicio / Home</title>
        </Head>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((devit) => {
            return (
              <Devit
                key={devit.id}
                id={devit.id}
                avatar={devit.avatar}
                alt={devit.userName}
                username={devit.userName}
                content={devit.content}
                userId={devit.userId}
                createdAt={devit.createdAt}
                img= {devit.img}
              />
            );
          })}
        </section>

        <nav>
          {/* usando el Link se esta forma debo pasarle un <a></a> dentro con el logo en este caso */}
          <Link href="/Home">
            <a>
              <Home width={32} height={32} stroke="#1572A1" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Search width={32} height={32} stroke="#1572A1" />
            </a>
          </Link>
          <Link href="/compose/comment">
            <a>
              <Create width={32} height={32} stroke="#1572A1" />
            </a>
          </Link>
        </nav>
      

      <style jsx>
        {`
          header {
            align-items: center;
            border-bottom: 1px solid #eee;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
            height: 49px;
            position: sticky;
            top: 0;
            width: 100%;
            display: flex;
          }

          section {
            flex: 1;
          }

          article {
            display: flex;
            padding: 10px 15px;
          }

          h2 {
            font-size: 21px;
            font-weight: 700;
            padding-left: 15px;
          }

          nav {
            background: #ffffff;
            backdrop-filter: blur(5px);
            bottom: 0;
            border-top: 1px solid #eee;
            display: flex;
            position: sticky;
            height: 49px;
            width: 100%;
          }

          nav a {
            align-items: center;
            display: flex;
            flex: 1 1 auto;
            height: 100%;
            justify-content: center;
          }

          nav a:hover {
            background: radial-gradient(#0099ff22 15%, transparent 16%);
            background-size: 180px 180px;
            background-position: center;
          }

          /* lo hago global a esto, asi me queda para otras paginas */

          nav a:hover > :global(svg) {
            stroke: #0099ff;
          }
        `}
      </style>
    </>
  );
}
