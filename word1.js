var obj=[
    {name:"raji",age:23,class:"msc(cs)",bloodgroub:"b+"},
    {name:"ranjith",age:25,class:"civil",bloodgroub:"b-"},
    {name:"rajkumar",age:29,class:"civil",bloodgroub:"a+"},
    
];
for (i=0;i<obj.length;i++){
    console.log(`
    name:${obj[i].name} 
    age:${obj[i].age}
    bloodgroup:${obj[i].bloodgroub}
    `);
}
for (let i in obj){
    console.log(`
    name:${obj[i].name} 
    age:${obj[i].age}
    bloodgroup:${obj[i].bloodgroub}
    
    `)
}
for (i of obj){
    console.log(`
    name:${i.name} 
    age:${i.age}
    bloodgroup:${i.bloodgroub}`)
}
obj.forEach((data)=>{
    console.log(`
    name:${data.name}
    age:${data.age}
    bloodgroub:${data.bloodgroub}
    
    `)
})