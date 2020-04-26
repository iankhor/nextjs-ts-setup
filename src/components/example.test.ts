import example from '@components/example';

test('test example', () => {
  expect(example(true)).toEqual('hello world');
});
