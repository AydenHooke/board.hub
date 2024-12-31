import { FormEvent, useState } from 'react'
import ProfileInput from './ProfileInput'
import axios from 'axios'
import { useAccount } from '../../Context/useAccount';

function ProfileLogic() {

    // useEffect(() => {
    //     async function getProfileData() {
    //         // would need to get the user's profile data from the backend
    //         //or alternately use usecontext when logging in
            
    //         ///axios.get('http://localhost:4000/profile')
    //     }
    // }, [])


    const { username: contextUsername, setUsername: setContextUsername, 
            email: contextEmail, setEmail: setContextEmail,
            id: contextId, setId: setContextId,
            bggUsername: contextBggUsername, setBggUsername: setContextBggUsername
    } = useAccount();

    const [email, setEmail] = useState(contextEmail);
    const [username, setUsername] = useState(contextUsername);
    const [password, setPassword] = useState("");
    const [bggUsername, setBggUsername] = useState(contextBggUsername);


    function handleProfileEdit(e: FormEvent){
      e.preventDefault();

      axios.patch(`http://localhost:8080/account/`, {
        accountId: contextId,
        email: email,
        username: username,
        passwordHash: password,
        bggAccount: bggUsername
      })
      .then(response => {
        console.log(response.data);
        setContextEmail(response.data.email);
        setContextUsername(response.data.username);
        setContextId(response.data.accountId);
        setContextBggUsername(bggUsername);
      })
      .catch(error => {
        console.error('Error patching data, ', error)
      });
    
    };

  return (
    <div>
       <ProfileInput 
        email={email} setEmail={setEmail}
        username={username} setUsername={setUsername}
        password={password} setPassword={setPassword}
        bggUsername={bggUsername} setBggUsername={setBggUsername}
        handleProfileEdit={handleProfileEdit}/>
    </div>
  )
}

export default ProfileLogic