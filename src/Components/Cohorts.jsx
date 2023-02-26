const Cohorts = ({data, setList, setTitle}) => {
    const duplicate = [...new Set(data.map(person => person.cohort.cohortCode))]


const formatCode = (code) => {
    let text = ''
    let numbers = ''
    
    for(let i = 0; i < code.length; i++) {
        if(!isNaN(code[i]) * 1) {
            numbers += code[i]
        } else {
            text += code[i]
        }
    }
    return text + ' ' + numbers
}

const handleClick = (event) => {
    const {value} = event.target
    const newList = data.filter(student => {
        return student.cohort.cohortCode === value
    })

    setList(newList)
    setTitle(formatCode(value))
}

return duplicate.map(code => {
    return (
    
        <div>
            <li>
                <button value={code} onClick={handleClick}>{formatCode(code)}</button>
            </li>
            <section className="line"></section>
        </div>
    )
})
}

export default Cohorts