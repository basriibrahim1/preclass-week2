function biodata() {
    const dataDiri =
    {
        name: "Basri Ibrahim",
        email: "basriibrahim67067@gmail.com",
        address: {
            city: "Kota Cimahi",
            streets: "Kp. Sukamaju RT 03 RW 02 No.162",
            postalCode: "40522"
        },
        isMarried: false,
        hobbies: ["Gaming", "Hiking", "Build Computer", "Playing Guitar"]
    }


    return dataDiri

}

console.log(biodata())



const ganjilGenap = (x) => {
    for(let i = 1; i <= x; i++) {
        if(i % 2 === 0) {
            console.log(`${i} adalah bilangan genap`) 
        } else {
            console.log(`${i} adalah bilangan ganjil`)
        }
    }
}

ganjilGenap(5)


const printSegitiga = (x) => {
    for(let i = 1; i <= x; i++) {
        let baris = '';
        for(let j = 1; j <= i; j++) {
            baris += i;
        }
        console.log(baris)
    }
}

printSegitiga(5)
