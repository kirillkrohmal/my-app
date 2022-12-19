
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

                {props.costs.map((cost) => (
                <CostItem 
                    key={cost.id}
                    date = {cost.date}
                    description={cost.description}
                    amount={cost.amount}
                    />
            ))};
                    
            </Card>
         </div>
    );
}

export default Costs;