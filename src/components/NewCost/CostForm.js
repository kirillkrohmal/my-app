import "./CostForm.css"
import React, {useState} from "react";


const CostForm = (props) => {

    const[inputName, setInputName] = useState("");
    const[inputAmount, setInputAmount] = useState("");
    const[inputDate, setInputDate] = useState("");


    /*const [userInput, setUserInput] =  useState ({
        inputName: '',
        inputAmount: '',
        inputDate: ''

    });*/
    //document.getElementById().addEventListener('click', () => {})

   

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        
        /*setUserInput ({
            ...userInput,
            }) 

            setUserInput ((previousState) =>  {
                return {
                    ...previousState,
                    name: event.target.value
                }
            })  */
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        /*setUserInput ({
            ...userInput,
            amount: event.target.value}) */
    
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        /*setUserInput ({
            ...userInput,
            date: event.target.value}) */
    }

    const submitHandler = (event)=> {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };


        props.onSaveHostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');

    } 


    return <form>
        <form onSubmit={submitHandler}></form>
        <div className="new-cost__controls">
            <label>Название</label>
            <input type='text' value={inputName} onChange={nameChangeHandler}/>
        </div>
        <div className="new-cost__controls">
            <label>Сумма</label>
            <input onChange={amountChangeHandler} value={inputAmount} type='number' />
        </div>
        <div className="new-cost__controls">
            <label>Дата</label>
            <input onChange={dateChangeHandler} value={inputDate} type='date' />
        </div>
        <div className="new-cost__actions">
            <button type="submit" onClick={}>Добавить расход</button>
        </div>
    </form>
}


export default CostForm;