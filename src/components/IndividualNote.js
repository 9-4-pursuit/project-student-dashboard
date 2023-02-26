export default function IndividualNote({commenterName, comment}) {
    return (
        <li>{`${commenterName} says, "${comment}"`}</li>
    );
}