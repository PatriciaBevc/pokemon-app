import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext(); 

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); 

  const addFavorite = (pokemonName) => {
    setFavorites([...favorites, pokemonName]); 
  };

  const removeFavorite = (pokemonName) => {
    setFavorites(favorites.filter((name) => name !== pokemonName)); 
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};


