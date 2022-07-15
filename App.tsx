import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { Home } from './src/pages/Home';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color:#2a1d14 ;
  justify-content:center;
  align-items:center ;
  position:relative ;
  flex:1 ;
`;


const App = () => {
  return (
    <Container>
      <Home/>
    </Container>
  );
};

export default App;
