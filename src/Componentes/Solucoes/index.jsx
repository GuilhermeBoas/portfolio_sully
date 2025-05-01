import CardSolucos from './CardSolucos'
import './Solucoes.scss'
import data from '../../data/cars-solucoes.json'
import { Link } from 'react-router'

const Solucoes =()=>{
    
    return(
        <section className='solucoes'>
            <div className='apresentacao'>
                <h3>
                    Soluções em design
                </h3>
                <p>
                    Atuo com foco em UX e UI, oferecendo soluções para diferentes desafios digitais — desde a criação de interfaces do zero até o redesenho de produtos já existentes. Cada projeto é único, e meu papel é entender o que ele precisa para alcançar seu melhor desempenho.
                </p>
                <Link to='/trabalhos' >Veja meus trabalhos &gt; &gt;</Link>
            </div>

            <div className='container-cards'>
                {data.solucoes.map(item => <CardSolucos titulo={item.titulo} texto={item.texto} icone={item.img}/> )}            
                
            </div>

            
        </section>
    )
}

export default Solucoes