import Student from './Student';

export default function StudentList ({studentList, seasonCohort, pressNiceButton, notes, catGlasses}) {
    return (
        <div className="studentList" >
            <div className="studentListSticky">
            <h3>{seasonCohort}</h3>
            <p>Total students: {studentList.length}</p>
            </div>
            {studentList.map((student) => {
                return (
                    <Student 
                    key={student.id} 
                    student={student}
                    pressNiceButton={pressNiceButton}
                    notes={notes}
                    catGlasses={catGlasses}
                    />
                ); // return studentList map
            })}
        </div>
    );
}