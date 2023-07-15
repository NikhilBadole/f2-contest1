/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    let newArr = arr.map((element) => {
      if(element.profession === "developer"){
          console.log(element.name);
        }
    })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) => {
    if(element.profession === "developer"){
        console.log(element.name);
      }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  // for(let i=0;i<arr.length;i++){
  //   if(arr[i].profession === "admin"){
  //     arr.splice(i, 1);
  //     i--;
  //   }
  // }
  // console.log(arr);

  //By using filter method
  let filteredArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "nikhil", age: "25", profession: "developer" },
    { id: 6, name: "ram", age: "24", profession: "developer" },
    { id: 7, name: "shyam", age: "22", profession: "admin" },
  ];
  
  let newArr = arr.concat(arr2);
  console.log(newArr)
}
