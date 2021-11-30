import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="">
            <div className="container mx-auto">
                <div className="flex flex-col items-start justify-center">
                    <Link to="/customer-safety" className="px-6 py-4 rounded-lg hover:text-gray-300 bg-pink mb-6">Customer Safety</Link>
                    <Link to="/order" className="px-6 py-4 rounded-lg hover:text-gray-300 bg-pink mb-6">Order</Link>
                    <Link to="/kitchen" className="px-6 py-4 rounded-lg hover:text-gray-300 bg-pink mb-6">Kitchen</Link>
                    <Link to="/dashboard/cashier" className="px-6 py-4 rounded-lg hover:text-gray-300 bg-pink">Dashboard</Link>
                    <a href="/customer-safety" className="px-6 py-4 rounded-lg hover:text-gray-300 bg-pink">Dashboard New</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation
