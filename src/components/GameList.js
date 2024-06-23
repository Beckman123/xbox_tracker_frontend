// src/components/GameList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  text-align: center;
`;

const GameList = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/games');
        setGames(response.data);
      } catch (error) {
        setError('Error fetching games');
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <List>
      {games.map((game) => (
        <ListItem key={game.id}>{game.title}</ListItem>
      ))}
    </List>
  );
};

export default GameList;
