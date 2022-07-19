import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", price: "12.99" }].map((item) => {
                return <li>{item.name}</li>;
            })}
        </ul>
    );

    return (
        <Modal onClick={props.onCartHandler}>
            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>12.99€</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onCartHandler}
                >
                    Close
                </button>
                <button className={classes.order}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
