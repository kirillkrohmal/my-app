function CostItem() {

    const costDate = new Date(2022, 12, 14);
    const costTitle = 'Холодильник';
    const costAmount = 299;


    return  
            (<div className="cost-item">
                <div>{costDate.toISOString()}</div>
                <div className="cost_item__description">
                    
                    <h2 className>{costTitle}</h2>
                    <div className="cost_item__price">$
                        {costAmount}
                    </div>

                </div>

            
            </div>)
}

export default CostItem;