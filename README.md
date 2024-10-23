# API de Franquicias

Este proyecto es una API REST para manejar una lista de franquicias, sucursales y productos. Está desarrollado en Node.js utilizando Express y Sequelize para la gestión de datos.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Endpoints](#endpoints)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Requisitos

- Node.js (versión 14 o superior)
- MySQL o el sistema de base de datos de tu elección
- npm (Node Package Manager)

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Grimaniel/nequi_Grimaniel.git
   cd franchise-api

Instala las dependencias:
   npm install
Configura la base de datos:
Modifica el archivo config/config.json con tus credenciales de base de datos:
{
  "development": {
    "username": "root",
    "password": "",
    "database": "franchise_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
Ejecución del Proyecto
npm start

Endpoints
Aquí están los endpoints disponibles en la API:

Agregar nueva franquicia: POST /api/franchises
Agregar sucursal a una franquicia: POST /api/franchises/:franchiseId/branches
Agregar producto a una sucursal: POST /api/franchises/:franchiseId/branches/:branchId/products
Eliminar producto de una sucursal: DELETE /api/franchises/:franchiseId/branches/:branchId/products/:productId
Modificar stock de un producto: PUT /api/franchises/:franchiseId/branches/:branchId/products/:productId/stock
Mostrar el producto con más stock por sucursal: GET /api/franchises/:franchiseId/branches/products/max-stock

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor abre un issue o pull request.
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.


### Notas sobre el Archivo `README.md`:

1. **Reemplaza el enlace del repositorio**: Asegúrate de actualizar la URL en la sección de instalación con el enlace correcto a tu repositorio.
2. **Modifica la Configuración de la Base de Datos**: Cambia las credenciales de la base de datos en el archivo de configuración según sea necesario.
3. **Ajusta los Endpoints**: Si hay algún endpoint adicional o cambios en los existentes, actualiza la sección de endpoints en consecuencia.

Este archivo `README.md` debería proporcionar una guía clara sobre cómo desplegar el proyecto localmente. Si necesitas más detalles o quieres agregar secciones adicionales, házmelo saber.


