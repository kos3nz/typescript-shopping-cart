// tsc typescriptCheetSheet.ts --watchで自動的にjsファイル作成
import React, { useState, useCallback } from "react";

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favoriteQuote: string = `I'm not old, i'm only ${age}`;

// Array
const pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];
let numbers: number[] = [1, 2, 3, 4, 5];

// Object
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number, number];
basket = ["basketball", 5, 40];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2]; // Medium
let sizeNum: number = Size.Small; // 1

// Any - !!!!!!!!! Be Careful to use !!!!!!!!!!!
let whatever: any = "aghhhhhhhh noooooooo!!";
whatever = basket;

// void
const sing = (): void => console.log("lalalallala");
// indicates this fn doesn't return anything

// never
let error = (): never => {
  throw Error("ooops");
  // (does't return anythin & cannot have a reachable end point = can't end this function because of an error)
  console.log("here is an end point");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string; // optional property
}
let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!");
};
fightRobotArmy({ count: 1, type: "dragon" });

let fightRobotArmywithoutInterface = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("FIGHT!");
};

// Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count = 1;

// Functions
function fightRobotArmy2(robots: RobotArmy): void {
  console.log("FIGHT!");
}

let fightRobotArmywithoutInterface2 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log("FIGHT!");
  return 2;
};

// * Classes
class Animal {
  private sing: string;
  constructor(sound: string) {
    this.sing = sound;
  }
  // short hand syntax for private fields
  //*  #sing: string;
  //* constructor(sound: string) {
  //*   this.#sing = sound;
  //* }

  // short hand syntax for constructor
  //* constructor(public sound: string) {}

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("RAAAWWWR");
lion.greet();

// Union
let coufused: string | number | boolean = true;

// In TypeScript, there are several places where type inference
// is used to provide type information when there is no explicit
// type annotation. For example, in this code
let x = 3;
// automatimally detexts x is a number.

// type
type Item = {
  id: number;
  title: string;
};

const items: Item[] = [
  {
    id: 1,
    title: "一番高い商品",
  },
  {
    // objectのため順番は関係なし
    title: "一番ださい商品",
    id: 2,
  },
];

// * React Function Component

const App1: React.FC = () => {
  const message: string = "mapで一つずつ表示";
  return (
    <div className="App">
      <p>{message}</p>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Child1 />
    </div>
  );
};

// Child Component

const Child1: React.FC = () => {
  return <p>子コンポーネント</p>;
};

// Passing props to child components
type Props1 = {
  message: string;
};

const Child2: React.FC<Props1> = (props) => {
  return <p>{props.message}</p>;
};

const App2: React.FC = () => {
  return (
    <div className="App">
      <Child2 message="子のコンポーネントに渡す" />
    </div>
  );
};

// Passing props by using children
type Props3 = {
  number: string;
  children: React.ReactNode; // React.FCでComponentを定義している場合は省略できる
};

const Child3: React.FC<Props3> = ({ number, children }) => {
  return (
    <p>
      {number}の{children}
    </p>
  );
};

const App3: React.FC = () => {
  return (
    <div className="App">
      <Child3 number="1">子コンポーネント</Child3>
      <Child3 number="2">子コンポーネント</Child3>
    </div>
  );
};

// Using state

const App4: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    </div>
  );
};

// TypeScript props

interface FormProps {
  values: string;
  children: (values: string) => JSX.Element;
}

const Form: React.FC<FormProps> = ({ values, children }) => {
  return children(values);
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Form values="bob">{(values) => <div>{values}</div>}</Form>
    </div>
  );
};

// JSX Generic

interface JSXGenericFormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const JSXGenericForm = <T extends { lastName: string | null }>({
  values,
  children,
}: JSXGenericFormProps<T>) => {
  return children(values);
};

const JSXGenericApp: React.FC = () => {
  return (
    <div className="App">
      <JSXGenericForm<{ firstName: string | null; lastName: string | null }>
        values={{ firstName: "Bob", lastName: "Marley" }}
      >
        {/* <JSXGenericForm values={{ firstName: "Bob", lastName: "Marley" }}> に省略可能 (型推論でtypeを推測してくれるため。明示するのは型注釈)*/}
        {(values) => <div>{values.firstName + " " + values.lastName}</div>}
      </JSXGenericForm>
    </div>
  );
};
