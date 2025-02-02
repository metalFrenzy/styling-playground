import GoalsForm from '../goals-form';
import GoalsList from '../goals-list';
import './goals-page.scss';
import { useState } from 'react';


interface GoalsItem {
    id: string;
    goal: string;
}


export function GoalsPage() {
    const [goalsList, setGoalsList] = useState<GoalsItem[]>([
        { id: '1', goal: 'Fix sleeping Schedule' },
        { id: '2', goal: 'Find a new Job' },
        { id: '3', goal: 'Be Batman' },
    ]);
    const saveGoalsDataHandler = (goalsData: { goal: string }) => {
        const goalData = {
            id: Math.random().toString(),
            goal: goalsData.goal
        }
        setGoalsList((prevGoalsList) => [...prevGoalsList, goalData]);
    }
    return <>

        <h1>Goals</h1>
        <div className='goals-form'>
            <GoalsForm onsave={saveGoalsDataHandler} />
        </div>
        <div className='goals-list'>
            {goalsList.map((goal) => {
                return <GoalsList goals={{
                    id: goal.id,
                    goal: goal.goal
                }} />
            })}
        </div>

    </>
}
export default GoalsPage;