import React, { useEffect } from "react";
import { useState } from "react";
import style from "./style.module.css";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);

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
          <div id={style.cartIcon}>
            <div>1</div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>

      <div id={style.Conatiner}>
        <div id={style.Filter}>
          <h3>Colour</h3>
          <input type="checkbox" name="" id="" />
          <p>Red</p>
          <br />
          <input type="checkbox" name="" id="" />
          <p>Blue</p>
          <br />
          <input type="checkbox" name="" id="" />
          <p>Green</p>
          <br />
          <h3>Gender</h3>
          <input type="checkbox" name="" id="" />
          <p>Men</p>
          <br />
          <input type="checkbox" name="" id="" />
          <p>Women</p>
          <br />
          <h3>Price</h3>
          <input type="checkbox" name="" id="" />
          <p>0-RS.250</p>
          <br />
          <input type="checkbox" name="" id="" />
          <p>Rs.251-450</p>
          <br />
          <input type="checkbox" name="" id="" />
          <p>Rs.450</p>
          <br />
          <h3>Type</h3>
          <input type="checkbox" name="" id="" />
          <p>Polo</p>
          <br />
          <input type="checkbox" name="" id="" />
          <p>Hoodie</p>
          <br />
          <input type="checkbox" name="" id="" />
          <p>Basic</p>
        </div>
        <div id={style.ConatinerRight}>
          <div>
            <input placeholder="Search for pRoducts..." type="text" />
            
              <i className="fa-solid fa-magnifying-glass"></i>
              <i id={style.filterIcon}  className="fa-solid fa-filter"></i>
          </div>
          <div id={style.bottom}>
            {data.length > 0 &&
              data.map((elem) => {
                return (
                  <div id={style.box} key={elem.id}>
                    <img src={elem.imageURL} />
                    <div id={style.boxBottom}>
                      {elem.price}
                      <button>Add to cart</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
