import React, { useState } from "react";

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <section className="my-10 shadow-lg">
      <img src={image} alt={name} />
      <footer className="p-6">
        <div>
        <h1 className="font-bold">{name}</h1>
        <p>{price}</p>
        </div>
        <p className="">
        {readMore ? info : `${info.substring(0,200)}...`}
        </p>
       
        <button onClick={()=>setReadMore(!readMore)}>
           {readMore ? 'show less' : ' read more'}
        </button>
       
 
        
      </footer>
      <button className="p-2 border-2 border-red-500 text-red-500" onClick={()=>removeTour(id)}>
            Not Interested
        </button>
    </section>
  );
};

export default Card;
