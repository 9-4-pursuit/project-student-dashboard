import { useState } from 'react';
import Student from './Student';

export default function StudentList({ studentList, seasonCohort, pressNiceButton, notes, catGlasses }) {
    // const [showMore, setShowMore] = useState(false);
    // const [showNotes, setShowNotes] = useState(false);

    // function toggleShowMore() {
    //     setShowMore(!showMore);
    // }
    
    // function toggleShowNotes() {
    //     setShowNotes(!showNotes);
    // }
    // console.log("studentList render");

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
                        // showMore={showMore}
                        // toggleShowMore={toggleShowMore}
                        // showNotes={showNotes}
                        // toggleShowNotes={toggleShowNotes}
                    />
                ); // return studentList map
            })}
        </div>
    );
}