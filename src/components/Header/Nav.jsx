import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu começa fechado

  const navigate = useNavigate();

  const handleEntrar = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      {/* Botão de menu hambúrguer - visível apenas em telas pequenas */}
      <button onClick={toggleMenu} className="md:hidden p-2">
        {/* Ícone do menu hambúrguer */}
        <span className="text-2xl">☰</span>
      </button>

      {/* Menu - visível apenas em telas pequenas quando `isMenuOpen` for true */}
      {isMenuOpen && (
        <div className="fixed inset-y-30 left-0 w-3/4 max-w-xs bg-white shadow-lg z-50 p-5 ">
          <p className="text-2xl font-medium text-dark-gray">Páginas</p>
          <ul className="pt-4 flex flex-col gap-5 items-start">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold text-lg underline underline-offset-8 scale-110 transition-all'
                  : 'text-dark-gray hover:underline hover:underline-offset-2 text-lg font-medium hover:scale-105 hover:text-primary transition-colors'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold underline text-lg underline-offset-8 scale-110 transition-all'
                  : 'text-dark-gray hover:underline hover:underline-offset-8 font-medium hover:scale-105 text-lg hover:text-primary transition-colors'
              }
            >
              Produtos
            </NavLink>

            <NavLink
              to="/construction"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold underline text-lg underline-offset-8 scale-110 transition-all'
                  : 'text-dark-gray hover:underline hover:underline-offset-8 font-medium hover:scale-105 text-lg hover:text-primary transition-colors'
              }
            >
              Categorias
            </NavLink>

            <NavLink
              to="/myproducts"
              className={({ isActive }) =>
                isActive
                  ? 'text-primary font-bold underline text-lg underline-offset-8 scale-110 transition-all'
                  : 'text-dark-gray hover:underline hover:underline-offset-8 font-medium hover:scale-105 text-lg hover:text-primary transition-colors'
              }
            >
              Meus produtos
            </NavLink>
          </ul>

          {/* Botões Entrar e Cadastre-se no final do menu */}
          <div className="flex flex-col mt-10 gap-5">
            <button
              onClick={handleEntrar}
              className="w-full py-3 px-5 bg-primary text-white text-xl font-medium rounded-md hover:bg-pink-500 hover:scale-105"
            >
              Entrar
            </button>
            <button
              onClick={handleRegister}
              className="text-lg underline underline-offset-4 hover:text-primary hover:font-medium hover:transition-colors hover:scale-105 ease-out"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
