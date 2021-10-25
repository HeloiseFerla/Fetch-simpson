import React from 'react';


export default function Displayquote({ quote }) {
  return (
    
      <div >
        <h2>{quote.character}</h2>
        <img src={quote.image} alt={quote.character} />
        <p>{quote.quote}</p>
        
      </div>
  );

}

