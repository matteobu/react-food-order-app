import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { item: [], totalAmount: 0 };
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        console.log("first");
        const updatedItems = state.items.concat(action.item);
        const updateTotalAmount =
            state.totalAmount + state.item.price * state.item.amount;
        return { items: updatedItems, totalAmount: updateTotalAmount };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };
    const remoteItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        remoteItem: remoteItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
