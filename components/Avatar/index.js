export default function Avatar({ src, alt, userName }) {
  return (
    <>
      <div>
        <img src={src} alt={alt} />
        <strong>{userName ? userName : ""}</strong>
      </div>

      <style jsx>{`
        img {
          border-radius: 9999px;
          width: 55px;
          height: 55px;
        }
        div {
          display: flex;
          align-items: center;
        }

        img + strong {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}
