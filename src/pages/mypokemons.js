import pokemon_list from "../Mypokemon";
import React,{ useEffect, useState } from "react";
import PokemonThumbnail from "../components/PokemonThumbnail";
import { useSelector } from 'react-redux';

function Mypokemon()
{
    const [allPokemons,setAllPokemons] = useState([]);
    const cart = useSelector((state) => state.cart);
    const getPokemons = async () =>{
          cart.products.forEach(async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await res.json();
            setAllPokemons(currentList => [...currentList,data])
          });
        await console.log(allPokemons)
      }



    useEffect(()=>{
        getPokemons()
      },[])
    return (
        <div className="app-container">
         <h1>Pokemon Kingdom .</h1>
        
         <div className="pokemon-container">
           <div className="all-container">
              {allPokemons.map((pokemon,index)=> 
                     <PokemonThumbnail
                      id = {pokemon.id}
                      name = {pokemon.name}
                    //image = {pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                      image = {pokemon.sprites.other.home.front_default}
                      captures = {false}
                    //   type={pokemon.types[0].type.name}
                    //   key={index}
                    //   height = {pokemon.height}
                    //   weight = {pokemon.weight}
                    //   stat1 = {pokemon.stats[0].stat.name}
                    //   stat2 = {pokemon.stats[1].stat.name}
                    //   stat3 = {pokemon.stats[2].stat.name}
                    //   stat4 = {pokemon.stats[3].stat.name}
                    //   stat5 = {pokemon.stats[4].stat.name}
                    //   stat6 = {pokemon.stats[5].stat.name}
                    //   bs1 = {pokemon.stats[0].base_stat}
                    //   bs2 = {pokemon.stats[1].base_stat}
                    //   bs3 = {pokemon.stats[2].base_stat}
                    //   bs4 = {pokemon.stats[3].base_stat}
                    //   bs5 = {pokemon.stats[4].base_stat}
                    //   bs6 = {pokemon.stats[5].base_stat}
                      
                     />
                )}
           </div>
           {/* <button className="load-more" onClick={()=>getAllPokemons()}>More Pokemons</button> */}
         </div>
        </div>
      );

}

export default Mypokemon;