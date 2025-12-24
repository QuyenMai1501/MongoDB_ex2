// const { MongoClient } = require("mongodb");

// async function runGetStarted() {
//   // Replace the uri string with your connection string
//   const uri = "mongodb://localhost:27017";
//   const client = new MongoClient(uri);

//   try {
//     const database = client.db("student_management_ab");
//     const students = database.collection("students");

//     // Queries for a movie that has a title value of 'Back to the Future'
//     // const student = {
//     //   id: 1,
//     //   name: "Nguyen Van A",
//     //   age: 20,
//     //   address: "Hà Nội",
//     //   major: "Computer Science",
//     // };
//     // await students.insertOne(student);

//     // console.log("Student inserted successfull!");
    
//     const cursor = students.find({
//         $or: [
//             {
//                 age: { $gte: 19, $lte: 21}
//             },
//             {
//                 major: {
//                     $eq: "Computer Network"
//                 }
//             }
//         ]
//     });

//     for await (const doc of cursor) {
//         console.log(doc);
//     }

// //     const array_students = [
// //     {
// //         id: 2,
// //         name: "Hoàng Thị Việt",
// //         age: 18,
// //         address: "Hà Nội",
// //         major: "Electrical Engineering"
// //     },
// //     {
// //         id: 3,
// //         name: "Phạm Ngọc",
// //         age: 24,
// //         address: "Vũng Tàu",
// //         major: "Electrical Engineering"
// //     },
// //     {
// //         id: 4,
// //         name: "Hoàng Thị Thảo",
// //         age: 18,
// //         address: "Cần Thơ",
// //         major: "Electrical Engineering"
// //     },
// //     {
// //         id: 5,
// //         name: "Nguyễn Thị Quân",
// //         age: 23,
// //         address: "Cần Thơ",
// //         major: "Business Administration"
// //     },
// //     {
// //         id: 6,
// //         name: "Đỗ Thị Linh",
// //         age: 25,
// //         address: "Quy Nhơn",
// //         major: "Mechanical Engineering"
// //     },
// //     {
// //         id: 7,
// //         name: "Huỳnh Phong",
// //         age: 18,
// //         address: "Nha Trang",
// //         major: "Chemistry"
// //     },
// //     {
// //         id: 8,
// //         name: "Huỳnh Lan",
// //         age: 21,
// //         address: "Huế",
// //         major: "Psychology"
// //     },
// //     {
// //         id: 9,
// //         name: "Lê Hương",
// //         age: 19,
// //         address: "Huế",
// //         major: "Economics"
// //     },
// //     {
// //         id: 10,
// //         name: "Lê Mai",
// //         age: 22,
// //         address: "Hà Nội",
// //         major: "Law"
// //     },
// //     {
// //         id: 11,
// //         name: "Huỳnh Nam",
// //         age: 19,
// //         address: "Pleiku",
// //         major: "Chemistry"
// //     },
// //     {
// //         id: 12,
// //         name: "Phạm An",
// //         age: 20,
// //         address: "Buôn Ma Thuột",
// //         major: "Psychology"
// //     },
// //     {
// //         id: 13,
// //         name: "Bùi Long",
// //         age: 25,
// //         address: "Hà Nội",
// //         major: "Literature"
// //     },
// //     {
// //         id: 14,
// //         name: "Phạm Thị Phong",
// //         age: 18,
// //         address: "Biên Hòa",
// //         major: "Electrical Engineering"
// //     },
// //     {
// //         id: 15,
// //         name: "Dương Nam",
// //         age: 20,
// //         address: "Thái Nguyên",
// //         major: "Mechanical Engineering"
// //     },
// //     {
// //         id: 16,
// //         name: "Đặng Ngọc",
// //         age: 19,
// //         address: "Biên Hòa",
// //         major: "Electrical Engineering"
// //     },
// //     {
// //         id: 17,
// //         name: "Huỳnh Mai",
// //         age: 25,
// //         address: "Đà Nẵng",
// //         major: "Mechanical Engineering"
// //     },
// //     {
// //         id: 18,
// //         name: "Hồ Phong",
// //         age: 18,
// //         address: "Cần Thơ",
// //         major: "Chemistry"
// //     },
// //     {
// //         id: 19,
// //         name: "Nguyễn Thị Khang",
// //         age: 25,
// //         address: "Vũng Tàu",
// //         major: "Law"
// //     },
// //     {
// //         id: 20,
// //         name: "Lê Thị Dũng",
// //         age: 21,
// //         address: "Buôn Ma Thuột",
// //         major: "Psychology"
// //     }
// // ];
//     // await students.insertMany(array_students);
//     // console.log("Add 20 student");
//   } finally {
//     await client.close();
//   }
// }
// runGetStarted().catch(console.dir);

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 9999;
const HOST = "localhost"

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db('student_management_ab');
const studentsCollection = db.collection('students');

app.use(express.json());

app.get("/api/v1/students", async (req, res) => {
    const cursor = studentsCollection.find();

    const students = [];

    for await (const doc of cursor) {
        students.push(doc);
    }

    res.status(200).json({
        data: students
    });
});

app.post("/api/v1/students", async (req, res) => {
    const body = req.body;
    const doc = await studentsCollection.insertOne(body);

    res.status(201).json({
        data: doc
    })
});

app.put("/api/v1/students/:id", async(req, res) => {
    const id = Number(req.params.id);
    const {name, age, address, major } = req.body;
    const updates = {};

    if (name !== undefined) updates.name = name;
    if (age !== undefined) updates.age = age;
    if (address !== undefined) updates.address = address;
    if (major !== undefined) updates.major = major;
    
    await studentsCollection.updateOne({id: id}, {$set: updates});

    res.status(200).json({
        data: updateStudent
    });
});

app.delete("/api/v1/students/:id", async(req, res) => {
    const id = Number(req.params.id);
    const d = await studentsCollection.deleteOne({id: id});
    res.status(204).json({
        data: d
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running`);
});

