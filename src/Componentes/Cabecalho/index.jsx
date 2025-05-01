import { Link } from 'react-router';
import './Cabecalho.scss'
const Cabecalho = () =>{
    return(
        <header className="cabecalho">
            <Link to='/'>
                <span>K.</span>
            </Link >
            <ul>
                <li><Link to='/'>hOME</Link></li>
                <li><Link to='/trabalhos'>TRaBALHOS</Link></li>
                <li><a href="#">SOBRE MIM</a></li>
            </ul>
      </header>
    )
}

export default Cabecalho;