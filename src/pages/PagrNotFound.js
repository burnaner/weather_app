import styled from "styled-components";

const Wrap = styled.div`
  color: white;
  height: 100vh;
  padding: 20% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgb(86, 86, 245);
  background: linear-gradient(
    360deg,
    rgba(86, 86, 245, 1) 0%,
    rgba(117, 232, 255, 1) 100%
  );
`;

const Title = styled.h2`
  font-size: 60px;
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <Title>페이지를 찾을 수 없습니다.</Title>
    </Wrap>
  );
};
