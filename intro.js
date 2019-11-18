"use strict";

//programacion orientada o objetos permite crear y utilizar clases
//estandar para depues personalizarlas segun las necesitades del programador

class Autos {
  constructor(marca, modelo, cilindraje, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindraje = cilindraje;
    this.color = color;
  }

  presentacion() {
    return ` Mi auto de los sueños es de marca ${this.marca} , ${this.modelo} , ${this.cilindraje}, ${this.color}`;
  }
}

let autosLujosos = new Autos("KIA", "2020", "2.0", "negro");

console.log(autosLujosos.presentacion());

//herencia
//usar los atributos de una clase creada para alimimentar y complementar los atributos de otra clase a crear

class AutosUsados extends Autos {
  constructor(
    marca,
    modelo,
    cilindraje,
    color,
    kilometraje,
    antiguedad,
    precio
  ) {
    super(marca, modelo, cilindraje, color); //se indican las propiedades que va a heredar de la otra clase
    this.kilometraje = kilometraje;
    this.antiguedad = antiguedad;
    this.precio = precio;
  }

  presentacion() {
    return `${super.presentacion()}` + `pero aun no me pagan y no tengo plata`; //se llama el metodo de la clase Autos
  }
}

let comprarAuto = new AutosUsados(
  "Maserati",
  "2020",
  "2.0",
  "gris",
  "5mil KM",
  "2años",
  "20millones"
);

console.log(comprarAuto.presentacion());
