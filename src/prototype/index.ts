import { RETURN_MESSAGE } from './constants';

const Zombie = {
  eatBrains() {
    return RETURN_MESSAGE;
  }
}

const chad = Object.create(Zombie, {
  name: { value: 'Chad' },
  isAlive: { value: true }
});

console.log(chad.eatBrains());
console.log(`${chad.name} is alive? ${chad.isAlive}`);