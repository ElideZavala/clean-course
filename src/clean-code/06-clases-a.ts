// (() => {
//     // No aplicando el principio de responsabilidad única
//
//     type Gender = "M" | "F";
//
//     class Person {
//         constructor(
//             public name: string,
//             public gender: Gender,
//             public birthDate: Date
//         ) { }
//     }
//
//     class User extends Person {
//         constructor(
//             public email: string,
//             public role: string,
//             public lastAccess: Date,
//             name: string,
//             gender: Gender,
//             birthdate: Date
//         ) {
//             super(
//                 name, gender, birthdate
//             )
//         }
//
//         checkCredentials() {
//             return true;
//         }
//     }
//
//     class UserSettings extends User {
//         constructor() {
//             // @ts-ignore
//             super();
//         }
//     }
// }
//
//
// }) ();
