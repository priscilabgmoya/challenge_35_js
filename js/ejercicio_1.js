class ListaLibro {
    #listaLibro;
    #listaLibroSinLeer;
    #listaLibroLeidos;
    #libroActual;
    #libroUltimo;
    #libroSiguiente;
    #propietario;
    constructor(propietario) {
        this.#propietario = this.#verificarPropietario(propietario);
        this.#listaLibro = [];
        this.#listaLibroSinLeer = [];
        this.#listaLibroLeidos = [];
        this.#libroActual = [];
        this.#libroUltimo = null;
        this.#libroSiguiente = null;
    }
    #verificarPropietario(propietario) {
        if (propietario == null || propietario.length == 0 || (/^\s+$/.test(propietario))) return alert('Ingrese un nombre Correcto.');
        return propietario;
    }
    agregarLibro(libro) {
        if (libro.getTitulo == null || libro.getGenero == null || libro.getAutor == null || libro.getLeido == null) return alert('Ingrese un libro correcto.');
        (libro.getLeido == true) ? this.#listaLibroLeidos.push(libro) : this.#listaLibroSinLeer.push(libro);
        this.#listaLibro.push(libro);
        return alert('Libro Agregado!');
    }
    libroActual(libro) {
        if (libro.getTitulo == null || libro.getGenero == null || libro.getAutor == null || libro.getLeido == null) return alert('Ingrese un libro correcto.');
        if (this.#listaLibroLeidos.includes(libro)) {
            const confirmacion = confirm(`El libro se encuentra ya leido... \n ¿Desea leerlo de nuevo el libro: ${libro.getTitulo}?`);
            if (confirmacion) {
                this.#listaLibroLeidos = this.#listaLibroLeidos.filter(element => element !== libro);
                this.#listaLibroSinLeer.push(libro); 
                this.#libroActual.push(libro);
                return alert('Libro Agregado a Libro Actual!');
            }
        }
        if (this.#listaLibroSinLeer.includes(libro)) {
            const confirmacion = confirm(`¿Desea leerlo al  libro: ${libro.getTitulo}?`);
            if (confirmacion) {
                this.#libroActual.push(libro);
                return alert('Libro Agregado a Libro Actual!');
            }
        }
        this.#libroActual.push(libro);
        return alert('Libro Agregado a Libro Actual!');
    }
    finalizarLibro(libro) {
        if (libro.getTitulo == null || libro.getGenero == null || libro.getAutor == null || libro.getLeido == null || libro.leido == true) return alert('Ingrese un libro correcto y/o un libro sin leer...');
        if (this.#listaLibroSinLeer.includes(libro)) {
            this.#listaLibroSinLeer = this.#listaLibroSinLeer.filter(element => element !== libro);
            libro.leido = true;
            this.#listaLibroLeidos.push(libro);
            this.#libroUltimo = libro.informacionLibro; 
            return alert('Libro Finalizado!');
        } else {
            return alert("No Pudimos Finalizar El libro Ingresado...");
        }
    }
    siguienteLibro() {
        if (this.#listaLibroLeidos.length !== 0) {
            let pocision = Math.floor(Math.random() * (Math.floor(this.#listaLibroLeidos.length) - Math.ceil(1) + 1) + Math.ceil(1));
            this.#libroSiguiente = this.#listaLibroLeidos[pocision];
            return alert(`Hola ${this.#propietario}! Su proximo libro es: ${this.#libroSiguiente}`)
        } else {
            return alert("No tenemos un proximo libro...");
        }

    }
    get getLibroActual() {
        if (this.#libroActual.length !== 0) {
            let infoLibroActual = `Hola ${this.#propietario}! Sus libros que esta leyendo actualmente son: `;
            this.#libroActual.forEach(libro => infoLibroActual += `\n  - ${libro.informacionLibro}`);
            return alert(infoLibroActual);
        } else {
            return alert("No tiene ningun libro actual...");
        }
    }
    get getUltimoLibro() {
        (this.#libroUltimo !== null) ? alert(`Hola ${this.#propietario}! Su ultimo libro finalizado: ${this.#libroUltimo}`) : alert("No tiene ningun libro finalizado...");
    }
    get getLibroLeidos() {
        if (this.#listaLibroLeidos.length !== 0) {
            let infoLibroActual = `Hola ${this.#propietario}! Sus libros que esta leyendo actualmente son: `;
            this.#listaLibroLeidos.forEach(libro => infoLibroActual += `\n  - ${libro.informacionLibro}`);
            return alert(infoLibroActual);
        } else {
            return alert("No tiene ningun libro leido...");
        }
    }
    get getLibroSinLeer() {
        if (this.#listaLibroSinLeer.length !== 0) {
            let infoLibroActual = `Hola ${this.#propietario}! Sus libros que esta leyendo actualmente son: `;
            this.#listaLibroSinLeer.forEach(libro => infoLibroActual += `\n  - ${libro.informacionLibro}`);
            return alert(infoLibroActual);
        } else {
            return alert("No tiene ningun libro sin leer...");
        }
    }
}

class Libro {
    #titulo;
    #genero;
    #autor;
    #leido;
    constructor(titulo, genero, autor, leido) {
        this.#titulo = titulo.toLowerCase();
        this.#genero = genero.toLowerCase();
        this.#autor = autor.toLowerCase();
        this.#leido = leido;
    }
    get getTitulo() {
        return this.#titulo;
    }
    get getGenero() {
        return this.#genero;
    }
    get getAutor() {
        return this.#autor
    }
    get getLeido() {
        return this.#leido;
    }
    get informacionLibro(){
        return `Libro: ${this.getTitulo} - Genero: ${this.getGenero} - Autor: ${this.getAutor}`;
    }
}
const principito = new Libro("principito","literaltura infantil", "Antoine de Saint-Exupéry", false),
         fisicaII = new Libro("Fisica Universitaria V2", "ciencia","Sears-Zemansky",false), 
         umlYpatrones = new Libro("uml y patrones V2", "programacion y lenguaje", "Craig Larman", true),
         ingenieriaDeSoftware = new Libro("ingeniería de software ed.9", "programacion y lenguaje", "Ian Somerville", false); 

let listaPriscila = new ListaLibro('priscila');
console.log(listaPriscila); 