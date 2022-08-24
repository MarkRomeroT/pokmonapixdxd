import React from 'react';
import '../../style/card.css'
function Card(props) {

    // fin CODIGO API
    const {pokemons} = props;
    // console.log(pokemons);
   //  console.log(pokemons[0].name);
    //   fin CODIGO API

    return ( 
        <div className="grid">
            <div className="row">
                {pokemons.map((item, index) => (
                    <div key={index} className="col-md-1">
                        <div className="contenedor">
                            <img className="img" src={item.image} alt={item.name}/>
                        </div>
                    </div>
                ))}
            </div>   
        </div>

    );
  }
  
  export default Card;