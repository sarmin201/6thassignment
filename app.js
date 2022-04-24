
const  students=[
     ['Sarmin','12',18,12,'Female','Mirpur',3000] ,
     ['Naem','10',15,10,'Male','Mirpur',2000] ,
     ['Sumi','15',15,12,'Female','Dhanmondi',2000] ,
     ['Istiak','20',12,8,'Male','Badda',1500] ,
     ['Jahid','25',18,12,'Male','Mirpur',3000] ,
     ['Ria','8',15,10,'Female','Dhanmondi',2000] ,
     ['Jakaria','5',14,9,'Male','Mirpur',1500] ,
     ['Kayes','2',10,6,'Male','Banasree',1500] ,
     ['Shimu','1',10,6,'Female','Badda',1500] ,
     ['Sameeha','5',15,10,'Female','Banasree',2000] ,
     ['Polash','23',18,12,'Male','Mirpur',3000] ,
     ['jim','34',15,10,'Female','Mirpur',2000] ,
     ['Rakib','30',15,12,'Male','Dhanmondi',2000] ,
     ['Israt','35',12,8,'Female','Badda',1500] ,
     ['Mona','22',18,12,'Female','Mirpur',3000] ,
     ['Abir','7',15,10,'Male','Dhanmondi',2000] ,
     ['Ameed','13',14,9,'Male','Mirpur',1500] ,
     ['Rasna','4',10,6,'Female','Banasree',1500] ,
     ['Surovi','40',10,6,'Female','Badda',1500] ,
     ['Jewel','1',15,10,'Male','Banasree',2000] ,
     ['Pinky','5',16,11,'Female','Uttara',3000] ,
     ['Mehedi','8',16,11,'Male','Mirpur',2000] ,
     ['Papia','36',20,14,'Female','Dhanmondi',4000] ,
     ['Sanjoy','12',20,14,'Male','Badda',1500] ,
     ['Ritu','2',18,12,'Female','Mirpur',3000] ,
     ['Hamim','21',14,9,'Male','Banasree',1500] ,
     ['Asif',3,14,9,'Male','Banasree',1500]  ,
     ['Hamima','2',16,11,'Female','Uttara',3000] ,
     ['Sadia','11',20,14,'Female','Ghulsan',4000] ,
     ['Ajom','19',20,14,'Male','Banasree',2000] ,

    ]

    let totalFees=0;

    students.forEach((data, index)=>{

if(data[4]==="Female")
{

console.log(`Student Name: ${data[0]}`);

}
 })

 students.forEach((data, index)=>{

    if(data[5]==="Mirpur" || data[5]==="Uttara"|| data[5]==="Banasree" || data[5]==="Ghulsan" || data[5]==="Dhanmondi" || data[5]==="Badda")
    {
    
    console.log(`
    Student Name: ${data[0]},
    Student location: ${data[5]}
    
    `);
    
    } })
 
    students.forEach((data,index)=>{
if(data[2]>=10 && data[2]<=25){

console .log(`Student Name: ${data[0]} 
 student age :${data[2]}
 
 `);

} })

students.forEach((data, index)=>{

if(data[3]===6 || data[3]===8 || data[3]===9 || data[3]===10 || data[3]===11 || data[3]===12 || data[3]===14 || data[3]===6 || data[3]===6){

console.log(` Student Name : ${data[0]},
class number:${data[3]}
`);

}})

students.forEach((data,index)=>{

console.log (`Student Name : ${data[0]}
Admission fees:${data[6]}`);
    totalFees += data[6];
})
console.log(`Total admission fees:${totalFees}`);