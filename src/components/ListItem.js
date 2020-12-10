import React from 'react'

function ListItem(props) {
    return (
        <div className="item" onClick={props.handleClickGroceryItem}>
            <h3>{props.title} {props.amount}</h3>
        </div>
    )
}
export default ListItem
