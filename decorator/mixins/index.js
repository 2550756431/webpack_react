export function mixins(...list) {
    return function (target) {
      console.log(target.prototype,"targettarget");
      Object.assign(target.prototype, ...list);
    };
  }