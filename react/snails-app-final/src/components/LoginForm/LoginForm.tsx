import { SyntheticEvent, useState } from 'react';

const LoginForm = () => {
  const [loginValues, setLoginValues] = useState({
    login: '',
    password: '',
  });
  
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log('submit', loginValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={loginValues.login} onChange={(e) => setLoginValues((prev) => ({
        ...prev,
        login: e.currentTarget.value,
      }))}/>
      <input type="password" value={loginValues.password} onChange={(e) => setLoginValues({
        ...loginValues,
        password: e.currentTarget.value,
      })} />
      <button type="submit">Zaloguj</button>
    </form>
  )
}

export default LoginForm;
