import React, { useState, useEffect, useContext } from 'react';
import ErrorPage from './Error';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FavoriteContext } from '../contexts/FavoriteContext'; 
import '../styling/styles.scss';
import { ReactComponent as FavoriteIcon } from './icons/favorite_FILL1_wght400_GRAD0_opsz48.svg'
import { ReactComponent as BrokenHeart } from './icons/heart_broken_FILL1_wght400_GRAD0_opsz48.svg'

const PokemonInfo = () => {
  const [isError, setIsError] = useState(null)
  const [pokemon, setPokemon] = useState(null);
  const [isFavourite, setFavourite] = useState(false);
  const { name } = useParams();
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext); 

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => setPokemon(response.data))
      .catch(err => setIsError(err));
  }, [name]);

  useEffect(() => {
    setFavourite(favorites.includes(name)); 
  }, [favorites, name]);

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFavorite(name); 
    } else {
      addFavorite(name); 
    }
    setFavourite(!isFavourite); 
  };

  if (isError) {
    return <ErrorPage />
  } else if(!pokemon){
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="pokemon">
      
      <div className="pokemon__info">

        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        
        <div>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>

        <div className="abilities">
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        

        <button onClick={toggleFavourite}>
          {isFavourite ? <span>Remove from Favorites <BrokenHeart className="heart-icon"/></span> : <span>Add to Favorites <FavoriteIcon className="heart-icon"/></span>}
        </button>
      </div>
    </div>
  );
};

export default PokemonInfo;
