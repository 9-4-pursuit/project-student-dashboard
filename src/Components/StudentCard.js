export default function StudentCard({
  firstName,
  middleName,
  lastName,
  email,
  studentPhoto,
  birthDay,
  formatDate,
  student,
  OnTrack,
}) {
  return (
    <div className="card">
      <p onLoad={OnTrack(student)}></p>
      <img src={studentPhoto} alt={`headshot of ${firstName}`} />
      <h1>{firstName + " " + middleName[0] + ". " + lastName}</h1>
      <p>{email}</p>
      <p>Birthday: {formatDate(birthDay)}</p>
    </div>
  );
}
