import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const itemCard = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 justify-center m-auto p-4 bg-gray-100">
      <h1 className="font-bold text-center font-2xl ">Carts Items</h1>
      <button
        className="m-2 p-2 font-bold text-center font-2xl bg-black text-white rounded-md"
        onClick={handleClearCart}
      >
        ClearCart
      </button>
      <div>{itemCard.length !== 0 && <ItemList item={itemCard} />}</div>
    </div>
  );
};

export default Cart;
