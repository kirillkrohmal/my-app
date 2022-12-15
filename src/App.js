import CostItem from "./components/CostItem";
import Costs from "/components/Costs/Costs";
import React from "react";

const App = () => {

    const costs = [
      {
        date: new Date(2022, 12, 14),
        description: 'Холодильник',
        amount: 299
      },

      {
        date: new Date(2022, 12, 14),
        description: 'Macbook',
        amount: 1299
      },  
      
      {
        date: new Date(2022, 12, 14),
        description: 'Леггинсы',
        amount: 99
      }
    ]

   /* return React.createElement('div', {}, 
    React.createElement('h1', {}, 'Начнем изучение React'), 
    React.createElement(Costs, {costs: costs})
*/


  return (
    <div>
      <h1>Начнем изучение React</h1>
      <Costs costs = {costs}/>
      
    </div>
  );
}

export default App;
