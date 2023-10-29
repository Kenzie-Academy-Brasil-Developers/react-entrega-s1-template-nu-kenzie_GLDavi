export const RenderCard = ({item, deleteList}) => {
    return (
        <>
            <li className="cards-li">
                <p className="financial-description">{item.description}</p>
                <span className="financial-values">
                    <p className="financial-type">{item.type}</p>
                    <p className="financial-value">{`R$ ${item.value}`}</p>
                </span>
                <button onClick={() => deleteList(item.id)} className="delete-button">Excluir</button>
            </li>   
        </>
    )
}