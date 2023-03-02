import React, { useState } from "react";

function NavItems({ items }) {
    const [navItemsState, setNavItemsState] = useState(true);

    const changeState = () => {
        setNavItemsState(!navItemsState);
        console.log(navItemsState);
    };

    const listItems = items.map((item) => (
        <li key={item.key}>
            <a
                href={item.address}
                className="block py-2 pl-3 pr-4 text-gray-600 text-center rounded border-b border-gray-100 hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0"
            >
                {item.name}
            </a>
        </li>
    ));
    return (
        <nav className="px-8 py-5 md:py-10">
            <div className="container flex flex-wrap items-center justify-between mx-auto max-w-5xl">
                <a href="#" className="flex items-center">
                    <span className="self-center text-xl font-black whitespace-nowrap">
                        LOGO
                    </span>
                </a>
                <button
                    type="button"
                    className="inline-flex items-center justify-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
                    onClick={changeState}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto ${
                        navItemsState ? "hidden" : ""
                    }`}
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {listItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavItems;
