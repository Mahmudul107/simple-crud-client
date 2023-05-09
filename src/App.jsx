/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('Users inserted successfully')
        form.reset()
      }
    })
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <Link to='users'><button>Go users</button></Link>
    </>
  );
}

export default App;
