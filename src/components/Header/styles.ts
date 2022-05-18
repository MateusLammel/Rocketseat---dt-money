import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 1rem;
      color: #fff;

      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
    }
  }
`;
