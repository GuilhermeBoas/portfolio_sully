import './CardCases.scss'
import Estrelas from './Estrelas'
const CardCases = ({texto,titulo}) => {
    return (
        <div className="card-cases">

            <p>
                “{texto}”
            </p>


            <div className='inferior'>
                <span>{titulo}</span>
                <Estrelas />
                <a href="#">ver o case &gt; &gt;</a>
            </div>
        </div>
    )
}

export default CardCases