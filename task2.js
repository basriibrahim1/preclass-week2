// 1.  filter() merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu. Method ini mengembalikan array baru yang berisi elemen yang sesuai dengan kriteria yang dicari atau lulus pengujian fungsi callback.


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function bilanganPrimer(num) {
    for(let i = 2; num > i; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1
}

console.log(array.filter(bilanganPrimer))


// 2. Metoda push() menambahkan sebuah item baru di akhir sebuah array dan mengembalikan panjang array yang baru.


const number = [1,2,3]
const newNumber = [4,5,6]

number.push(...newNumber)

console.log(number)


// 3. pop() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array. Method ini mengubah panjang array dan mengembalikan elemen yang dihapus.


number.pop()

console.log(number)


// 4. reduce() merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya. Setelah menjalankan fungsi callback untuk semua elemen array, method ini menghasilkan nilai tunggal.



const angka = [10, 30, 40, 20]

const reducer = angka.reduce((firstValue, resultValue) => {

    console.log(`${firstValue} + ${resultValue} = ${firstValue + resultValue}` )


    return firstValue + resultValue
})

console.log({reducer})