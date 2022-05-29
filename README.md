# JS-DESIGN-PATTERNS
> This was created to help to learn and understand the patterns that I use in my JS projects.

## Installation
First, you need to install [NodeJs and npm](https://nodejs.org), then install the dependencies:

```bash
npm install
```

## Scripts
There are scripts for each pattern, you can check the scripts in the [package.json](./package.json) file, eg:

```bash
npm run singleton
```

## Usage
The following is a list of the patterns I use in my JS projects:

### Patterns
- [Singleton](#singleton)
- [Factory](#factory) 🔜
- [Prototype](#prototype)
- [Builder](#builder)
- [Adapter](#adapter) 🔜
- [Composite](#composite) 🔜
- [Decorator](#decorator) 🔜
- [Facade](#facade) 🔜
- [Proxy](#proxy) 🔜
- [Chain of Responsibility](#chain-of-responsibility) 🔜
- [Command](#command) 🔜
- [Iterator](#iterator) 🔜
- [Mediator](#mediator) 🔜
- [Memento](#memento) 🔜
- [Observer](#observer) 🔜
- [State](#state) 🔜
- [Strategy](#strategy) 🔜
- [Template Method](#template-method) 🔜
- [Visitor](#visitor) 🔜

## Singleton
The singleton pattern is used to ensure that a class has only one instance.

```bash
npm run singleton
```

## Factory 🔜
The factory pattern is used to provide an interface for creating objects in a superclass, but allowing subclasses to alter the type of objects that will be created.

```bash
npm run factory
```

### Prototype
The prototype pattern is used to instantiate an object by creating a new object with the same class, but without all of the data fields.

```bash
npm run prototype
```

### Builder
The builder pattern is used to create complex objects step by step, to create complex objects step by step.

```bash
npm run builder
```

### Adapter 🔜
The adapter pattern is used to provide a link between two otherwise incompatible classes, by wrapping the "adaptee" with a "wrapper".

```bash
npm run adapter
```

### Composite 🔜
The composite pattern is used to compose objects into tree structures to represent part-whole hierarchies.

```bash
npm run composite
```

### Decorator 🔜
The decorator pattern is used to add new functionality to an existing object dynamically.

```bash
npm run decorator
```

### Facade 🔜
The facade pattern is used to provide a simplified interface to a large body of code, usually hiding the underlying implementation details.

```bash
npm run facade
```

### Proxy 🔜
The proxy pattern is used to provide a surrogate or placeholder for another object to control access to it.
- When you need to provide a surrogate or placeholder for another object to control access to it, and provide a global point of access to it.

```bash
npm run proxy
```

### Chain of Responsibility 🔜
The chain of responsibility pattern is used to process a request in a chain of handlers.
- When you need to process a request in a chain of handlers, and provide a global point of access to it.
```bash
npm run chain-of-responsibility
```

### Command 🔜
The command pattern is used to encapsulate a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.
- When you need to encapsulate a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations, and provide a global point of access to it.

```bash
npm run command
```

### Iterator
The iterator pattern is used to traverse a container and access the elements by going through a series of links called "steps".
- When you need to traverse a container and access the elements by going through a series of links called "steps", and provide a global point of access to it.

```bash
npm run iterator
```

### Mediator 🔜
The mediator pattern is used to reduce coupling between classes that communicate with each other.
- When you need to reduce coupling between classes that communicate with each other, and provide a global point of access to it.

```bash
npm run mediator
```

### Memento 🔜
The memento pattern is used to capture and restore the internal state of an object.
- When you need to capture and restore the internal state of an object, and provide a global point of access to it.

```bash
npm run memento
```

### Observer 🔜
The observer pattern is used to allow an object to notify interested objects when its state changes.
- When you need to allow an object to notify interested objects when its state changes, and provide a global point of access to it.

```bash
npm run observer
```

### State 🔜
The state pattern is used to alter the behaviour of an object as its internal state changes.
- When you need to alter the behaviour of an object as its internal state changes, and provide a global point of access to it.

```bash
npm run state
```

### Strategy 🔜
The strategy pattern is used to alter the behaviour of an object by replacing one algorithm with another.
- When you need to alter the behaviour of an object by replacing one algorithm with another, and provide a global point of access to it.

```bash
npm run strategy
```

### Template Method 🔜
The template method pattern is used to define the skeleton of an algorithm in an operation, deferring some steps to subclasses.
- When you need to define the skeleton of an algorithm in an operation, deferring some steps to subclasses, and provide a global point of access to it.
```bash
npm run template-method
```

### Visitor 🔜
> The visitor pattern is used to separate a relatively complex set of structured data classes from the code that operates on them.
- When you need to separate a relatively complex set of structured data classes from the code that operates on them, and provide a global point of access to it.
```bash
npm run visitor
```

## Contributing
This project is open source. There is a folder for each Design Pattern under `src/`, so feel free to contribute, even including others :) 

## License
This project is licensed under the MIT license and is available on [Github](https://github.com/felipekm/js-design-patterns).


