import { FC } from 'react'
import { Snail } from '../../App';

interface ItemProps extends Snail {
  isFastest?: boolean;
  changeBet(name: string, value: number): void;
  changeBet2?: (name: string, value: number) => void;
}

const Item: FC<ItemProps> = ({ changeBet, name, alias, purchaseDate, number, speed, isFastest = false }) => {
  return <li style={{
    color: isFastest ? 'green' : 'blue',
  }}>
    <h2>Name: {name} {alias && <span>({alias})</span>}</h2>
    <div>Shell number: {number}</div>
    <div>Speed: {speed}</div>
    <div>Purchase date: {purchaseDate}</div>
    button / input

    <button onClick={() => changeBet(name, 1)}>+1</button>
  </li>
}

export default Item;
