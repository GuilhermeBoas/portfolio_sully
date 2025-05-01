import CardTrabalhos from "../../Componentes/CardTrabalhos"
import './Trabalhos.scss'
import data from  '../../data/card-trabalhos.json'
const Trabalhos= ()=>{
    return(
        <main className="trabalhos">
            <h3>Trabalhos</h3>
            <div className="container-card-trabalhos">
                {data.trabalhos.map((item,index)=><CardTrabalhos key={index} cliente={item.cliente} imagem={item.imagem} info={item.info} titulo={item.titulo} tags={item.tags}/>)}
                
                

            </div>
        
        </main>
    )
}

export default Trabalhos