import CardCases from './CardCases'
import './Cases.scss'
import data from '../../data/cards-cases.json'
const Cases = ()=>{
    return(
        <section className='cases'>
            <h3>
                Cases em destaque
            </h3>

            <div className='container-cards'>
                {data.cases.map((item,index)=> <CardCases key={index} texto={item.texto} titulo={item.titulo}/> )}
                
            </div>

        </section>
    )
}

export default Cases