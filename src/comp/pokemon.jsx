import React, { useEffect, useState}  from 'react';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/api';
import Card from '../comp/pokemonComp/card';

function Pokemon() {

    // fin CODIGO API

    const [pokemons, setPokemons] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);

    useEffect(() => {
        ( async ()=>{
          await loadPokemons();
        //   console.log(pokemons);
        })();
      }, []);

      const loadPokemons =  async () => {
        try {
          const response = await getPokemonsApi(nextUrl);
          setNextUrl(response.next);
          const pokemonsArray = [];
    
          for await (const pokemon of response.results){
            const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
            
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other['official-artwork'].front_default
            });
          }
    
          setPokemons([...pokemons, ...pokemonsArray]);
    
         
    
        } catch (error) {
          console.error(error);
        }
        
      }

    //   console.log(pokemons);
    //   fin CODIGO API

    return (
        <Card
        pokemons={pokemons} 
        />
    );
  }
  
  export default Pokemon;