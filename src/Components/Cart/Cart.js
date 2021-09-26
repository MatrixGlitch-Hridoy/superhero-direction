import React from 'react';
const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const youtuber of cart) {
        if (!youtuber.quantity) {
            youtuber.quantity = 1;
        }
        total = total + youtuber.Salary * youtuber.quantity;
        totalQuantity = totalQuantity + youtuber.quantity;
    }
    return (
        <div>
            <h5>Member Added: {totalQuantity}</h5>
            <p>Total Cost: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;