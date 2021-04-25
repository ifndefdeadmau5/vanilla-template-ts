import faker from "faker";

export type Todo = {
  text: string;
  completed: boolean;
};

// Any function returns a (presumably new) object is a factory function
const createElement = () => ({
  text: faker.random.words(2),
  completed: faker.datatype.boolean(),
});

const repeat = (elementFactory: () => Todo, number: number) => {
  const array = [];
  for (let index = 0; index < number; index++) {
    array.push(elementFactory());
  }
  return array;
};

export default () => {
  const howMany = faker.datatype.number(10);
  return repeat(createElement, howMany);
};
