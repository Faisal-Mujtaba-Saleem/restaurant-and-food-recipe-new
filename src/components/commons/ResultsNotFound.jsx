import React from 'react'

function ResultsNotFound({ message, refreshAll }) {
    return (
        <div className={`flex flex-col items-center justify-center ${message === "No More Results!" ? "h-full mt-20" : "h-screen"}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-gray-400 mb-4"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.636 5.636a6 6 0 018.728 8.728l-8.728-8.728zM14.364 14.364a6 6 0 11-8.728-8.728l8.728 8.728z"
                    clipRule="evenodd"
                />
            </svg>
            <h2 className="text-xl text-gray-600 mb-2">{message}</h2>
            <button className="text-indigo-500 text-center" onClick={refreshAll}>
                Refresh
            </button>
        </div>
    )
}

export default ResultsNotFound
