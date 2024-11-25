// import { useNavigate } from 'react-router-dom';
// import './NotFoundPage.css';
// import erroGif from './assets/section/error.gif'; 

// export default function NotFoundPage() {
//     const navigate = useNavigate();
//     const handleRedirect = () => {
//         navigate('/'); 
//     };

//     return (
//         <div className='NotFoundPrincipal'>
//             <img src={erroGif} alt="Erro" /> 
//             <span>Página Não Encontrada!</span>
//             <button onClick={handleRedirect}>Voltar para Página Inicial</button>
//         </div>
//     );
// }



import { useNavigate } from 'react-router-dom'; 
import './NotFoundPage.css';

export default function NotFoundPage() {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/'); 
    };

    return (
        <div className='NotFoundPrincipal'>
            <img src="https://www.valuehost.com.br/blog/wp-content/uploads/2019/02/274034-erro-de-http-wordpress-como-corrigir.jpg" alt="Erro"/>
            <span>Página Não Encontrada!</span>
            <button onClick={handleRedirect}>Voltar para Página Inicial</button>
        </div>
    );
}












// import "./NotFoundPage.css"


// export function NotFoundPage() {
//     return ( 
// <div className="NotFoundPrincipal">
// <h1>Pagina não encontrada!</h1>
// <a href="/"></a>
// <button>Retornar para Página Inicial</button>

// </div>




//      );
// }