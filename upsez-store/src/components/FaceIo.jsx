import faceIO from '@faceio/fiojs'

const faceio = new faceIO('fioa2088');

function FaceIo() {
    return (
    <div className="App">
        <button onClick={enrollNewUser}>Enroll New User</button>
        <button onClick={authenticateUser}>Authenticate User</button>
    </div>
    );
}

async function enrollNewUser() {
    const userInfo = await faceio.enroll({
    "locale": "auto", // Default user locale
    "payload": {
        /* The payload we want to associate with this particular user which is forwarded back to us upon future authentication of this user.*/
        "whoami": 123456, // Dummy ID linked to this particular user
        "email": "john@example.com"
        }
    });

    alert(
        `User Successfully Enrolled! Details:
        Unique Facial ID: ${userInfo.facialId}
        Enrollment Date: ${userInfo.timestamp}
        Gender: ${userInfo.details.gender}
        Age Approximation: ${userInfo.details.age}`
    );
}
async function authenticateUser() {
    const userData = await faceio.authenticate({
        "locale": "auto", // Default user locale
    });
    
    console.log("Success, user identified")
    // Grab the facial ID linked to this particular user which will be same
    // for each of his successful future authentication. FACEIO recommend 
    // that your rely on this Facial ID if you plan to uniquely identify 
    // all enrolled users on your backend for example.
    console.log("Linked facial Id: " + userData.facialId)
    // Grab the arbitrary data you have already linked (if any) to this particular user
    // during his enrollment via the payload parameter of the enroll() method.
    console.log("Payload: " + JSON.stringify(userData.payload)) // {"whoami": 123456, "email": "john.doe@example.com"} from the enroll() example above
}

export default FaceIo;