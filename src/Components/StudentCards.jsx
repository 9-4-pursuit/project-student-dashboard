import StudentDetails from "./StudentDetails";
import { useState } from "react";

const StudentCard = ({data, profilePhoto, preferredName}) => {
    const [show, setShow] = useState(false);
    
    const [comments, setComments] = useState(data.notes);

    return (
        <div className="card" >
            <section className="student-info-image">
            <img src={profilePhoto}
                 alt={preferredName}
                 width={150}
                 height={150}/>
            </section>

            <p className="graduate">{(data.certifications.resume && data.certifications.linkedin && data.certifications.mockInterview && data.certifications.github && data.codewars.current.total > 600) ? 'On Track to Graduate' : ''}</p>

            <p>{data.names.preferredName} {data.names.middleName[0]}. {data.names.surname}</p>

            <p>{data.username}</p>

            <p className="birthday"><span>Birthday:</span> {data.dob}</p>

            <button onClick={() => setShow(!show)}>{show ? 'Show Less...' : 'Show More...'}</button>

            {show ? <StudentDetails student={data} comments={comments} setComments={setComments} /> : null}
        </div>
    )
}

export default StudentCard;