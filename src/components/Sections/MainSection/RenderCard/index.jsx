export const RenderCard = ({item, deleteList}) => {
    return (
        <>
            <li>
                <p>{item.description}</p>
                <span>
                    <p>{item.type}</p>
                    <p>{`R$ ${item.value}`}</p>
                </span>
                <button onClick={() => deleteList(item.id)}>Excluir</button>
            </li>   
        </>
    )
}