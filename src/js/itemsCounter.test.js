import { itemsCounter } from './itemsCounter';

test('items counter check ', () => {
  const arr = [
    {
      id: 3,
    },
  ];
  const counter = itemsCounter(arr);

  expect(counter).toBe(1);
});
