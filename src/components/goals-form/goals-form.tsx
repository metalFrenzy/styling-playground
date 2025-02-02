import './goals-form.scss'
import { useState } from 'react';

export function GoalsForm() {
    const [goal, setGoal] = useState('');
    const goalHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGoal(event.target.value)
    }

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(goal);
        setGoal('');
    }
    return <form onSubmit={submitHandler}>
        <div className='goals-form'>
            <h1 className='form-title'>Goals Form</h1>
            <div className='title'>
                <label>Goal</label>
                <input type='text' onChange={goalHandler} value={goal} />
            </div>
        </div>
        <div className='action-button'>
            <button className='add' type='submit'>Add a Goal</button>
        </div>
    </form>
}
export default GoalsForm;