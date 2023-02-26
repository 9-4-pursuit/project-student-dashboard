import Cohorts from './Cohorts'

const CohortList = ({data, setList, setTitle}) => {
    return (
        <div className='cohorts'>
            <h3>Choose a Class by Start date</h3>
            <ul>
                <li className='line'>
                    <button onClick={() => {
                    setList(data)
                    setTitle('All Students')
                }}>All Students</button>
                </li>
                <Cohorts data={data} setList={setList} setTitle={setTitle} />
            </ul>
        </div>
    )
}

export default CohortList