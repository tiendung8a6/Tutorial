function addTwoNumbers(num:number) {
  return num + 2;
}

addTwoNumbers(5)
 
function consoleLogError(message: string):void {
  console.log(message);
}
function handleError(message: string):never {
    throw new Error(message);
  }

export{};