import GoalsForm from '../goals-form';
import './goals-page.scss';

export function GoalsPage() {
    return <>

        <h1>Goals</h1>
        <div className='goals-form'>
            <GoalsForm />
        </div>

    </>
}
export default GoalsPage;