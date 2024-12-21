import React from 'react';
import logo from '../../assets/verticalLogo.png';
import './Header.css';
import human from '../../assets/humna.png';

function Header() {
    return (
        <div>
            <nav className="bg-purple-500 border-gray-200 dark:bg-purple-900 rounded-full font-bold font-mono shadow-sm shadow-purple-500">
                <div className="max-w-screen-xl flex items-center justify-between">
                    {/* Logo */}
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="bg-white rounded-full h-[9vh] w-auto sm:h-[8vh] md:h-[10vh] lg:h-[8vh] xl:h-[8vh] 2xl:h-[9vh] px-9 py-2" 
                    />
                    {/* Right Side Button */}
                    <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse ml-auto"> {/* Align to the right for mobile */}
                        {/* Button with centered icon */}
                        <button 
                            type="button" 
                            className="circle rounded-full bg-white flex items-center justify-center -me-11">
                            <img src={human} alt="Human Avatar" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
                        </button>
                    </div>
                    {/* Menu */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-lg">
                            <li><a href="#" className="block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 header-shadow">About Us</a></li>
                            <li><a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 header-shadow">Services</a></li>
                            <li><a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 header-shadow">Projects</a></li>
                            <li><a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 header-shadow">Achievements</a></li>
                            <li><a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 header-shadow">Career</a></li>
                            <li><a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 header-shadow">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
