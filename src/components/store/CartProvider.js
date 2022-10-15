import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {};
    const remoteItemFromCartHandler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
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
