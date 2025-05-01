import "./CardTrabalhos.scss"
const CardTrabalhos = ({imagem,titulo,info,cliente,tags=[]}) => {
    return (
        <div className="card-trabalhos">
            <img src={`/img/${imagem}.png`} alt={`Logo da empresa ${cliente}`} />
            <div>
                <h4>{titulo}</h4>
                <p>{info}</p>
                <p>Cliente: {cliente}</p>
                <div className="container-tags">
                    {tags.map((tag,index)=><span key={index}>{tag}</span>)}
                </div>
            </div>
        </div>
    )
}

export default CardTrabalhos