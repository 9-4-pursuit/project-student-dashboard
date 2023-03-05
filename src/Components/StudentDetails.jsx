
function StudentDetails({item}) {


    return (
        <div className="studentDetailsCard" key={item.id}>
                            <img src={item.profilePhoto} alt="Picture" />
                            <div className="infoWrapper">
                            <p><strong>{item.names.preferredName} {item.names.middleName.charAt(0).toUpperCase()}. {item.names.surname}</strong></p>
                            <p>{item.username}</p>
                            <p>Birthday: {item.dob}</p>
                            <a href="#">Show More...</a>
                            </div>
        </div>
    )
}

export default StudentDetails