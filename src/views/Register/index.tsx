import React, { useState } from 'react';

const Register = () => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = () => {};

  return (
    <div>
      <form action="" onSubmit={handleSubmit}></form>
      <input
        type="text"
        onChange={(e) => setFirstNameValue(e.target.value)}
        value={firstNameValue}
        placeholder={'Michael Doe'}
      />
      <input
        type="text"
        onChange={(e) => setLastNameValue(e.target.value)}
        value={firstNameValue}
        placeholder={'Michael Doe'}
      />
      <input
        type="text"
        onChange={(e) => setFirstNameValue(e.target.value)}
        value={firstNameValue}
        placeholder={'Michael Doe'}
      />
      <input
        type="text"
        onChange={(e) => setFirstNameValue(e.target.value)}
        value={firstNameValue}
        placeholder={'Michael Doe'}
      />
    </div>
  );
};

export default Register;
