import React from 'react';
import styled from 'styled-components';

const TableSection = () => {
  return (
    <S.Container>
      <S.Item1>1: Orange</S.Item1>
      <S.Item2>2: Green</S.Item2>
      <S.Item3>3: Violet</S.Item3>
      <S.Item4>4: Pink</S.Item4>
      <S.Item5>5: Blue</S.Item5>
      <S.Item6>6: Brown</S.Item6>
    </S.Container>
  );
};

const S = {};

S.Container = styled.div`
  width: 1000px;
  margin: 30px auto;
  display: grid;
  background: aliceblue;
  //grid-template-rows: 150px 150px;
  grid-template-rows: repeat(2, 150px);
  //grid-template-columns: 150px 150px 150px;
  //grid-template-columns: repeat(3, 150px);
  //grid-template-columns: repeat(2, 150px) 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  //grid-row-gap: 30px;
  //grid-column-gap: 30px;
  grid-gap: 30px;
`;

S.TitlesContainer = styled.div`
  
`;

S.Item = styled.div`
  color: white;
`;

S.Item1 = styled(S.Item)`
  background: orange
`;

S.Item2 = styled(S.Item)`
  background: green
`;

S.Item3 = styled(S.Item)`
  background: violet;
`;

S.Item4 = styled(S.Item)`
  background: pink;
`;

S.Item5 = styled(S.Item)`
  background: blue;
  :hover {
    opacity: 0.5;
  }
`;

S.Item6 = styled(S.Item)`
  background: brown;
`;

export default TableSection;