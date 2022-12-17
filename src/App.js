import CostItem from "./components/CostItem";
import Costs from "/components/Costs/Costs";
import React from "react";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
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
      }
    ]

   /* return React.createElement('div', {}, 
    React.createElement('h1', {}, 'Начнем изучение React'), 
    React.createElement(Costs, {costs: costs})
*/


  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component');

  } 

  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs = {costs}/>
      
    </div>
  );
}

export default App;
