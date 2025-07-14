// 4 - Template Expression 

const TemplateExpression = () => {
    const name = "Fabrício"; 
    const data = {
        age: 20, 
        job: "Analista de Suporte"
    }

  return (
    <div>
        <p>A soma é: {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade {data.age} a sua profissão é {data.job}</p>
    </div>
  )
}

export default TemplateExpression