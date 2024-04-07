import inquirer from "inquirer";

let todos:string[]= []
let loop = true

while(loop){
    const answer:{
        addtodo:string,
        admore:boolean
    } = await inquirer.prompt([
        {
            type:"input",
            name:"addtodo",
            message:"What do you want to add in your todo ?"
        },
        {
            type:"confirm",
            name:"admore",
            message:"do you want another true",
            default:false
        }
    ])
    const {addtodo,admore}=answer
    // console.log(answer);
    
    loop = admore
if(addtodo){
todos.push(addtodo)
}   
else{
    console.log("kindly add valid input");
    
}
}
if(todos.length > 0){
    console.log("your todo list is :");
todos.forEach(addtodo => {
    console.log(addtodo);
});
}else{
    console.log("no todo found");
    
}