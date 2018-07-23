import React from 'react';

import classes from'./Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(Object.keys(props.ingredients))
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { //map an object into an ingredient of arrays
               return <BurgerIngredient key={igKey + i } type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []); //transforms an array into something else using reduce
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;