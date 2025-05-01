import CardCases from './CardCases'
import './Cases.scss'

const Cases = ()=>{
    return(
        <section className='cases'>
            <h3>
                Cases em destaque
            </h3>

            <div className='container-cards'>
                <CardCases/>
                <CardCases/>
                <CardCases/>
            </div>

        </section>
    )
}

export default Cases