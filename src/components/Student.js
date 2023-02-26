import ShowMore from './ShowMore';
import ShowEvenMore from './ShowEvenMore';
import ShowNotes from './ShowNotes';
import ShowEvenNotes from './ShowEvenNotes';
import { useState } from 'react';

export default function Student({ student, pressNiceButton, notes, catGlasses}) {
    const [showMore, setShowMore] = useState(false);
    const [showNotes, setShowNotes] = useState(false);

    function toggleShowMore() {
        setShowMore(!showMore);
    }

    function toggleShowNotes() {
        setShowNotes(!showNotes);
    }

    function middleNameProcessor(middleName) {
        return middleName.charAt(0);
    }
    //Looks like x/y/z includes only 1-12/1-12/yyyy, so could MM/DD or DD/MM.  Assuming MM/DD.
    function dateConverter(date) {
        const dateArray = date.split("/");
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let month = months[parseInt(dateArray[0]) - 1];
        let day = dateArray[1];
        let year = dateArray[2];
        return `${month} ${day}, ${year}`;
    }
    //test OK 2023 Feb 22

    function onTrackCheckAndTextOutput({ resume, linkedin, github, mockInterview }, total) {
        if (resume && linkedin && github && mockInterview && (total > 600)) {
            return "On Track to Graduate"
        } else {
            return "Not On Track to Graduate"
        }
    }

    return (
        <div className="studentElement">
            <div className="showElementPicture">
                {/* <img src={student.profilePhoto} height={100} width={100} alt={`${student.names.preferredName} ${student.names.surname}`} /> */}
                <img src={catGlasses} height={100} width={100} alt="Cat with glasses"/>
            </div>
            <div className="studentElementText">
                <div>{`${student.names.preferredName} ${middleNameProcessor(student.names.middleName)}. ${student.names.surname}`}</div>
                <div>{student.username}</div>
                <div>Birthday: {dateConverter(student.dob)}</div>
                <br />
                <ShowMore
                    toggleShowMore={toggleShowMore}
                    showMore={showMore}
                />
                <ShowNotes
                    showNotes={showNotes}
                    toggleShowNotes={toggleShowNotes}
                />
            </div>
            <div className="studentElementOnTrack">{onTrackCheckAndTextOutput(student.certifications, student.codewars.current.total)}</div>
            <ShowEvenMore student={student} showMore={showMore} />
            <ShowEvenNotes student={student} showNotes={showNotes} pressNiceButton={pressNiceButton} notes={notes} />
        </div>
    );
}