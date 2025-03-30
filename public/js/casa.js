class Casa {
  fs = require('fs-extra'); // importacion de paquete npm llamado "fs-extra" controla la persistencia de archivos     

  constructor() {
    this.casas = []; // el array que manejamos por defecto
  }

  async listar() {
    try {
      this.casas = await this.fs.readJSON('casas.json');
      return this.casas;
    } catch (err) {
      console.error(err);
      return { error: 'Error al leer el archivo JSON' };
    }
  }

}

module.exports = Casa;