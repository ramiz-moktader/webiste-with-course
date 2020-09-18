import React from 'react';
import './Product.css';

const Product = (props) => {
  console.log(props.courseDetails.name);
  const {name, price, instructor} = props.courseDetails;
  return (
    <div className = 'course'>
      <div> 
        <img src="" alt="course image"/>
      </div>
      <div className = 'course-details'> 
        <h4> 
          {name}
        </h4>
        <h5> 
          price: {price}
        </h5>
        <p> 
          Instructor: {instructor}
        </p>
        <button onClick = {()=> {props.handleEnrollNow(props.courseDetails)}} className = 'enroll-button'> Enroll now </button>

      </div>
    </div>
  );
};

export default Product;