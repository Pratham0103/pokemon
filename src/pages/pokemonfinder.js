import React,{ useEffect, useState } from "react";
import PokemonThumbnail from "../components/PokemonThumbnail";
import Description from '../components/Description';

function App() {
  const [show,setShow] = useState(false);
  const [allPokemons,setAllPokemons] = useState([]);
  const [loadPoke,setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    
  const getAllPokemons = async () =>{

    var ai = Math.floor(Math.random() * 700) + 1;
        console.log(ai);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ai}`)
    const data = await res.json()
    setAllPokemons(currentList => [data])
    
    const testElements = document.getElementsByClassName('animate');
    const visibilityElement = document.getElementsByClassName('pokemon-card');
    testElements[0].classList.add("run-animation");
    visibilityElement[0].classList.add("hide-pokemon");
    
    testElements[0].addEventListener('animationend', () => {
      console.log('Animation ended');
      visibilityElement[0].classList.remove("hide-pokemon");
      testElements[0].classList.remove("run-animation");

    });


    
    //setLoadPoke(data.next)
   
    // function createPokemonObject(result){
    //   result.forEach(async (pokemon) => {
    //     var ai = Math.floor(Math.random() * 700) + 1;
    //     console.log(ai);
    //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ai}`)
    //     const data = await res.json();
    //     console.log(data.name);
    //     setAllPokemons(currentList => [...currentList,data])
    //   });
    // }
    // createPokemonObject(data.results)
    //await console.log(allPokemons)
  }

  useEffect(()=>{
    getAllPokemons()
  },[])
function hidePokemon(){
  var pikachu = document.querySelector('.pikachu');
  pikachu.style.animation = 'pikachu-disappear 0.5s ease 1';
  pikachu.style.animationDelay = '1s';
  pikachu.style.animationFillMode = 'forwards';
}
// allPokemons.map((pokemon) =>
  //   //console.log(pokemon.sprites.versions['generation-v']['black-white'].animated.front_default)
  // );

  return (
    <div className="animate">
     <h1>Pokemon Kingdom .</h1>
     <div className="pokemon-container">
       <div className="pokemon-card">
          {allPokemons.map((pokemon,index)=> 
          <div>
          <div>
    <h1 className="throw">{PokemonThumbnail.id}</h1>
    {/* <h1 class="gotcha">Gotcha!</h1> */}
    {/* <h1 class="success">Pikachu was caught!</h1> */}
  </div>
                 <PokemonThumbnail
                  id = {pokemon.id}
                  name = {pokemon.name}
                image = {pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
                //image = {pokemon.sprites.other.home.front_default}
                  type={pokemon.types[0].type.name}
                  key={index}
                  height = {pokemon.height}
                  weight = {pokemon.weight}
                  stat1 = {pokemon.stats[0].stat.name}
                  stat2 = {pokemon.stats[1].stat.name}
                  stat3 = {pokemon.stats[2].stat.name}
                  stat4 = {pokemon.stats[3].stat.name}
                  stat5 = {pokemon.stats[4].stat.name}
                  stat6 = {pokemon.stats[5].stat.name}
                  bs1 = {pokemon.stats[0].base_stat}
                  bs2 = {pokemon.stats[1].base_stat}
                  bs3 = {pokemon.stats[2].base_stat}
                  bs4 = {pokemon.stats[3].base_stat}
                  bs5 = {pokemon.stats[4].base_stat}
                  bs6 = {pokemon.stats[5].base_stat}
                  captures = {true}
                 />

  
  <img src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt="Pikachu" className="pikachu"/>
  
  
  <div id="pokeball" className="pokeball">

    <div className="top"></div>
    <div className="centre-black"></div>
    <div className="centre-white"></div>
    <div className="bottom"></div>

    <div className="catch"></div>
  </div>
  <a href="#pokeball" className="button" onClick={()=>hidePokemon()}>catch</a>
                 <button className="pokeinfo" onClick={()=>setShow(!show)}>{show===true?"Know less...":"Know more..."}</button>
                {show===true?<Description weightpok={pokemon.weight} heightpok={pokemon.height} pokstat1={pokemon.stats[0].stat.name}
                // pokstat2={stat2}
                // pokstat3={stat3}
                // pokstat4={stat4}
                // pokstat5={stat5}
                // pokstat6={stat6}
                // posbs1={bs1}
                // posbs2={bs2}
                // posbs3={bs3}
                // posbs4={bs4}
                // posbs5={bs5}
                // posbs6={bs6}
                 /> :<></>}

                 </div>
            )}
            
                 {/* <button onClick={pokemon_add}>{captures===true?"Capture":"Release"}</button> */}
            <button className="load-more" onClick={()=>getAllPokemons()}>Explore</button>
       </div>
     </div>
    </div>
  );
}

export default App;