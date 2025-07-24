const { error } = require("console");
const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hello I am create write file");

// fs.writeFile("./test.txt", "this is another way to create test file", (err)=>{});

// const result = fs.readFileSync("./need.txt", "utf-8")
// console.log(result);

fs.readFile("./need.txt", "utf-8",(err,result)=>{
    if(err){
        console.log("error", err);
        
    }else{
        console.log(result);
        
    }
});