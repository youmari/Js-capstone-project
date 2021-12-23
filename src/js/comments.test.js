/**
 * @jest-environment jsdom
 */

import { commentCounter } from './commentCounter';

test('items counter check ', () => {
  const arr = [
    {
      id: 1,
      username: '',
      comment: '',
    },
  ];
  const counter = commentCounter(arr);

  expect(counter).toBe(1);
});