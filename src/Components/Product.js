import React from "react";
import Pro from "./Pro";

const BioData = [
  {
    _id: 1,
    name: "Four cheese",
    price: 799,
    size: "Medium",
    image: "",
  },
  {
    _id: 2,
    name: "Chicken mushroom",
    price: 699,
    size: "Small",
    image: "uploads/1619798028739-356043472.png",
  },
  {
    _id: 3,
    name: "Margarita",
    price: 699,
    size: "Medium",
    image: "uploads/1619798136362-377165689.png",
  },
  {
    _id: 4,
    name: "Carbonara",
    price: 999,
    size: "Large",
    image: "uploads/1619798154274-595975749.png",
  },
  {
    _id: 5,
    name: "Mix BBQ",
    price: 1299,
    size: "Large",
    image: "uploads/1619798169571-671551234.png",
  },
  {
    _id: 6,
    name: "Mushroom",
    price: 499,
    size: "Small",
    image: "uploads/1619798195141-748496629.png",
  },
  {
    _id: 7,
    name: "Double peperoni",
    price: 1399,
    size: "Large",
    image: "uploads/1619798224663-303286145.png",
  },
  {
    _id: 8,
    name: "Chicken premier",
    price: 899,
    size: "Medium",
    image: "uploads/1619798248317-105704752.png",
  },
  {
    _id: 9,
    name: "Caramel pineapple",
    price: 799,
    size: "Small",
    image: "uploads/1619798276630-463888204.png",
  },
  {
    _id: 10,
    name: "Havana special",
    price: 599,
    size: "Small",
    image: "uploads/1619798368145-612682611.png",
  },
];

const Product = () => {


  
    return (
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8"> Products </h1>
        <div className="grid grid-cols-5 my-8 gap-24">
            {
                BioData.map(Prods => <Pro key={Prods._id} Prods={Prods} />)
            }
        
        </div>
        
      </div>
    );
  
};

export default Product;
