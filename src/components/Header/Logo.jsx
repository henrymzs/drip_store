import logoHeader from '/src/assets/Logos/logo-header.svg';
import logoFooter from '/src/assets/Logos/logo-footer.svg';
import { Link } from 'react-router-dom';


export default function Logo({ type }) {
    const handleClick = () => window.scrollTo(0, 0);
    const logoSrc = type === "logoHeader" ? logoHeader : logoFooter;

    return (
        <div>
            <Link to="/" onClick={handleClick}>
                <img src={logoSrc} alt="Logo" className="h-auto w-[40vw] md:w-[20vw]" />
            </Link>
        </div>
    );
}
