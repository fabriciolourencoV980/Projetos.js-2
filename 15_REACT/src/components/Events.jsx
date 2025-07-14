// 6 - Criando eventos

const Events = () => {

    const handleClick = (e) => {
        console.log(e);
        console.log("Executou..."); 
    }

// 8 - Função de renderização
    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa! </h1>
        }
    }; 

    //return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
        <div>
            <button onClick={() => {
                console.log("Testando evento...")
            }}>Clique aqui.</button>
        </div>
        {/* 7 - Eventos com Função*/}
        <div>
            <button onClick={handleClick}>Clique aqui com Função</button>
        </div>
        {/* 8 - Função como render  */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events;
