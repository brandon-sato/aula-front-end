import { useState } from 'react'

function MyButton(props){
  return (
    <button className="my-btn" onClick={props.onClick}>{props.texto}</button>
  )
}

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", feito: true },
    { id: 2, texto: "Fazer a trilha", feito: false }
  ])

  function addTarefa() {
    const newTarefa = {
      id: 3,
      texto: "Estudar as 173 questões da prova",
      feito: true
    }
    setTarefas([...tarefas, newTarefa])
  }

  return (
    <div className="app">
      <h1>Minhas Tarefas</h1>
      <MyButton onClick={addTarefa} texto="Adicionar Tarefa"/>
      <br />
      <br />
      <br />
      <ul>
        <li>
          {
            tarefas.map((item) => {
              return (
                <li>{item.texto}</li>
              )
            })
          }
        </li>
      </ul>
    </div>
  )
}

export default App
