import { useState } from "react"
import { v4 } from "uuid"
import styles from "./style.modules.scss"

export const FormSection = ({addList, list, totalValue}) => {
    
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")

    const handleSubmit = (e) => {
        e.preventDefault()
        const list = {description, value, type, id: v4()}
        addList(list)
    }

    return (
        <>
        <div className="form-container">
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <h3>Descrição</h3>
                    <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Digite aqui sua descrição" required />
                    <p>Ex: Compra de roupas</p>
                    <h3>Valor (R$)</h3>
                    <input type="number" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Digite o valor" required />
                    <h3>Tipo de valor</h3>
                    <select onChange={(event) => setType(event.target.value)} required>
                        <option value="Entrada">Entrada</option>
                        <option value="Saída">Saída</option>
                    </select>                  
                        <p></p>       
                    <button type="submit">Inserir valor</button>
                </div>
            </form>
        </div>
        <section className="value-section">
            {list.length == 0 ? "" : 
                <div>
                    <h2>Valor total:</h2>
                    <h3>{`R$ ${totalValue}`}</h3>
                    <span>
                        <p>O valor se refere ao saldo</p>
                    </span>
                </div>
            }
        </section>
        </>
    )
}