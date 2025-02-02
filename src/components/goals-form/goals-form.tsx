import './goals-form.scss'

export function GoalsForm() {
    return <form>
        <div className='goals-form'>
            <h1 className='form-title'>Goals Form</h1>
            <div className='title'>
                <label>Goal</label>
                <input type='text' />
            </div>
        </div>
        <div className='action-button'>
            <button className='add' type='submit'>Add a Goal</button>
        </div>
    </form>
}
export default GoalsForm;