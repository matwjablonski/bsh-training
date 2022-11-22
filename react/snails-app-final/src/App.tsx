import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import LoginForm from './components/LoginForm/LoginForm';
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

const sortedList = data.snails.sort((a, b) => +new Date(a.purchaseDate) - +new Date(b.purchaseDate))

function App() {
  return (
    <div className="App">
      <Header user={<User user={data.user}/>}>
        Bet your snail
      </Header>
      <LoginForm />
      <List list={sortedList as Snail[]} header={<Test name="asda"/>} />
    </div>
  );
}

export default App;
