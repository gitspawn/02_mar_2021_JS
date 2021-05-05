let salary = 20000;
let overtime = 10;
let rate = 20;

const getSalary = (salary, overtime, rate) => {
  return salary + overtime * rate;
}

let result = getSalary(20000, 10, 20)
console.log(result)




let employee = {
  salary: 20000,
  overtime: 10,
  rate: 20,
  getSalary() {
    return this.salary + this.overtime * rate;
  }
}

console.log(employee.getSalary())