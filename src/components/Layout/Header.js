import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImg from "../../assets/mealsImg.jpeg";

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img alt="meals" src={mealsImg} />
            </div>
        </Fragment>
    );
}

export default Header;
