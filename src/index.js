import { useState } from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import React, {useState} from "react";




const CostItem = (props) => {
    const [description, setDescription] = useState(props.description);
    
    const changeDescriptionHandler = (props) => {
        setDescription('new Text');
    };


    return  (
           <div className="cost-item">
            <CostDate date={props.date}>
                <div className="cost_item__description">
                    
                    <h2>{props.costTitle}</h2>
                    <div className="cost_item__price">$
                        {props.amount}
                    </div>

                </div>
                <button onClick={() => {}}></button>
             </CostDate>
            </div>
           
    );
}

ReactDOM.render(<App />, document.getElementById
('root'));

    


