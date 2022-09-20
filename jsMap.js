let keyString = "a string";
let keyObj = {
};
let keyFunc = function(){}

console.log(keyString);
console.log(keyObj);
console.log(keyFunc);

let myMap = new Map();

myMap.set(keyString,"value associated with 'a string'");
myMap.set(keyObj,"value associated with keyObj");
myMap.set(keyFunc,"value associated with keyFunc");

console.log(myMap.size);
console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));

let isKeyExist = myMap.has('a string');

console.log(isKeyExist);

for (let [key, value] of myMap) {
    console.log("Loop1 : "+key+"\t"+value);
}

for (let [key, value] of myMap.entries()) {
    console.log("Loop2 : "+key+"\t"+value);
}

for (let key of myMap.keys()) {
    console.log("Loop3 : "+key);
}

for (let value of myMap.values()) {
    console.log("Loop4 : "+value);
}

let first = new Map([[1,"One"], [2,"Two"],[3,"Three"]]);
let second = new Map([[1,"uno"],[2,"dos"]]);

console.log(first);
console.log(second);

let merge = new Map([...first,...second,[1,"eins"]]);
console.log(merge);

if(merge.has(1)) {
    merge.delete(1);
}
console.log(merge);
console.log(merge.get(2));
merge.clear();

console.log(merge);