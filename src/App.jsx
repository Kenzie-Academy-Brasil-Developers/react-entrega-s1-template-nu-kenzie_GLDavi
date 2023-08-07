import { HomePage } from "./pages/HomePage";
import { useState } from "react";
import './styles/index.scss'

function App() {

  const [list, setList] = useState([])
  const addList = (newList) => {
    setList([...list, newList])
  }

  const deleteList = (listId) => {
    const listFiltered = list.filter((list) => list.id != listId)
    setList(listFiltered)
  }

  const totalValue = list.reduce((currentTotal, total) => {
    return currentTotal + Number(total.value)
  }, 0)

  return (
    <HomePage addList={addList} deleteList={deleteList} list={list} totalValue={totalValue}></HomePage>
  )
}

export default App
