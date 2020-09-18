import React from 'react';
import './Shop.css';
import Product from '../Products/Product';
import Cart from  '../Cart/Cart.js'
import {useState} from 'react';

const Shop = () => {
  const courseDetails = [
    {name: 'Machine learning and data science', price: 100, instructor: 'jhon doe'}, 
    {name: 'Artificial intelligence', price: 122, instructor: 'jhon doe'}, 
    {name: 'Javascript full stak programming', price: 50 , instructor: 'jhon smith'}, 
    {name: 'Professional english writing', price: 100, instructor: 'jhon doe'}, 
    {name: 'CV writing and beyond', price: 100, instructor: 'jhon doe'},
     {name: 'Machine learning and data science', price: 100, instructor: 'jhon doe'}, 
     {name: 'Machine learning and data science', price: 100, instructor: 'jhon doe'}, 
     {name: 'Machine learning and data science', price: 100, instructor: 'jhon doe'}, 
     {name: 'Machine learning and data science', price: 100, instructor: 'jhon doe'}, 
     {name: 'Machine learning wtih python', price: 100, instructor: 'jhon doe'}, 
     {name: 'Machine learning and data science', price: 100, instructor: 'jhon doe'}, 
  ];
  const [cart, setCart ] = useState ([]);

  const handleEnrollNow = (course) =>{
    console.log('course erolled  in ' +  course.name)
    const newCart = [...cart,course];
    setCart(newCart);

  }

  return (
    <div className = 'shop-container'>
      <div className="product-container">
        {
          courseDetails.map(courseDetails => <Product courseDetails ={courseDetails} handleEnrollNow = {handleEnrollNow}> </Product>)
        }

      </div>
      <Cart cart = {cart}> </Cart>
      
      </div>
  );
};

export default Shop;