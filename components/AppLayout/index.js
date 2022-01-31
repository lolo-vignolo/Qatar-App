import styles, { globalStyle } from "./styles";

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>

      {/* este style es el estilo de lo de arriba */}

      <style jsx>{styles}</style>

      <style jsx global>
        {globalStyle}
      </style>
    </>
  );
}
