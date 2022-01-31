import css from "styled-jsx/css";
import { breackpoints, colors, fonts } from "../../styles/Theme";

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    border-radius: 5px;
    background: ${colors.withe};
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    overflow-y: auto;
  }

  @media (min-width: ${breackpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breackpoints.mobile};
    }
  }
`;

export const globalStyle = css.global`
  html body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    overflow: hidden;
  }

  textarea,
  input {
    font-family: ${fonts.base};
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  * {
    box-sizing: border-box;
  }
`;
