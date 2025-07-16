Node.js MongoDB User API (Prueba)
Esta es una pequeña prueba hecha en Node.js que simula la gestión de usuarios usando MongoDB. La conexión a MongoDB se establece, pero no se utiliza una base de datos real con datos persistentes.

Tecnologías usadas
Node.js

Express

Mongoose (para conexión a MongoDB)

Thunder Client (para pruebas de API)

Descripción
La aplicación se conecta a MongoDB (local o remota) a través de Mongoose, pero la base de datos utilizada es solo una simulación para propósitos de prueba. No hay datos persistentes almacenados ni una base real configurada.

Puedes agregar y listar usuarios mediante peticiones HTTP usando Thunder Client u otra herramienta similar.

Instalación
bash
Copiar
Editar
npm install
Variables de entorno
Configura tu variable de entorno MONGODB_URI para la conexión a MongoDB si quieres conectarte a una base de datos remota, o se usará la base local por defecto:

bash
Copiar
Editar
MONGODB_URI=mongodb://localhost:27017/mydatabase
Ejecutar
bash
Copiar
Editar
npm start
Endpoints
POST /users — Agregar un nuevo usuario

GET /users — Listar usuarios
