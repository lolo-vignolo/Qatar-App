import Avatar from "components/Avatar";

import useTimeAgo from "components/hooks/useTimeAgo";

import Link from "next/link";
import { useRouter } from "next/router";


export default function Devit({ userCreator, userId, avatar, username, content, id, createdAt , img }) {
  const timeAgo = useTimeAgo(createdAt); // es un custom hookque me devuelve el tiempo

  const router = useRouter()
  

  //este router ("NAVEGACIÓN PROGRAMATICA") hace un push agregando un secmento al URL, y navegando a alli. Funciona como el Link 
  const handleArtClick = (event) => {
    event.preventDefault()
    router.push(`/status/${id}`)
  }


  return (
    <>
      <article onClick={handleArtClick}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong>{username} </strong>
            <strong> . </strong>
              {/*ese id es el que importo, viene con las props, es del mismo objeto */}
            <Link href={`/status/${id}`}>
              <a>
              <time>{timeAgo}</time> 
              </a>
             
            </Link>
            
            
          </header>
          <p>{content}</p>
          {img && <img src= {img} />}
        </section>
      </article>

      <style jsx>
        {`
          article {
            border-bottom: 1.5px solid #eee;
            display: flex;
            padding: 10px 15px;
          }

          article:hover{
            cursor:pointer;
            background: #e9eef2;

          }

          a {
            color: #555;
            font-size: 14px;
            text-decoration: none;
          }

          a:hover{
            color:#5800FF;
            text-decoration:underline
          }

          div {
            padding-right: 10px;
          }

          img{
              border-radius: 10px;
              height: auto;
              width:100%;
              margin-top:10px;
          }

          p {
            line-height: 1.3125;
            margin: 0;
          }

          time {
            color: #555;
            font-size: 12px;
          }
          time:hover{
            color:#5800FF;
          }
        `}
      </style>
    </>
  );
}
