class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super.toString(nombre, apellido, edad);
        //constructor padre ↑
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fecharegistro(){
        return this._fechaRegistro;
    }
    set fecharegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    
    toString(){
        // primero to string padre ↓
        return `
        ${super.toString()} 
        ${this._idCliente} 
        ${this._fechaRegistro}`;
    }

}