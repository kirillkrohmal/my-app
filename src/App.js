import CostItem from "./components/CostItem";
import Costs from "/components/Costs/Costs";
import React, {useState} from "react";
import NewCost from "./components/NewCost/NewCost";


const costs = [
  {
    id: 'c1',
    date: new Date(2022, 12, 14),
    description: 'Холодильник',
    amount: 299
  },

  {
    id: 'c2',
    date: new Date(2022, 12, 14),
    description: 'Macbook',
    amount: 1299
  },  
  
  {
    id: 'c3',
    date: new Date(2022, 12, 14),
    description: 'Леггинсы',
    amount: 99
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

    

   /* return React.createElement('div', {}, 
    React.createElement('h1', {}, 'Начнем изучение React'), 
    React.createElement(Costs, {costs: costs})
*/


  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]

    });

  } 

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs = {costs}/>
      
    </div>
  );
}

export default App;
