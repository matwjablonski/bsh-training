import { SyntheticEvent, useState } from 'react';
import { Snail } from '../../App';

interface StateValues {
  name: string;
  login: string;
  password: string;
}

const LoginForm = () => {
  const [loginValues, setLoginValues] = useState<StateValues>({
    login: '',
    password: '',
    name: ''
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
