let names = ['John', 'Ed', 'Gentrit', 'Mark', 'Bob']
let potato = 42

function greetEveryone() {
  for (let name of names) greet(name)
}

function saluteEveryone() {
  for (let name of names) {
    salute(name)
  }
}

// input: name: string (optional)
// action: console log hi to the name
// output: greeting
function greet(name = 'stranger') {
  let message = `Hello, ${name}!!!`
  console.log(message)
  return message
}

function salute(name = 'stranger') {
  let message = `Goodbye, ${name}!!!`
  console.log(message)
}

function doSomething() {
  console.log(potato)
}

// input: a: number, b: number
// action: add the numbers together
// output: the sum
function sum(a = 0, b = 0) {
  return a + b
}

greetEveryone()
saluteEveryone()
