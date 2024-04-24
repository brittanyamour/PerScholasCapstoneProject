import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css'
import * as Fa6Icons from "react-icons/fa6";

export default function Home() {
    const [pokemon, setPokemon] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        const colors = {
            fire: '#FDDFDF',
            grass: '#DEFDE0',
            electric: '#FCF7DE',
            water: '#DEF3FD',
            ground: '#F4E7DA',
            rock: '#D5D5D4',
            fairy: '#FCEAFF',
            poison: '#98D7A5',
            bug: '#F8D5A3',
            dragon: '#97B3E6',
            psychic: '#EAEDA1',
            flying: '#F5F5F5',
            fighting: '#E6E0D4',
            normal: '#F5F5F5'
        };

        const main_types = Object.keys(colors);

        const fetchPokemon = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
                const pokemonList = response.data.results;
                const pokemonData = await Promise.all(pokemonList.map(poke => getPokemon(poke.name)));
                setPokemon(pokemonData);
            } catch (error) {
                console.log('Error fetching Pokemon data:', error);
            }
        };

        const getPokemon = async (name) => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                return createPokemonCard(response.data);
            } catch (error) {
                console.log('Error fetching Pokemon data:', error);
            }
        };

        const createPokemonCard = (pokemon) => {
            const pokeTypes = pokemon.types.map(type => type.type.name)
            const type = main_types.find((type) => pokeTypes.indexOf(type) > -1);
            const color = colors[type];

            return {
                id: pokemon.id,
                name: pokemon.name,
                type: type,
                color: color
            };
        };

        fetchPokemon();
    }, []);

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const filteredPokemon = pokemon.filter((p) => {
        if (!searchText && !selectedType) return true;
        if (searchText && !selectedType) return p.name.toLowerCase().includes(searchText.toLowerCase());
        if (!searchText && selectedType) return p.type === selectedType;
        return p.name.toLowerCase().includes(searchText.toLowerCase()) && p.type === selectedType;
    });

    const addToFavorites = (pokemon) => {
        if (!favorites.find(favorite => favorite.id === pokemon.id)) {
            setFavorites(prevFavorites => [
                ...prevFavorites,
                pokemon
            ]);
        }
    };

    return (
        <div>
            <h1 className="heading">My Poke Favorites</h1>
            <div className="search">
                <input
                    type="search"
                    placeholder="Search Pokemon..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <select value={selectedType} onChange={handleTypeChange}>
                    <option value="">Filter by Type</option>
                    <option value="fire">Fire</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="water">Water</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="fairy">Fairy</option>
                    <option value="poison">Poison</option>
                    <option value="bug">Bug</option>
                    <option value="dragon">Dragon</option>
                    <option value="psychic">Psychic</option>
                    <option value="flying">Flying</option>
                    <option value="fighting">Fighting</option>
                    <option value="normal">Normal</option>
                </select>
                <button>Search</button>
            </div>
            <div className="poke-container">
                {filteredPokemon.map((p, index) => (
                    <div key={index} className="pokemon" style={{ backgroundColor: p.color }}>
                        <div className="image-container">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt={p.name} />
                        </div>
                        <div className="info">
                            <span className="number">#{p.id}</span>
                            <h3 className="name">{p.name}</h3>
                            <small className="type">Type <span>{p.type}</span></small>
                            <button onClick={() => addToFavorites(p)}>
                                <Fa6Icons.FaRegHeart />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
