import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import {Link} from "react-router-dom"
import {v4 as uuid} from "uuid";
import { removeCart } from "../Redux/action";
const Cart = () => {
  const [total,setTotal] =useState(0)
  const cart = useSelector((store)=>store.cart);
  const dispatch =useDispatch()
  console.log(cart)


  useEffect(() => {
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  }, [cart]);


const handleDelete=(id)=>{

  dispatch(removeCart(id))
  console.log(id)
}

  return (
    <div>
      {" "}
      <div id={style.Navbar}>
        <div id={style.NavLeft}>
          <h3>TeeRex Store</h3>
        </div>
        <div id={style.NavRight}>
          <div>
           <Link to="/">  <h3>Products</h3></Link>
          </div>
          <Link to="/cart">
          <div id={style.cartIcon}>
            <div>{cart.length}</div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div></Link>
        </div>
      </div>



      <div style={{textAlign:"left",marginLeft:'55px'}}><p>Shopping Cart</p></div>


      <div id={style.CartContainer}>
            {cart &&
              cart.map((elem) => {
               
                return (
                  <ul key={uuid()} id={style.CartContainerRight}>
                    <li><img src={elem.imageURL} alt="pic"/></li>
                    <li>
                      {elem.name}
                      <br/>
                      {elem.price}
                      </li>
                    <li><button disabled>Quantity <i className="fa-sharp fa-solid fa-caret-down"></i></button></li>
                    <li><button onClick={()=>{
                      handleDelete(elem.id)
                    }}>Delete</button></li>
                  </ul>
                );
              })}
          </div>

          <div>
            <hr id={style.hr} />
            <h3 style={{textAlign:"left",marginLeft:'15px'}}>Total amount Rs.{total}</h3>
          </div>
    </div>
  );
};

export default Cart;
