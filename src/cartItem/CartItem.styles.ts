import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  margin-top: 20px;

  div {
    flex: 1;
  }

  .infomation,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    margin-left: 40px;
    max-width: 150px;
    object-fit: cover;
  }
`;
