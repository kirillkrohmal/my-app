import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";


const CostItem = (props) => {
    return  (
           <div className="cost-item">
            <CostDate date={props.date}>
                <div className="cost_item__description">
                    
                    <h2>{props.costTitle}</h2>
                    <div className="cost_item__price">$
                        {props.amount}
                    </div>

                </div>
             </CostDate>
            </div>
           
    );
}

export default CostItem;