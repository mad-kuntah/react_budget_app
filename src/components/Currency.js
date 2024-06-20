import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
 
    return (
        <div className='alert alert-secondary'>
            <span>Currency: 

                <select className='select' onChange={(event) => dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            })} value={currency}>
                    <option value="$"> $ Dollar</option>
                    <option value="£"> £ Pound</option>
                    <option value="€"> € Euro</option>
                    <option value="₹"> ₹ Rupee</option>
                </select>
            </span>
        </div>
    );
};
export default Currency;