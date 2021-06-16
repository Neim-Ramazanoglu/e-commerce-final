import { useContext } from "react";
import { Context } from "../context/ProductsProvider";
import { AiOutlineClose } from "react-icons/ai";
import { MdFavorite, MdShoppingCart } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";
const Modal = () => {
  const { selected, openModal, addBasket, handleFavorite } =
    useContext(Context);
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="header">
          <GiRunningShoe size={40}></GiRunningShoe>
          <h1>{selected.name}</h1>
          <AiOutlineClose
            size={25}
            onClick={(e) => openModal(e)}
          ></AiOutlineClose>
        </div>
        <div className="modalDetail">
          <img src={selected.image} alt="" />
          <p>Price {selected.price} ₺</p>
          <div className="modalIcons">
            <MdFavorite
              className="fav"
              size={30}
              onClick={() => handleFavorite(selected)}
              
            ></MdFavorite>
            <MdShoppingCart
              className="basket"
              size={30}
              onClick={() => addBasket(selected)}
            ></MdShoppingCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
