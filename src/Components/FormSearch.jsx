import React from "react";

function FormSearch() {
    return (
        <div>
            <div>
                <div className="container mx-auto flex items-center justify-center">
                    <form className="md:space-x-4 flex items-center flex-col md:flex-row md:space-y-0 space-y-2">
                        <div className="space-y-2 sm:space-y-0 sm:space-x-4">
                            <select className="w-full sm:w-auto bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                                <option value={""}>Escolha o estado</option>
                            </select>
                            <select className="w-full sm:w-auto bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                                <option value={""}>Escolha a cidade</option>
                            </select>
                        </div>

                        <button className="flex md:w-auto w-full items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded hover:text-yellow-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 mr-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                            Pesquisar resorts
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormSearch;
