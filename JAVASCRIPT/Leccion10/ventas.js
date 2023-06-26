class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get id_Producto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return '|id: '+this._idProducto+ '| nombre: '+ this._nombre+ '| precio: '+this._precio+'|';
    }


}

class Orden{
    static contadorOrdenes = 0;
    static MAX_PRODUCTOS = 5;
    static _productos = [];

    constructor(){
        if (Orden._productos.length <= Orden.MAX_PRODUCTOS){
            this._idOrden = ++this.contadorOrdenes;
            this._contadorProductosAgregados = this.contadorProductos;
            this.total = 0;
        }

         
    }

    agregarProducto(nombre, precio){
        Orden._productos.push(new Producto(nombre, precio));
    }

    calcularTotal() {
        this.total = 0; // Asegurarse de que this.total esté inicializado en 0 antes de sumar los precios
      
        Orden._productos.forEach(elemento => {
          this.total += elemento.precio;
        });
      
        console.log(this.total);
      }
      

    mostrarOrden(){
        Orden._productos.forEach(element =>{
            console.log(element)
        });
    }
}


let orden1 = new Orden();
orden1.agregarProducto('pan', 50);
orden1.agregarProducto('fideos', 200);
orden1.calcularTotal();
orden1.mostrarOrden();
