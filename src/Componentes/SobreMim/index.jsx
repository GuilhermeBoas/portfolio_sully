import { Link } from 'react-router'
import './SobreMim.scss'

const SobreMim =()=>{
    return(
    <section className='sobre-min'>
        <img src="/img/sully-BW.png" alt="" />
        <div>
            <h3>Sobre mim</h3>
            <p>Sou formada em Ciência da Computação e, desde 2022, venho me aprofundando no universo do design de produtos digitais. Nesse tempo, investi em especializações, mergulhei em leituras relevantes da área e coloquei o conhecimento em prática desenvolvendo cases que fortaleceram minha experiência e olhar estratégico.</p>
            <Link to='/' >Conheça minha trajetória &gt; &gt;</Link>
        </div>
    </section>
)
}

export default SobreMim