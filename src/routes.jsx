import { BrowserRouter, Route, Routes } from 'react-router'
import Cabecalho from './Componentes/Cabecalho'
import Rodape from './Componentes/Rodape'
import Inicio from './pages/Inicio'
import Trabalhos from './pages/Trabalhos'

function App() {

  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/'  >
          <Route index element={<Inicio />}/>
          <Route path='/trabalhos' element={<Trabalhos />}/>

        </Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
