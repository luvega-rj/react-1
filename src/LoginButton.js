import React, { useState } from 'react';

function LoginButton(props) {
  // initialize state for name, age, and locality
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [locality, setLocality] = useState("");

  // handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (name && age && locality) {
      // call the login function passed down as a prop from the parent component
      props.login();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Locality:
        <input type="text" value={locality} onChange={(e) => setLocality(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginButton;
