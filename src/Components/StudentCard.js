export default function StudentCard({
  student,
  firstName,
  middleName,
  lastName,
  email,
  studentPhoto,
  birthDay,
}) {
  console.log(firstName);
  return (
    <div>
      <h1>{firstName + " " + middleName[0] + ". " + lastName}</h1>
      <p>{email}</p>
      <p>Birthday:{birthDay}</p>
    </div>
  );
}
