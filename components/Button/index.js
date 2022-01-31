import { colors } from "../../styles/Theme";

export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>

      <style jsx>{`
        button {
          align-items: center;
          display: flex;
          background: ${colors.loginButton};
          font-size: 15px;
          color: ${colors.withe};
          border-radius: 5px 5px;
          font-weight: 600;
          padding: 8px 16px;
          cursor: pointer;
          transition: opacity 0.3s ease;
          user-select: none;
        }
        /* cuando el btn tiene el atributo de disabled, que pase tal cosa.*/

        button[disabled] {
          pointer-events: none;
          opacity: 0.2;
        }

        button:hover {
          opacity: 0.8;
        }

        button > :global(svg) {
          margin-right: 9px;
          place-item: center;
        }
      `}</style>
    </>
  );
}
