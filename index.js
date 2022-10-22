class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return console.log(this.mascotas.length)
    }
    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }
    getBookNames(){
        const bookNames = []
        this.libros.forEach(libro => {
            bookNames.push(libro.nombre)
        })
        return console.log(bookNames)
    }
}

const usuario1 = new Usuario("Agustina", "Maza", [{nombre: "Harry Potter 4", autor: "J.K. Rowling"}], ["Milo"])
usuario1.getFullName()
usuario1.addMascota("Perla")
usuario1.countMascotas()
usuario1.addBook("La Iliada", "Homero")
usuario1.getBookNames()