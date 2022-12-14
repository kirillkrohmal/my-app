import CostItem from "./components/CostItem";


function App() {

    const cost = [
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




  return (
    <div>
      <h1>Начнем изучение React</h1>
      <CostItem
        date={cost[0].date}
        description={cost[0].description}
        amount={cost[0].amount}
    />
      <CostItem
        date={cost[1].date}
        description={cost[1].description}
        amount={cost[1].amount}
/>
      <CostItem
    
        date={cost[2].date}
        description={cost[2].description}
        amount={cost[2].amount}

/>
    </div>
  );
}

export default App;
