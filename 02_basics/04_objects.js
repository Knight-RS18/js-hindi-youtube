// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);


/////++++++++ some api talk +++++++++++///////


// {
//     "name": "hitesh",
//    " coursename": "js in hindi",
//     "price": 'free"
// }

[
    {},
    {},
    {}
]



// https://randomuser.me/api/

// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Roy",
//           "last": "Kunze"
//         },
//         "location": {
//           "street": {
//             "number": 4695,
//             "name": "Grüner Weg"
//           },
//           "city": "Weinsberg",
//           "state": "Brandenburg",
//           "country": "Germany",
//           "postcode": 53385,
//           "coordinates": {
//             "latitude": "-52.3745",
//             "longitude": "-103.5952"
//           },
//           "timezone": {
//             "offset": "+11:00",
//             "description": "Magadan, Solomon Islands, New Caledonia"
//           }
//         },
//         "email": "roy.kunze@example.com",
//         "login": {
//           "uuid": "d7f76e37-74ba-459a-82bd-3eb248eecbe2",
//           "username": "sadsnake277",
//           "password": "brownie",
//           "salt": "ErTOxKNG",
//           "md5": "ecafe0547ae8ab66bba1013304d8305e",
//           "sha1": "5efd8ff1af97496810c64da69b6630cc0ab80257",
//           "sha256": "3f91d2e7728194ec384047859253080021a7215178b975d1079d7dcc31f4ce2d"
//         },
//         "dob": {
//           "date": "1994-07-09T03:24:53.995Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2016-10-24T01:54:12.332Z",
//           "age": 8
//         },
//         "phone": "0358-9779170",
//         "cell": "0176-8824068",
//         "id": {
//           "name": "SVNR",
//           "value": "15 080794 K 473"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/14.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
//         },
//         "nat": "DE"
//       }
//     ],
//     "info": {
//       "seed": "fac13747e993d938",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }
