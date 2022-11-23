import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Test from './components/Test/Test';
import User from './components/User/User';
import data from './data.json';

export interface Snail {
  name: string;
  alias: string;
  speed: number;
  number: number;
  purchaseDate: string;
}

export interface User {
  snails: string[];
  name: string;
  crew: string;
  avatar: string;
}

interface ResponseShape<T> {
  isLoading: boolean;
  data: T;
}

// const sortByData = <T extends {}>(list: T[], fieldToSort: Record<'purchaseDate', T>) => {

//   return list.sort((a, b) => +new Date(a[fieldToSort]) - +new Date(b[fieldToSort]));
// }


function App() {
  const [snails, setSnails] = useState<ResponseShape<Snail[]>>({
    data: [],
    isLoading: true,
  })
  const [isLogged, setIsLogged] = useState(true)

  const fetchSnails = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}snails`);
      const { data } = await res.json();

      // sortByData<Snail>(data, 'purchaseDate');

      setSnails({
        data,
        isLoading: false,
      })
    } catch (err) {

    }
  };

  useEffect(() => {
    fetchSnails();
  }, []);

  return (
    <div className="App">
      <Header user={<User user={data.user}/>}>
        Bet your snail
      </Header>
      <Routes>
        <Route path="/" element={<>Welcome</>} />
        <Route path="bets" element={
          <ProtectedRoute isLogged={isLogged}>
            <List list={data.snails as Snail[]} header={<Test />} />
          </ProtectedRoute>
        } />
        <Route path="login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
