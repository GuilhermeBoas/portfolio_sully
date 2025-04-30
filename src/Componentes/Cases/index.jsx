import './Cases.scss'

const Cases = ()=>{
    return(
        <section>
            <h3>
                Cases em destaque
            </h3>

            <div>
                <div className="card">
                    <p>
                        “A Karen tem muito conhecimento de UI/UX e Figma, e fez um mockup de alta fidelidade lindo pro nosso site.”
                    </p>

                    <span>Rafael|solid BI</span>
                    <img className='estrelas' src="" alt="" />
                    <a href="">ver o case</a>
                </div>
                <div className="card"></div>
                <div className="card"></div>
            </div>

        </section>
    )
}

export default Cases