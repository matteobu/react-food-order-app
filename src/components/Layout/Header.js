import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton.js";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>REACT MEALS</h1>
                <HeaderCartButton onClick={props.onCartHandler} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="a tabel full of food" />
            </div>
        </Fragment>
    );
};

export default Header;
