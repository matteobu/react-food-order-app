import { Fragment, useState } from "react";
import Header from "./components/Layout/Header.js";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart.js";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const cartShowHandler = () => {
        if (cartIsShown) {
            setCartIsShown(false);
        } else setCartIsShown(true);
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onCartHandler={cartShowHandler} />}
            <Header onCartHandler={cartShowHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
