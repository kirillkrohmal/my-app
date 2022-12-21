import React, {useState} from "react";
import CostForm from "./CostForm";
import "./NewCost.css"

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);


    const saveHostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,  
            id: Math.random().toString()
        }

        props.onAddCost(costData);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true); 
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }


    return <div className="new-cost">

        {!isFormVisible && <button onClick=
        {inputCostDataHandler}>Добавить новый расход</button>}
        {isFormVisible && <CostForm onSaveHostData=
        {saveHostDataHandler} onCancel = 
        {cancelCostHandler}/>}
    </div>
}


export default NewCost;