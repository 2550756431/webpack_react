const sum = require('./src/base');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// 注意 这儿 的文件名 一定是 .test.js(否者 会报错 test is not defined)