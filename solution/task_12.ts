enum ObjectType {
  PEN = 'pen',
  PAPER = 'paper'
}

interface PreparedObject<T> {
  type: ObjectType;
  manufactured: number;
  data: T;
}

function prepareObject<T = ObjectType>(data: T, type: ObjectType): PreparedObject<Omit<T, 'size'>> {
  return {
      type,
      manufactured: 2022,
      data,
  }
}

interface Pen {
  color: string;
}

type PaperSizes = 'A4' | 'A3';

interface Paper extends Pen {
  size:PaperSizes
}

const prepareColoredPen = (color: string): PreparedObject<Pen> => 
  prepareObject<Pen>({ color }, ObjectType.PEN);
const preparePaper = (color: string, size: PaperSizes): PreparedObject<Paper> =>
  prepareObject<Paper>({ color, size }, ObjectType.PAPER);

prepareColoredPen('red');
preparePaper('white', 'A4');
