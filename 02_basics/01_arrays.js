// arrays ........................

const arr = [1,2,3]
console.log(arr[1])

const newArr = new Array('a','b','c','d')

console.log(newArr[0])

// Arrays methods ..................

arr.push(4)

// console.log(arr)

// console.log(arr.includes(9))

arr.shift()
console.log(arr)

arr.unshift(10)
console.log(arr)


// slice and splice

let arr1 = [10,20,30,40,50]

const myarr = arr1.slice(1,3)

console.log('A', arr1)
console.log(myarr)

const myarr2 = arr1.splice(1,3)
 
console.log('B', arr1)
console.log(myarr2)