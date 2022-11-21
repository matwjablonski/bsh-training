import { FC } from 'react'
import { Snail } from '../../App';

interface ItemProps extends Snail {
  isFastest?: boolean;
}

const Item: FC<ItemProps> = ({ name, alias, purchaseDate, number, speed, isFastest = false }) => {
  return <li style={{
    color: isFastest ? 'green' : 'blue',
  }}>
    <h2>Name: {name} {alias && <span>({alias})</span>}</h2>
    <div>Shell number: {number}</div>
    <div>Speed: {speed}</div>
    <div>Purchase date: {purchaseDate}</div>
  </li>
}

export default Item;
