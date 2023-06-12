import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../contexts/FavoriteContext';
import '../styling/styles.scss';

const MyFavorites = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="favorites">
      <h1>My Favorite Pokémon</h1>

      <div className="favorites__list">
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((pokemonName, index) => (
            <li key={index} className="favorites__list_item">
              <Link to={`/pokemon/${pokemonName}`} className="favorites__list_item_link">{pokemonName}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no favorite Pokémon selected yet :(</p>
      )}
      </div>
      
    </div>
  );
};

export default MyFavorites;