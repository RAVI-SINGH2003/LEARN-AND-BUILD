const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CollegeDB')
.then(()=>{
    console.log('MonogoDb connected')
})
.catch((err)=>{
    console.log(err);
})

//schema 
const student_schema = new mongoose.Schema({
    name :String,
    marks :Number
});

//collection 

const Student = mongoose.model('Student',student_schema);

//insertion method -1
// Student.insertMany([
//   {
//     name : 'ravi singh',
//     marks :100
//   },
//   {
//     name :'saloni singh',
//     marks :50
//   },
//   {
//     name :'dk singh',
//     marks :78
//   }]
// )
// .then((res)=>{
//     console.log('data inserted',res)
// })
// .catch((err)=>{
//     console.log(err);
// })

//insertion method 2
// const student1 = new Student({
//     name :'akshay',
//     marks :100000000000
// })

// student1.save((err,res)=>{
//     if(err) console.log(err);
//     else console.log(res)
// })




// insertion method -3
// const adder = async()=>{
//     const student = new Student({
//         name :'ravi',
//         marks :100000

//     })
//     await student.save()
// }
// adder();

// insertion method -4
// const adder = async()=>{
//     const student = await Student.create({
//         name :'ravi',
//         marks :100000000000

//     })
// }
// adder();


//----------------------- finding data-------------

// const adder = async()=>{
//     const students = await Student.find({name : 'ravi singh'});
//     console.log(students);

// }
// adder();


