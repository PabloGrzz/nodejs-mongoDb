# Proyecto Node.js - Prueba con MongoDB (Simulada)

Este es un proyecto simple hecho en Node.js que simula operaciones básicas con MongoDB para **agregar** y **listar usuarios**.  
No utiliza una base de datos real; las pruebas se realizan usando Thunder Client para enviar peticiones HTTP.

---

## Tecnologías usadas

- Node.js  
- Express.js  
- MongoDB (simulado)  
- Thunder Client (para pruebas de API)  

---

## Descripción

Este proyecto contiene una API REST básica que permite:

- **Agregar usuarios** (POST)  
- **Listar usuarios** (GET)  

Aunque la aplicación se conecta a MongoDB (local o remota) usando Mongoose, no se utiliza una base de datos real con datos persistentes; los datos se manejan en memoria para facilitar las pruebas.

---

## Instalación

1. Clona el repositorio:  
   ```bash
   git clone <URL-del-repo>
Instala las dependencias:

bash
Copiar
Editar
npm install
Variables de entorno
Configura la variable MONGODB_URI si quieres conectar a una base remota. Por defecto, se conecta a MongoDB local en:
mongodb://localhost:27017/mydatabase

Ejemplo:

bash
Copiar
Editar
MONGODB_URI=mongodb://localhost:27017/mydatabase
Ejecutar
bash
Copiar
Editar
npm start

Endpoints:

POST /users — Agregar un nuevo usuario

GET /users — Listar usuarios
