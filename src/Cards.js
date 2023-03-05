import React from "react";
import Card from "./Card";
import "./tailwind.output.css";

// console.log(data);

const Cards = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="text-center my-10">
        <h1 className="">Our Tours</h1>
        <div className="bg-red-500 mx-40">yo</div>
      </div>

   <div className="flex gap-4 ">
       {tours.map((tour)=>{
          return <Card className="basis-1/3" key={tour.id} {...tour} removeTour={removeTour} />
       })}
   </div>
    </section>
  );
};

export default Cards;
