import { useNavigate } from 'react-router-dom'; 
import './NotFoundPage.css';

export default function NotFoundPage() {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/'); 
    };

    return (
        <div className='NotFoundPrincipal'>
            <h1>Página Não Encontrada!</h1>
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