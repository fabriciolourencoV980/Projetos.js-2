import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg'

// 3 - useState
import Daata from './components/Daata'

// 4 - Renderização de lista
import ListRender from './components/ListRender'

function App() {

  return (
    <div className="App" style={{paddingBottom:"500px"}}>
      <h1>Avançando em REACT </h1>
      {/* 1 - Imagem em Public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Daata /> 
      {/* 4 - Renderização de lista */}
      <ListRender /> 
    </div>
  )
}

export default App
