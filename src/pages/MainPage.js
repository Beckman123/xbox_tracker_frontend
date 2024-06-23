// src/pages/MainPage.js

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 95%;
  margin: 0 auto;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 80%;
`;

const GameListContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

const MainPage = () => {
  return (
    <Container>
      <Content>
        <GameListContainer>
          <h2>Welcome to the Xbox Game Tracker</h2>
          <p>This is the main page where you can find a list of games.</p>
        </GameListContainer>
      </Content>
    </Container>
  );
};

export default MainPage;
