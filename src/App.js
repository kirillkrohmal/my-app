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
      <CostItem></CostItem>
    </div>
  );
}

export default App;
