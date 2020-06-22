// array baru
const citie = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"]
// filter array
const newCity = citie.filter((item, index) => citie.indexOf(item) === index);
// tampilkan array
console.log(newCity);

