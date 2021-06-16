import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiRunningShoe } from "react-icons/gi";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { Context } from "../context/ProductsProvider";
const Navbar = () => {
  const { basket } = useContext(Context);
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <GiRunningShoe size={50} color={"#C9E4CA"}></GiRunningShoe>
        <h3>Ürünler</h3>
      </Link>

      <Link to="/favorite">
        <MdFavorite size={30} color={"#C9E4CA"}></MdFavorite>
        <h3>Favoriler</h3>
      </Link>
      <Link to="/payment">
        <MdShoppingCart size={30} color={"#C9E4CA"}></MdShoppingCart>
        <h3 >Sepet &nbsp;
        <span>{basket.length}</span></h3>
      </Link>
    </div>
  );
};

export default Navbar;
