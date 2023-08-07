import { Header } from "../../components/Header"
import { FormSection } from "../../components/Sections/FormSection"
import { MainSection } from "../../components/Sections/MainSection"
import { useState } from "react"

export const HomePage = ({addList, list, deleteList, totalValue}) => {

    const [value, setValue] = useState(false)

    return(
        <>
            <Header></Header>
            <FormSection addList={addList} list={list} totalValue={totalValue}></FormSection>
            <MainSection list={list} deleteList={deleteList}></MainSection>
        </>
    )
}