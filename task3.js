let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational:
    [
        {
        priode: "2013-2016",
        school: "Kalam kudu High School",
        major: "-"
        }
    ],
    phone: {
        primary : "0812312323",
        secondary: "0082342343"
    }
}


let newEducation = {
    priode: "2016-2020",
    school: "State University of Jakarta",
    major: "Accountancy"
}

// ---------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------


// A. Ubahlah data tersebut menggunakan spread operator menjadi:
// name: nama anda 
// phone: no hp anda

let updateData = {...data, name:"Basri Ibrahim", phone:{primary:"0895630310257", secondary: "081378791525"}}

// console.log(updateData)


// ---------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------



// B. Ambilah data “primary” dan “secondary” tersebut menggunakan
// ● tanpa menggunakaan destructuring

var primary = updateData.phone.primary
var secondary = updateData.phone.secondary

// console.log(primary, secondary)


// ● menggunakan destructuring

var {primary, secondary} = updateData.phone

// console.log(primary, secondary)


// ---------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------



// C . gabungkan data dengan newEducation menggunakan spread operator

let updatedData = {...updateData, educational: [...updateData.educational, newEducation]}

let finalData = {...updatedData, name: updateData.name, educational: updatedData.educational, phone: updatedData.phone.primary}

console.log(finalData)