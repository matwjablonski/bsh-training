## Task 14

Estimation: 25 minutes

### Task A

- generate project `snails-app` using Create React App in directory `react/`
  - `npx create-react-app snails-app --template typescript`

### Task B

- copy file `react/data/data.json` to `src` directory in your project
- Prepare two components:
  - first should be a unorderded list with snails from `data.json`
  - remember to add types for new object
  - second component should be list item for specific snail (name, speed, age, purchaseDate)
  - snails on the list should be ordered by purchaseDate from newest to oldest

### Task C

- name of snail with lowest speed should be red, highest green
- using styles:
  - add paddings to items list
  - every list item should have border-bottom (instead of last)
  - name should be write in sans-serif font
