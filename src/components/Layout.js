import styled from "styled-components";

const Section = styled.section`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  // =>컨포넌트 안쪽으로 자식을 넣고 싶을땐
  // children 프롭스를 사용해주면 됨
  return <Section>{children}</Section>;
};
