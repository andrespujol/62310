import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 35vh;
  background-color: rgba(202, 202, 170, 0.5);
  border: 2px solid #cacaaa;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 2rem;
  color: #fff;
`;

export const Title = styled.h1`
  height: 10vh;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  color: #000;
`;

export const Imagen = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const Parrafo = styled.p`
  height: 10vh;
  padding-left: 5px;
  color: #000;
`;
