import React from 'react';

import Aux from '../../../hoc/_Aux'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
                </li>
            )
        })
    return(
        <Aux>
            <h3>You Order</h3>
            <p>A delicious bruger with the foloowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )

};

export default orderSummary;