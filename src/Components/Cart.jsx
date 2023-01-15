import React,{useState,useEffect} from "react";
import style from "./style.module.css";

const Cart = () => {

  const [cart, setCart] = useState([]);
     
  useEffect(() => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setCart(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      {" "}
      <div id={style.Navbar}>
        <div id={style.NavLeft}>
          <h3>TeeRex Store</h3>
        </div>
        <div id={style.NavRight}>
          <div>
            <h3>Products</h3>
          </div>
          <div id={style.cartIcon}>
            <div>1</div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>



      <div style={{textAlign:"left",marginLeft:'55px'}}><p>Shopping Cart</p></div>


      <div id={style.CartContainer}>
            {cart.length > 0 &&
              cart.map((elem) => {
                return (
                  <ul key={elem.id} id={style.CartContainerRight}>
                    <li><img src={elem.imageURL} /></li>
                    <li>
                      {elem.name}
                      <br/>
                      {elem.price}
                      </li>
                    <li><button>Quantity <i class="fa-sharp fa-solid fa-caret-down"></i></button></li>
                    <li><button>Delete</button></li>
                  </ul>
                );
              })}
          </div>

          <div>
            <hr />
            <h3>Total amount Rs.2200</h3>
          </div>
    </div>
  );
};

export default Cart;
