
import CostItem from "./components/CostItem";
import Card from "../UI/Card";
import CostFilter from "./CostFilter"
import React, {useState} from "react";

const Costs = (props)  => {


    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);

    }



    return (
        <div>
     
            <Card className="costs">
            <CostFilter year = {selectedYear} 
             onChangeYear = {yearChangeHandler} />
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
            </Card>
         </div>
    );
}

export default Costs;