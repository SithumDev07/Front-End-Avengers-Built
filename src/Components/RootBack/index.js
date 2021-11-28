import React from 'react'
import { Link } from 'react-router-dom'

function RootBack() {
    return (
        <Link to="/" className="fixed hover:text-gray-100 z-50 left-10 top-6 p-2 rounded-full bg-pink text-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </Link>
    )
}

export default RootBack
