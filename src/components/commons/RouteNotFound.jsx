import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function RouteNotFound() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    404 - Route Not Found
                </h2>
                <p className="text-base text-gray-600 mb-6 font-rubic">
                    The requested route, {""}
                    <span className="font-semibold italic underline">
                        {location.pathname} {""}
                    </span>
                    was not found.
                </p>
                <div className="flex justify-center font-rubic">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                        onClick={
                            e => navigate('/')
                        }
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div >
    )
}

export default RouteNotFound;