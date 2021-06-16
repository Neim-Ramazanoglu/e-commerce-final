import { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import { FaHeartBroken } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
const Favorited = ({ favorited }) => {
  const { removeFavorite, addBasket } = useContext(Context);

  return (
    <div className="favorited">
      <>
        <img src={favorited.image} alt="" />
      </>
      <div className="favoriteDetail">
        <>
          <FaHeartBroken
            className="brokeHeart"
            size={30}
            onClick={() => removeFavorite(favorited)}
          ></FaHeartBroken>
        </>
        <div className="info">
          <p className="title">{favorited.name}</p>
          <p>{favorited.price} ₺</p>
        </div>
        <>
          <MdShoppingCart
            className="basket"
            size={30}
            onClick={() => addBasket(favorited)}
          ></MdShoppingCart>
        </>
      </div>
    </div>
  );
};

export default Favorited;
