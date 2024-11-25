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







