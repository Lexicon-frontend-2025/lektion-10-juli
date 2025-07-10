import { MyType, MyOtherType } from "./models/Types.js";
import Calculator from "./utils/Calc.js";
import * as Apa from "./utils/utils.js";
const myObj: MyType = {
    name: "Hej",
    age: 23
};
const myOtherObj: MyOtherType = {
    otherAge: 23,
    otherName: "Tja"
}
console.log(myObj);
console.log(myOtherObj);

console.log(Calculator());

console.log(Apa.myString);
