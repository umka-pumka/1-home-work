import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


const Page1 = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [])
return (
  <div>
      <h1>Page1</h1>
      <button onClick={() => navigate(-1)} className="go-back-button">go Back</button>
      {users.map(user => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
)
}

export default Page1;