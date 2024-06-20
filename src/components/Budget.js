
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {

        if (event.target.value  < totalExpenses){
            alert("The value cannot be lower than spending: "+ (totalExpenses))
            return
        }
            


        if (event.target.value < (budget - totalExpenses))
            setNewBudget(event.target.value);
        else
            alert("The value cannot exceed remaining funds "+ (budget - totalExpenses))
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;