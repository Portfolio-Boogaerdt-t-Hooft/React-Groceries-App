import React from 'react'
import ListItem from './ListItem'

function ShoppingCart(props) {
    return (
        <div className="shoppingcart" >
            <h1>Winkelmandje</h1>
            <button onClick={props.emptyCart}> LEEG MAND </button>
            <div>
                {props.state.shoppingListItems.map(item =>
                    <ListItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                    />)}
            </div>
        </div>
    )
}

export default ShoppingCart