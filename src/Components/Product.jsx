import React, { useEffect } from "react";
import {
  addCart,
  getProducts,
  searchProducts,
  setFilter,
} from "../Redux/action";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const data = useSelector((store) => store.products);
  const cart = useSelector((store) => store.cart);
  const filter = useSelector((store) => store.filter);
  console.log(filter);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [toggle,setToggle] =useState(false)

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleCart = (elem) => {
    setToggle(true)
    dispatch(addCart(elem));
  };

  const handleSearch = () => {
    dispatch(searchProducts(text.toLowerCase()));
    setText("");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <div id={style.Navbar}>
        <div id={style.NavLeft}>
          <h3>TeeRex Store</h3>
        </div>
        <div id={style.NavRight}>
          <div>
            <h3>Products</h3>
          </div>
          <Link to="/cart">
            <div id={style.cartIcon}>
              <div>{cart.length}</div>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </Link>
        </div>
      </div>

      <div id={style.Conatiner}>
        <div id={style.Filter}>
          <h3>Colour</h3>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Red"
            id=""
          />
          <p>Red</p>
          <br />
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Blue"
            id=""
          />
          <p>Blue</p>
          <br />
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Green"
            id=""
          />
          <p>Green</p>
          <br />
          <h3>Gender</h3>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Men"
            id=""
          />
          <p>Men</p>
          <br />
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Women"
            id=""
          />
          <p>Women</p>
          <br />
          <h3>Price</h3>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="cheap"
            id=""
          />
          <p>0-RS.250</p>
          <br />
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="medium"
            id=""
          />
          <p>Rs.251-450</p>
          <br />
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="high"
            id=""
          />
          <p>Rs.450</p>
          <br />
          <h3>Type</h3>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Polo"
            id=""
          />
          <p>Polo</p>
          <br />
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Hoodie"
            id=""
          />
          <p>Hoodie</p>
          <br />
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e);
            }}
            value="Basic"
            id=""
          />
          <p>Basic</p>
        </div>
        <div id={style.ConatinerRight}>
          <div>
            <input
              placeholder="Search for pRoducts..."
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <i
              onClick={() => {
                handleSearch();
              }}
              className="fa-solid fa-magnifying-glass"
            ></i>
            <i id={style.filterIcon} className="fa-solid fa-filter"></i>
          </div>
          <div id={style.bottom}>
            {data.length === 0 ? (
              <h3>Product Not Found</h3>
            ) : (
              data.map((elem) => {
                return (
                  <div id={style.box} key={elem.id}>
                    <img src={elem.imageURL} />
                    <div id={style.boxBottom}>
                      {elem.price}
                      <button onClick={() => handleCart(elem)}>
                      {toggle ? <>
                      <button>-</button>
                      1
                      <button>+</button>
                      </> :"Add to Cart"}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
