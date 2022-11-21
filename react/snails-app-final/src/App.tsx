import './App.css';
import List from './components/List/List';
import LoginForm from './components/LoginForm/LoginForm';
import data from './data.json';

export interface Snail {
  name: string;
  alias: string;
  speed: number;
  number: number;
  purchaseDate: string;
}

const sortedList = data.snails.sort((a, b) => +new Date(a.purchaseDate) - +new Date(b.purchaseDate))

function App() {
  return (
    <div className="App">
      <LoginForm />
      <List list={sortedList as Snail[]} />
    </div>
  );
}

export default App;
