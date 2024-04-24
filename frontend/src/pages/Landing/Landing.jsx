import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const [randomPokemon, setRandomPokemon] = useState(null);
    const navigate = useNavigate();
    
    //Randomized Hero Image
    useEffect(() => {
        const fetchRandomPokemon = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10"); // Fetch 10 random Pokemon
                const pokemonList = response.data.results;
                const randomIndex = Math.floor(Math.random() * pokemonList.length); // Get a random index
                const randomPokemonData = await fetchPokemonData(pokemonList[randomIndex]); // Fetch random Pokemon data
                setRandomPokemon(randomPokemonData);
            } catch (error) {
                console.log('Error fetching Pokemon data:', error);
            }
        };

        const fetchPokemonData = async (pokemon) => {
            try {
                const response = await axios.get(pokemon.url);
                return response.data;
            } catch (error) {
                console.log('Error fetching Pokemon data:', error);
            }
        };

        fetchRandomPokemon();
    }, []);

    // Navigate to the /home route
    const enterSite = () => {
        navigate('/home');
    };

    return (
        <div>
            <h1>My Poke Favorites</h1>
            {randomPokemon && (
                <div className="landing-pokemon">
                    <div className="landing-container">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomPokemon.id}.png`} alt={randomPokemon.name} />
                    </div>
                    <div className="landing-info">
                        <span className="landing-number">#{randomPokemon.id}</span>
                        <h3 className="landing-name">{randomPokemon.name}</h3>
                    </div>
                </div>
            )}
            {/* Click to enter */}<br></br>
            <button onClick={enterSite}>Enter Site</button>
        </div>
    );
}
