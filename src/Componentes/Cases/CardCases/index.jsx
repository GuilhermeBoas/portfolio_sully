import './CardCases.scss'
import Estrelas from './Estrelas'
const CardCases = () => {
    return (
        <div className="card-cases">
            <p>
                “A Karen tem muito conhecimento de UI/UX e Figma, e fez um mockup de alta fidelidade lindo pro nosso site.”
            </p>

            <span>Rafael|solid BI</span>
            <Estrelas/>
            <a href="">ver o case &gt; &gt;</a>
        </div>
    )
}

export default CardCases