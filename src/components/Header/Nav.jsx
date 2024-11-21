import { NavLink, useNavigate } from "react-router-dom";
/*duas funcionalidades do pacote react-router-dom, 
navlink cria links de navegação com propriedades extras, da pra adicionar class especial ao link ativo
 useNavigate permite navegar entre paginas*/ 

const Nav = () => {
    
    
    // navigate agora é uma função que pode ser chamada pra redirecionar para outras rotas
    const navigate = useNavigate();

    
    const handleEntrar = () => navigate("/login");
    const handleRegister = () => navigate("register")

    return (
        <nav className="Header">

            <ul className="pt-4 py-3 px-3 md:px-10 flex flex-col md:flex-row gap-5 md:gap-10 items-start justify-start">
                
                {/* essa tag 'p' com texto paginas aparece apenas no 767px para telas de celulares */}
                <p className="text-2xl font-medium text-dark-gray md:hidden">Páginas</p>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-pink-700 font-bold text-lg underline underline-offset-8 scale-110 transition-all '
                            : 'text-dark-gray hover:underline hover:underline-offset-2 text-lg font-medium hover:scale-105 hover:text-primary transition-colors'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to={"/products/"}
                    className={({ isActive }) =>
                    isActive ? 'text-pink-700 font-bold underline text-lg underline-offset-8 scale-110 transition-all ' : 'text-gray-700  hover:underline hover:underline-offset-8 font-medium hover:scale-105 text-lg hover:text-primary transition-colors no-underline'
                    }
                >
                    Produtos
                </NavLink>

                <NavLink
                    to="/construction/"
                    className={({ isActive }) =>
                    isActive ? 'text-pink-700 font-bold underline text-lg underline-offset-8 scale-110 transition-all ' : 'text-gray-700 hover:underline hover:underline-offset-8 font-medium hover:scale-105 text-lg md:text-lg hover:text-primary transition-colors no-underline'
                    }
                >
                    Categorias
                </NavLink>

                <NavLink
                    to="/myproducts/"
                    className={({ isActive }) =>
                    isActive ? 'text-pink-700 font-bold underline text-lg underline-offset-8 scale-110 transition-all ' : 'text-gray-700 hover:underline hover:underline-offset-8 font-medium hover:scale-105 text-lg md:text-lg hover:text-primary transition-colors no-underline'
                    }
                >
                    Meus produtos
                </NavLink>

            </ul>

            <div className="flex flex-col w-[60vw] pb-10 fixed bottom-0 gap-5 md:hidden ">

                <div className="py-1 w-[62vw] md:w-[90vw] m-a border-t m-auto border-slate-950/50 "></div>

                <button onClick={handleEntrar} className="w-full py-3 px-5 bg-slate-800	 text-white text-xl font-medium rounded-md hover:bg-pink-500 hover:scale-105">Entrar</button>

                <button
                    onClick={handleRegister}
                    className="lg:text-lg text-md underline underline-offset-4 hover:text-primary hover:font-medium hover:transition-colors hover:scale-105 ease-out"
                >
                    Cadastre-se
                </button>
             </div>

        </nav>

    );

};

export default Nav;