import './goals-list.scss'


type Props = {
    goals: {
        id: string,
        goal: string
    };
}

export function GoalsList({goals}: Props) {
    return <div className='goals'>
        <p>{goals.goal}</p>
    </div>
}

export default GoalsList;