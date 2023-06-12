import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../contexts/FavoriteContext'; 
import axios from 'axios';
import '../styling/styles.scss';
import { ReactComponent as FavoriteIcon } from './icons/favorite_FILL1_wght400_GRAD0_opsz48.svg'

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const { favorites } = useContext(FavoriteContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemon(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <h1>Choose your Pokémon</h1>
      <ul>
        {pokemon.map((pokemon, index) => (
          <li key={index} className="list__item">
            <Link to={`/pokemon/${pokemon.name}`} className="list__link">
              {pokemon.name}
              {favorites.includes(pokemon.name) && <FavoriteIcon className="favorite_icon"/>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
