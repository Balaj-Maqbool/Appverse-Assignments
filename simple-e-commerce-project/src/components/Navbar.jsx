import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from "../assets/logo.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { cartItems } = useCart();

    const navLinks = [
        { name: 'Shop', path: '/' },
        { name: 'Men', path: '/men' },
        { name: 'Women', path: '/women' },
        { name: 'Kids', path: '/kids' },
    ];

    return (
        <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="BNN's" className="h-8 w-8" />
                            <span className="ml-2 text-xl font-bold text-white">BNN's</span>
                        </Link>

                        <div className="hidden md:block ml-10">
                            <div className="flex space-x-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === link.path
                                                ? 'bg-purple-700 text-white'
                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link to="/cart" className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 relative">
                                <ShoppingCart className="h-6 w-6" />
                                {cartItems.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>
                            <Link to="/auth" className="ml-2 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
                                <User className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-400 hover:text-white focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? 'bg-purple-700 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex pt-2">
                            <Link
                                to="/cart"
                                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <ShoppingCart className="h-5 w-5 mr-2" />
                                Cart {cartItems.length > 0 && `(${cartItems.length})`}
                            </Link>
                            <Link
                                to="/auth"
                                className="flex items-center ml-2 px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <User className="h-5 w-5 mr-2" />
                                Account
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;