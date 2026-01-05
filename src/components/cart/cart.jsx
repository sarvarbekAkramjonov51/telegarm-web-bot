import "./cart.css";
import Button from "../button/button";
import { totalPrice } from "./../../units/total-price";

const Cart = ({ cartItems, onCheckout }) => {
	return (
		<div className="cart__container">
			<p>
				Umumiy narx:
				{totalPrice(cartItems).toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}
			</p>

			<Button title={`${cartItems.length === 0 ? "Buyurtma Berish" : "to'lov"}`} disable={cartItems === 0 ? true : false} type={"checkout"} onClick={onCheckout} />
		</div>
	);
};

export default Cart;
