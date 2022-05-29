# Prototype

The prototype pattern is used to instantiate an object by creating a new object with the same class, but without all of the data fields, providing a global point of access to it.


```typescript
...

const Zombie = {
  eatBrains() {
    return RETURN_MESSAGE;
  }
}

...

console.log(chad.eatBrains());
console.log(`${chad.name} is alive? ${chad.isAlive}`);
```