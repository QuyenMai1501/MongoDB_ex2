const { MongoClient } = require("mongodb");

async function runGetStarted() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        const database = client.db("course_management_db");
        const courses = database.collection("courses");

        //NOTE: THÊM 1 KHÓA HỌC
        // const course = {
        //     "courseId": 101,
        //     "courseName": "Database Systems",
        //     "credits": 3,
        //     "instructor": {
        //         "name": "Dr. Nguyen Van B",
        //         "email": "nguyenvanb@university.edu"
        //     },
        //     "students": [
        //         {
        //             "studentId": 1,
        //             "name": "Tran Van A",
        //             "score": 8.5
        //         },
        //         {
        //             "studentId": 2,
        //             "name": "Le Thi B",
        //             "score": 7.0
        //         }
        //     ],
        //     "startDate": "2024-09-01",
        //     "isActive": true
        // }

        // await courses.insertOne(course);

        // console.log("Course inserted successfull!");


        //NOTE: THÊM NHIỀU KHÓA HỌC
        // const array_courses = [
        //     {
        //         courseId: 101,
        //         courseName: "Database Systems",
        //         category: "Computer Science",
        //         credits: 3,
        //         instructor: {
        //             name: "Dr. Nguyen Van B",
        //             email: "nguyenvanb@university.edu"
        //         },
        //         students: [
        //             { studentId: 1, name: "Nguyen Van A", score: 8.5 },
        //             { studentId: 3, name: "Phạm Ngọc", score: 7.8 },
        //             { studentId: 7, name: "Huỳnh Phong", score: 9.2 },
        //             { studentId: 14, name: "Phạm Thị Phong", score: 6.5 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 102,
        //         courseName: "Web Development",
        //         category: "Computer Science",
        //         credits: 4,
        //         instructor: {
        //             name: "Prof. Tran Thi C",
        //             email: "tranthic@university.edu"
        //         },
        //         students: [
        //             { studentId: 2, name: "Hoàng Thị Việt", score: 7.5 },
        //             { studentId: 5, name: "Nguyễn Thị Quân", score: 8.9 },
        //             { studentId: 10, name: "Lê Mai", score: 9.0 },
        //             { studentId: 15, name: "Dương Nam", score: 6.8 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 103,
        //         courseName: "Mobile App Development",
        //         category: "Computer Science",
        //         credits: 3,
        //         instructor: {
        //             name: "Dr. Le Van D",
        //             email: "levand@university.edu"
        //         },
        //         students: [
        //             { studentId: 4, name: "Hoàng Thị Thảo", score: 8.2 },
        //             { studentId: 8, name: "Huỳnh Lan", score: 7.3 },
        //             { studentId: 11, name: "Huỳnh Nam", score: 9.5 },
        //             { studentId: 16, name: "Đặng Ngọc", score: 6.0 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 104,
        //         courseName: "Marketing Fundamentals",
        //         category: "Business",
        //         credits: 3,
        //         instructor: {
        //             name: "Ms. Pham Thi E",
        //             email: "phamthie@university.edu"
        //         },
        //         students: [
        //             { studentId: 6, name: "Đỗ Thị Linh", score: 7.7 },
        //             { studentId: 9, name: "Lê Hương", score: 8.4 },
        //             { studentId: 12, name: "Phạm An", score: 9.1 },
        //             { studentId: 17, name: "Huỳnh Mai", score: 6.9 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 105,
        //         courseName: "Financial Accounting",
        //         category: "Business",
        //         credits: 4,
        //         instructor: {
        //             name: "Dr. Hoang Van F",
        //             email: "hoangvanf@university.edu"
        //         },
        //         students: [
        //             { studentId: 13, name: "Bùi Long", score: 7.0 },
        //             { studentId: 18, name: "Hồ Phong", score: 8.6 },
        //             { studentId: 19, name: "Nguyễn Thị Khang", score: 9.3 },
        //             { studentId: 20, name: "Lê Thị Dũng", score: 6.4 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 106,
        //         courseName: "Business Analytics",
        //         category: "Business",
        //         credits: 3,
        //         instructor: {
        //             name: "Prof. Nguyen Thi G",
        //             email: "nguyenthig@university.edu"
        //         },
        //         students: [
        //             { studentId: 1, name: "Nguyen Van A", score: 8.8 },
        //             { studentId: 5, name: "Nguyễn Thị Quân", score: 9.4 },
        //             { studentId: 10, name: "Lê Mai", score: 7.2 },
        //             { studentId: 14, name: "Phạm Thị Phong", score: 6.7 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 107,
        //         courseName: "Graphic Design Fundamentals",
        //         category: "Design",
        //         credits: 2,
        //         instructor: {
        //             name: "Ms. Vu Thi H",
        //             email: "vuthih@university.edu"
        //         },
        //         students: [
        //             { studentId: 2, name: "Hoàng Thị Việt", score: 8.0 },
        //             { studentId: 7, name: "Huỳnh Phong", score: 7.9 },
        //             { studentId: 12, name: "Phạm An", score: 9.0 },
        //             { studentId: 16, name: "Đặng Ngọc", score: 6.3 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 108,
        //         courseName: "UI/UX Design",
        //         category: "Design",
        //         credits: 4,
        //         instructor: {
        //             name: "Dr. Dang Van I",
        //             email: "dangvani@university.edu"
        //         },
        //         students: [
        //             { studentId: 4, name: "Hoàng Thị Thảo", score: 8.7 },
        //             { studentId: 8, name: "Huỳnh Lan", score: 7.6 },
        //             { studentId: 11, name: "Huỳnh Nam", score: 9.2 },
        //             { studentId: 18, name: "Hồ Phong", score: 6.5 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 109,
        //         courseName: "Motion Graphics",
        //         category: "Design",
        //         credits: 3,
        //         instructor: {
        //             name: "Ms. Tran Thi K",
        //             email: "tranthik@university.edu"
        //         },
        //         students: [
        //             { studentId: 3, name: "Phạm Ngọc", score: 8.3 },
        //             { studentId: 9, name: "Lê Hương", score: 7.4 },
        //             { studentId: 15, name: "Dương Nam", score: 9.1 },
        //             { studentId: 20, name: "Lê Thị Dũng", score: 6.8 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     },
        //     {
        //         courseId: 110,
        //         courseName: "Data Structures & Algorithms",
        //         category: "Computer Science",
        //         credits: 5,
        //         instructor: {
        //             name: "Prof. Le Van L",
        //             email: "levanl@university.edu"
        //         },
        //         students: [
        //             { studentId: 6, name: "Đỗ Thị Linh", score: 8.1 },
        //             { studentId: 13, name: "Bùi Long", score: 7.5 },
        //             { studentId: 17, name: "Huỳnh Mai", score: 9.4 },
        //             { studentId: 19, name: "Nguyễn Thị Khang", score: 6.9 }
        //         ],
        //         startDate: "2024-09-01",
        //         isActive: true
        //     }
        // ];

        // await courses.insertMany(array_courses);
        // console.log("Insert Many Doc Successfull");

        //NOTE: LẤY TẤT CẢ KHÓA HỌC
        /*const course = courses.find();
        for await (const doc of course) {
            console.log(doc);
        } */

        
        //NOTE: TÌM KHÓA HỌC CÓ COURSEID = 102
        /* const searchCourseId = await courses.findOne({courseId: 102});
        console.log(searchCourseId); */


        //NOTE: TÌM KHÓA HỌC CÓ CATEGORY: "COMPUTER SCIENCE"
        /* const category = await courses.find({category: "Computer Science"});
        for await (const doc of category) {
            console.log(doc);
        } */

        //NOTE: TÌM KHÓA HỌC CÓ CREDITS >= 4
        /* const credit = await courses.find({credits: {$gte: 4}});
        for await (const doc of credit) {
            console.log(doc);
        } */


        //NOTE: TÌM KHÓA HỌC CÓ ISACTIVE = TRUE
        /* const isActive = await courses.find({isActive: true});
        for await (const doc of isActive) {
            console.log(doc);
        } */

        //NOTE: TÌM KHÓA HỌC CÓ SINH VIÊN CÓ ĐIỂM >= 8
        /* const grade = await courses.find({"students.score": {$gte: 8}});
        for await (const doc of grade) {
            console.log(doc);
        } */

        //NOTE: TÌM CÁC KHÓA HỌC CÓ SINH VIÊN TRÊN TRAN VAN A
        /* const name = await courses.find({"students.name": "Tran Van A"});
        for await (const doc of name) {
            console.log(doc);
        } */

        //NOTE: CẬP NHẬT CREADITS CỦA KHÓA HỌC CÓ COURSEID = 101 THANH 4
        /* await courses.updateOne({courseId: 101}, {$set: {credits: 4}});
        const credits1 = await courses.findOne({courseId: 101});
        console.log(credits1); */

        //NOTE: ĐỔI ISACTIVE THANH CHO TẤT CẢ CÁC KHÓA HỌC CÓ STARTDATE TRƯỚC 2024
        /* await courses.updateMany({startDate: {$lt: "2024-10-01"}}, {$set: {isActive: false}});
        const isAtive = await courses.find({startDate: {$lt: "2024-10-01"}});
        for await (const doc of isAtive) {
            console.log(doc);
        } */

        //NOTE: THÊM 1 FIELD MỚI CHO TẤT CẢ KHÓA HỌC: UPDATEAT
        /* await courses.updateMany({}, {$set: {"updateAt": new Date()}});
        const updateAt = await courses.find();
        for await (const doc of updateAt) {
            console.log(doc);
        } */

        //NOTE: CẬP NHẬT ĐIỂM CẢU SINH CÓ STUDENTID = 8 TRONG KHÓA HỌC COURSEID = 103 THÀNH 9.0
        /* await courses.updateOne({courseId: 103, "students.studentId": 8}, {$set: {"students.$.score": 9.0}});
        const updateScore = await courses.findOne({courseId: 103});
        console.log(updateScore); */

        //NOTE: XÓA CÁC KHÓA HỌC CÓ COURSEID = 105
        /* await courses.deleteOne({courseId: 105});
        console.log(await courses.findOne({courseId: 105})); */

        //NOTE: XÓA TẤT CẢ CÁC KHÓA HỌC KHÔNG HOẠT ĐỘNG
        // await courses.deleteMany({isActive: false});
        
        //NOTE: XÓA CÁC KHÓA HỌC KHÔNG CÓ SINH VIÊN NÀO:
        await courses.deleteMany({students: {$size: 0}});

        //NOTE: XÓA TOÀN BỘ COLLECTION
        await courses.drop();

    } finally {
        await client.close()
    }
}

runGetStarted().catch(console.dir);