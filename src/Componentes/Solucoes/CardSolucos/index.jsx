import './CardSolucos.scss'
const CardSolucos = ({titulo, texto, icone}) => {
    return (
        <div className="card-solucoes">
            <img src={`/img/${icone}.png`} alt="" />
            <h4>{titulo}</h4>
            <p>{texto}</p>
        </div>
    )
}

export default CardSolucos