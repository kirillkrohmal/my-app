
import CostForm from "./CostForm";
import "./NewCost.css"

const NewCost = (props) => {

    const saveHostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,  
            id: Math.random().toString()
        }

        props.onAddCost(costData);
    }



    return <div className="new-cost">
        <CostForm onSaveHostData={saveHostDataHandler}/>
    </div>
}


export default NewCost;