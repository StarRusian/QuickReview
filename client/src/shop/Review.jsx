import React, { useState } from "react";

const Review = ( ) => {
  // console.log(item)
 

  return <>
  <h6>Add Your Review..</h6>
  <form action="action" className="row">
    <div className="col-md-12  col-12">
        <textarea name="message" id="message"  rows="8"></textarea>
    </div>

    <div className="col-12">
        <button type="submit" className="lab-btn bg-primary">
            <span>Submit Review</span>
        </button>
    </div>

    
     </form>
  </>;
};

export default Review;
