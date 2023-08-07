import { RenderCard } from "./RenderCard"
import styles from "./style.modules.scss"

export const MainSection = ({list, deleteList}) => {

    return (
        <>
            <div>
                <h2>Resumo financeiro</h2>
                {list.length == 0 ? <h4 className="">Você ainda nao possui nenhum lançamento</h4> : list.map((item) => {
                    return (
                        <RenderCard key={item.id} item={item} deleteList={deleteList}></RenderCard>
                    )
                })}
            </div>
        </>
    )
}