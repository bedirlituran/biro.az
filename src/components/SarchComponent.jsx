import React from 'react';

const SearchComponent = () => {
    return (
        <div className='flex items-center justify-center mt-12'>
             <div className="w-1/2 p-4 ">
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Ara..."
                    className="border border-gray-300 rounded p-2 flex-1"
                />
                <select className="border border-gray-300 rounded p-2">
                    <option value="">Qiymet</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <select className="border border-gray-300 rounded p-2">
                    <option value="">Otaq</option>
                    <option value="1">1 Otaq</option>
                    <option value="2">2 Otaq</option>
                </select>
                <select className="border border-gray-300 rounded p-2">
                    <option value="">Filter</option>
                    <option value="1">Filter 1</option>
                    <option value="2">Filter 2</option>
                </select>
                <button className="bg-blue-500 text-white rounded p-2 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M7 11a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                </button>
            </div>
        </div>
        </div>
       
    );
};

export default SearchComponent;
