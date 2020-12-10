import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            inputField: "",
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Pak melk" },
                { id: 3, title: "Bier" },
                { id: 4, title: "Chips" },
            ],
            shoppingListItems: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    emptyCart = () => {
        this.setState({ shoppingListItems: [] })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        const item = { id: this.state.groceryItems.length + 1, title: this.state.inputField }
        event.preventDefault()
        this.setState({ groceryItems: [...this.state.groceryItems].concat([item]) })
        this.setState({ inputField: " " })
    }

    render() {
        const addNewShoppingListItem = itemTitle => {
            const newShoppingItem = {
                id: this.state.shoppingListItems.length + 1,
                title: itemTitle,
                amount: 1
            }

            this.setState(prevState => {
                const newList = prevState.shoppingListItems.concat(newShoppingItem)
                return { shoppingListItems: newList }
            })
        }

        const addAmountToItem = itemTitle => {
            const shoppingList = [...this.state.shoppingListItems]
            const newList = shoppingList.map(shoppingItem => {
                if (shoppingItem.title === itemTitle) {
                    shoppingItem.amount++
                }
                return shoppingItem
            })
            this.setState({ shoppingListItems: newList })
        }

        const handleClickGroceryItem = event => {
            const clickedItem = event.target.innerText
            const currentShoppingList = this.state.shoppingListItems
            const shoppingListItem = currentShoppingList.filter(
                item => item.title === clickedItem)

            shoppingListItem.length === 0
                ? addNewShoppingListItem(clickedItem)
                : addAmountToItem(clickedItem)
        }

        return (
            <div className="container">
                <GroceryList
                    state={this.state}
                    setState={this.setState}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleClickGroceryItem={handleClickGroceryItem}
                />
                <ShoppingCart
                    state={this.state}
                    emptyCart={this.emptyCart}
                />
            </div>
        )
    }
}
export default Container