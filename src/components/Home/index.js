import React, { Component } from 'react';
import styled from 'styled-components';
import TableSection from "./TableSection";

class Home extends Component {
  render() {
    return (
      <S.Container>
        <TableSection />
      </S.Container>
    );
  }
}

const S = {};

S.Container = styled.div`
  
`;

export default Home;