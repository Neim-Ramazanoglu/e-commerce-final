import React, { useContext } from "react";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { Context } from "../context/ProductsProvider";

const Product = ({ product }) => {
  const { addFavorite, addBasket, openModal } = useContext(Context);

  const handleFavorite = (product) => {
    addFavorite(product);
  };

  return (
    <div className="product">
      <>
        <img src={product.image} alt="" onClick={(e) => openModal(product)} />
      </>
      <div className="detail">
        <>
          <MdFavorite
            className="fav"
            onClick={() => handleFavorite(product)}
            size={30}
          ></MdFavorite>
        </>
        <div className="info">
          <p className="title">{product.name}</p>
          <p>{product.price} ₺</p>
        </div>
        <>
          <MdShoppingCart
            className="basket"
            size={30}
            onClick={() => addBasket(product)}
          ></MdShoppingCart>
        </>
      </div>
    </div>
  );
};

export default Product;
