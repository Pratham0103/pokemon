import React, { useState, useEffect } from 'react'
import Description from './Description'
import pokemon_list from '../Mypokemon'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addProduct, removeItem} from '../redux/cartRedux';

function PokemonThumbnail ({id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,
    bs4,bs5,bs6,captures}) 
    {
        const cart = useSelector((state) => state.cart);
        const dispatch = useDispatch();
    const [show,setShow] = useState(false)
    const [capture,setCapture] = useState(captures)
    //setCapture(captures);
    console.log(name+capture+captures);
    function pokemon_add()
    {
       if (captures)
            {
            pokemon_list.push(name);
            dispatch(addProduct(name));
            }
        else
        {
            dispatch(removeItem(name));
            pokemon_list.map((poke, index)=>{
                if (poke === name)
                {
                    pokemon_list.splice(index, 1);
                }
        });
        }
        setCapture(!capture);
        //const cart = useSelector((state) => state.cart);
        //console.log(pokemon_list);
    }

    return (
        <div>
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name.toUpperCase() }</h3>
                <small>Type : {type}</small>
                <button className="pokeinfo" onClick={()=>setShow(!show)}>{show===true?"Know less...":"Know more..."}</button>
                {show===true?<Description weightpok={weight} heightpok={height} pokstat1={stat1}
                pokstat2={stat2}
                pokstat3={stat3}
                pokstat4={stat4}
                pokstat5={stat5}
                pokstat6={stat6}
                posbs1={bs1}
                posbs2={bs2}
                posbs3={bs3}
                posbs4={bs4}
                posbs5={bs5}
                posbs6={bs6}
                 /> :<></>}
                 <button onClick={pokemon_add}>{captures===true?"Capture":"Release"}</button>
                 
            </div>
            
        </div>
    )
}

export default PokemonThumbnail