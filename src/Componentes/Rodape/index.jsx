import './Rodape.scss'

const Rodape = () => {
    return (
        <footer>
            <div className='superior'>
                <a href="#">
                    <span>K.</span>
                </a>
                
                <div className='lista-footer'>
                    <h4>Mapa do site</h4>
                    <ul>
                        <li><a href="#">Trabalhos</a></li>
                        <li><a href="#">Sobre Mim</a></li>
                    </ul>
                </div>

                <div className='lista-footer'>
                    <h4>Contatos</h4>
                    <ul>
                        <li><a href="#">Sullianyy@gmail.com</a></li>
                        <li><a href="#">(91) 9xxxx-xxxx</a></li>
                    </ul>
                </div>
            </div>
            <p>© Karen Silva 2025 - Todos os direitos reservados</p>
        </footer>
    )
}

export default Rodape