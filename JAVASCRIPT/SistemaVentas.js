class orden{
    static contadorOdenes = 0;
    static getMAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++orden.contadorOdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get _idOrden(){
        return this._idOrden;
    }

    agregarProductos(){
        if(this._productos.length < orden.getMAX_PRODUCTOS()){
            this._productos.push(producto); //Tenemos 2 tipos de sintaxis: 1
            //this._productos[this._contadorProductosAgregados++] = producto; //segunda sintaxis
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }//Fin del método agregarProducto
}//Fin de la clase Orden