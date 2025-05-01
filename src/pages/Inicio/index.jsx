import Cases from '../../Componentes/Cases'
import ChamadaPrincipal from '../../Componentes/ChamadaPrincipal'
import SobreMim from '../../Componentes/SobreMim'
import Solucoes from '../../Componentes/Solucoes'
const Inicio = ()=>{
    return(
        <main>
            <ChamadaPrincipal />
            <Solucoes />
              <Cases />
              <SobreMim />
        </main>
    )
}

export default Inicio