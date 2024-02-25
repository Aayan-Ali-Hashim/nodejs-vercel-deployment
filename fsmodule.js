const fs = require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);;

// })
// const a = fs.readFileSync('file.txt');
// console.log(a.toString())
// console.log("file reading done")

// fs.writeFile('file2.txt','This is my file',()=>{
//     console.log("Written to the file")
// })

b = fs.writeFileSync("file3.txt",'This is new file');
console.log(b);
console.log("This text will appear at the end ");