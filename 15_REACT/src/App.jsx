import './App.css'
// 2 - Importando componente 
import FirstComponent from './components/FirstComponent';
// 4 - Template Expression 
import TemplateExpression from './components/TemplateExpression';
// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent';
// 6 - Criando Evento 
import Events from './components/Events';

function App() {
  // 3 - Comentários
  return <div className="App">
    {/* 3 - Comentários JSX*/}
    <h1>Fundamentos do React</h1>
    <FirstComponent/>
    <TemplateExpression/>
    <MyComponent/>
    <Events/>
  </div>;
}

export default App; 
