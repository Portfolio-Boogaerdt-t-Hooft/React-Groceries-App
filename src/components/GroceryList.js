import React from 'react'
import ListItem from './ListItem'

function GroceryList(props) {
    return (
        <div className="grocerylist" >
            <h1>Boodschappenlijstje</h1>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="inputField"
                    value={props.state.inputField}
                    placeholder="Boodschap!!"
                    onChange={props.handleChange} />
                <button> Voeg toe </button>
            </form>
            <div>
                {props.state.groceryItems.map(item =>
                    <ListItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        handleClickGroceryItem={props.handleClickGroceryItem}
                    />)}
            </div>
        </div>
    )
}

export default GroceryList