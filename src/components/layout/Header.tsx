import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className="bg-black text-white">
            <div className="flex sm:hidden justify-between items-center px-[4vw] p-4">
                <a className="flex gap-2" href="/">
                    <img
                        src="images/icon.png"
                        alt="myFilm Logo"
                        className="w-8 h-8"
                    />
                    <span className="text-xl font-medium">MyFilm</span>
                </a>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white font-bold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex fixed">
                <div className="flex-shrink-0 sm:sticky left-auto right-full sm:!right-0 sm:!left-0 fixed top-0 flex flex-col items-stretch py-10 pl-5 xl:pl-10 pr-0 w-[90vw] max-w-[288px] sm:max-w-none sm:w-16 xl:w-72 border-r border-gray-800 h-screen overflow-y-auto z-10 bg-dark sm:bg-transparent sm:!translate-x-0 transition-all duration-500 translate-x-0 gap-8">
                    <a href="/" className="flex gap-2 items-center">
                        <img
                            src="images/icon.png"
                            alt="myFilm Logo"
                            className="w-6 h-6"
                        />
                        <p className="font-semibold text-xl block sm:hidden xl:block">
                            MyFilm
                        </p>
                    </a>
                    <div className="mt-0 -ml-1 sm:mt-4 xl:mt-0 block sm:flex flex-col gap-0 sm:gap-4 xl:block xl:gap-0">
                        <p className="sm:hidden xl:block mb-5 uppercase text-gray-400 font-semibold text-[20px]">Menu</p>
                        <div className="flex flex-col items-stretch gap-3">
                            <a
                                href="/home"
                                className="flex items-center gap-2 transition text-gray-400 hover:text-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                <p className="text-xl block sm:hidden xl:block">
                                    Home
                                </p>
                            </a>
                            <a
                                href="/discovery"
                                className="flex items-center gap-2 transition text-gray-400 hover:text-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 25 25"
                                    fill="currentColor"
                                >
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3 13-8 2 2-8 8-2-2 8z"></path>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>

                                <p className="text-xl block sm:hidden xl:block">
                                    Discovery
                                </p>
                            </a>
                            <a
                                href="/explore"
                                className="flex items-center gap-2 transition text-gray-400 hover:text-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="text-xl block sm:hidden xl:block">
                                    Explore
                                </p>
                            </a>
                            <a
                                href="/history"
                                className="flex items-center gap-2 transition text-gray-400 hover:text-gray-300 mb-8"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 25 25"
                                    fill="currentColor"
                                >
                                    <path d="M12 8v5h5v-2h-3V8z"></path>
                                    <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
                                </svg>
                                <p className=" text-xl block sm:hidden xl:block">
                                    History
                                </p>
                            </a>
                            <p className="sm:hidden xl:block mb-2 uppercase text-gray-400 font-semibold text-[20px]">Personal</p>
                            <a
                                href="/login"
                                className="flex items-center gap-2 transition text-gray-400 hover:text-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    viewBox="0 0 25 25"
                                    fill="currentColor"
                                >
                                    <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                                    <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                                </svg>
                                <p className="text-xl block sm:hidden xl:block">
                                    Sign In
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ===true ? 'block translate-y-5 duration-3000' : 'hidden'} w-full bg-black text-white flex flex-col items-center gap-3 pb-5 transform`}>
                <Link to='/home'>HOME</Link>
                <Link to='/discovery'>DISCOVERY</Link>
                <Link to='/explore'>EXPLORE</Link>
                <Link to='/history'>HISTORY</Link>
                <Link to='/signin'>SIGN IN</Link>
            </div>
        </div>
    );
};

export default Header;
