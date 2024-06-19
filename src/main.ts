let sales = 1000;
let course = "Angular";
let isPublished = true;

function reader(document: any) {
  console.log(document)
}

// Array
let students: number[] = [1, 2, 3, 4, 5, 6];
let courses: Array<string> = ["Angular", "React", "Vue"];

reader(students);
reader(courses);

// tuple
let student: [number, string, boolean] = [1, "Angular", true];

reader(student);

// Enum
enum Level {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3
}

let level: Level = Level.Intermediate;

reader(level);

// Object
let person: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30
}

reader(person);

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  }
}