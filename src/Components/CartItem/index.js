import React from 'react'
import "../FoodComponent/styles.css"

function CartItem({image, name, quantity, price}) {
    return (
        <div className="flex items-center mb-4">
            <div className="w-28 h-w-28 bg-yellow-mid rounded-full flex items-center justify-center">
                <img className="category-image" src={image} alt="Item" />
            </div>
            <div className="flex flex-1 flex-col px-3 justify-between">
                <h3 className="text-xl font-semibold text-gray-500">{name}</h3>
                <p className="text-gray-400 text-lg">${price}</p>
            </div>
            <p className="px-3 text-lg text-gray-500">x{quantity}</p>
            <p className="text-lg text-gray-500">${price * quantity}</p>
        </div>
    )
}

export default CartItem
