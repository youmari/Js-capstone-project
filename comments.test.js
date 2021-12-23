/**
 * @jest-environment jsdom
 */

import updateTotalCommentsCount from './src/js/commentCounter';

test('items counter check ', () => {
  const arr = [
    {
      id: 1,
      username: '',
      comment: '',
    },
  ];
  const counter = updateTotalCommentsCount(arr[0].id);

  expect(counter).toBe(6);
});