// src/pages/Games.js

import React from 'react';
import styled from 'styled-components';
import GameList from '../components/GameList';

const GamesContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #282c34;
  text-align: center;
  margin-bottom: 20px;
`;

const GameListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Games = () => {
  return (
    <GamesContainer>
      <Title>Games</Title>
      <GameListWrapper>
        <GameList />
      </GameListWrapper>
    </GamesContainer>
  );
};

export default Games;
