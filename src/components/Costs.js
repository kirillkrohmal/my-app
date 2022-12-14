
import CostItem from "./components/CostItem";


function Costs() {
    return (

    <div>
        <CostItem
        date={props.cost[0].date}
        description={props.cost[0].description}
        amount={props.cost[0].amount}
    />
      <CostItem
        date={props.cost[1].date}
        description={props.cost[1].description}
        amount={props.cost[1].amount}
        
    />
      <CostItem
    
        date={props.cost[2].date}
        description={props.cost[2].description}
        amount={props.cost[2].amount}

    />
    </div>
    )
}

export default Costs;