import { useState } from "react"

const Daata = () => {

    let someData = 10;
    const [anotherNumber, setAnotherNumber] = useState(15);
    const [valorDiferent, setValorDiferent] = useState("Teste"); 

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
        </div>
        <div>
          <p>Valor: {anotherNumber}</p>
          <button onClick={() => setAnotherNumber(20)}>Mudar Valor</button>
        </div>
        <div>
          <p>Valor exato: {valorDiferent}</p>
          <button onClick={() => {setValorDiferent("Teste concluído!")}}>Aperte</button>
        </div>
    </div>
  )
}

export default Daata