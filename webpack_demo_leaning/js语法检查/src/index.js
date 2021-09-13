
import add from "./components/index.js"

function addx(x, y) {
  return x - y;
}
// x下一行代码所有exlint 规则失效
// eslint-disable-next-line
console.log(addx(646, 460), 'asdfadsfasdf ');
console.log(add(1, 2), 'componnents ');