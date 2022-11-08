enum ObjectType {
  PEN = 'pen',
  PAPER = 'paper'
}

function prepareObject(data, type) {
  return {
      type,
      manufactured: 2022,
      data,
  }
}

const prepareColoredPen = (color) => prepareObject({ color }, ObjectType.PEN);
const preparePaper = (color, size) => prepareObject({ color, size }, ObjectType.PAPER);

prepareColoredPen('red');
preparePaper('white', 'A4');
