import React, { useState } from "react";
import CommentsSection from "../components/CommentsSection";

const ProductDisplay = ({ item }) => {
  // console.log(item)
  const {
    name,
    id,
    price,
    seller,
    ratingsCount,
    quantity,
    description,
    buy_url,
    summery,
  } = item;

  // const [prequantity, setQuantity] = useState(quantity);
  // const [coupon, setcoupon] = useState("");
  //   const [size, setSize] = useState("Select Size");
  //   const [color, setColor] = useState("Select Color");

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> {ratingsCount} review </span>
        </p>
        <h4> ₹ {price} </h4>
        <h6> {description} </h6>
      </div>
      <div>
      <div className="text-center">
      
      <h6 className="bg-warning text-white p-2">Summery</h6>
      
      
    </div>
      <p>{summery}</p>
      </div>

      <form className="mt-5">
        <label className="lab-btn">
          <span>{seller}</span>
        </label>
        <button type="submit" className="lab-btn bg-primary">
          
           <a href={buy_url} target="_blank" > Buy</a>
          
        </button>
        
      </form>
      
        <CommentsSection/>
    </div>

  );
};

export default ProductDisplay;
