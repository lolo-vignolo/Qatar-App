import Avatar from "components/Avatar";
import useTimeAgo from "components/hooks/useTimeAgo";

export default function Devit({ avatar, username, id, content, createdAt , img }) {
  const timeAgo = useTimeAgo(createdAt); // es un custom hookque me devuelve el tiempo

  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong>{username} </strong>
            <strong> . </strong>
            <time>{timeAgo}</time>
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

          date {
            color: #555;
            font-size: 12px;
          }
        `}
      </style>
    </>
  );
}
