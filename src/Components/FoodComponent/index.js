import React from 'react'
import "./styles.css"

function FoodComponent({image, name, price}) {
    return (
        <div className="bg-white w-52 rounded-lg flex flex-col items-center px-6 py-3 cursor-pointer">
            <div className="rounded-full h-36 w-36 bg-yellow-mid flex items-center justify-center">
                <img src={image}  className="category-image" alt="Food" />
            </div>
            <h1 className="text-xl mt-3 text-center">{name}</h1>
            <h2 className="text-2xl font-semibold">Rs.{price}</h2>
        </div>
    )
}

export default FoodComponent
