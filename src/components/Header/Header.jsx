import React from 'react';
import Nav from './Nav';
import Logo from './Logo';
import Button from './Button';



const Header = () => {
    return (
        <header className="py-5 md:flex-col bg-white fixed md:relative w-full z-50 top-0 shadow-md md:shadow-none">
            <div className="flex justify-between items-center px-5"> 
            
                <Logo type="logoHeader" /> {/* Passando a prop type */}
                <div className="hidden md:flex items-center justify-around bg-neutral-200/80 rounded-md w-1/2">
                    <form className="flex items-center w-full">
                        <input
                            id="search"
                            type="text"
                            placeholder="Pesquisar por produtos..."
                            className="p-2 w-full outline-none bg-transparent focus:border-pink-600 focus:ring-pink-600 focus:ring-2 rounded-md"
                            onChange={(e) => setQuery(e.target.value)}
                            />
                            <button type="submit" className="relative mx-2">

                            </button>
                    </form>
                </div>
                <Nav />
                <Button />
            </div>

        </header>
    );
};

export default Header;
