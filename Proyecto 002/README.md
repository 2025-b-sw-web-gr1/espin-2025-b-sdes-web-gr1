

# 📘 Proyecto 002 – Documentación de Endpoints con Swagger

## 📌 Descripción

Este proyecto consiste en la documentación de una API REST desarrollada con **NestJS**, utilizando una arquitectura basada en controladores y servicios.
La API gestiona **equipos (Teams)** y **jugadores (Players)** con una relación **uno a muchos**, e incluye:

* Documentación automática con **Swagger (OpenAPI)** integrada en el backend
* Documentación manual en formato **YAML**
* Pruebas de endpoints realizadas con **Bruno**

---

## 📂 Estructura del Proyecto

```
Project 001/
├── backend/              # API NestJS con Swagger
├── Bruno/                # Pruebas de endpoints
│   ├── teams/
│   └── players/
├── swagger/
│   └── football-api.yaml # Documentación Swagger manual
└── README.md
```

---

## ⚙️ Instalación

### 1️⃣ Entrar al backend

```bash
cd backend
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

---

## ▶️ Ejecución del Servidor

```bash
npm run start:dev
```

El servidor se ejecuta en:

```
http://localhost:3000
```

---

## 📖 Documentación con Swagger

La documentación automática de la API está disponible en:

👉 **[http://localhost:3000/api](http://localhost:3000/api)**

Desde Swagger se pueden:

* Visualizar todos los endpoints
* Ver los DTOs y ejemplos de datos
* Probar las peticiones directamente desde el navegador

---

## 🔗 Endpoints Documentados

### Teams

* GET `/teams`
* GET `/teams/:id`
* POST `/teams`
* PUT `/teams/:id`
* DELETE `/teams/:id`

### Players

* GET `/players`
* GET `/players/:id`
* POST `/players`
* PUT `/players/:id`
* DELETE `/players/:id`

### Relación

* GET `/teams/:id/players`

---

## 🧪 Pruebas de Endpoints

Las pruebas de los endpoints se realizaron utilizando **Bruno**, organizadas por recursos (`teams` y `players`) dentro de la carpeta `Bruno/`.

---

## 🛠️ Tecnologías Utilizadas

* NestJS
* TypeScript
* Swagger (OpenAPI)
* Bruno
* Node.js

---

## ✅ Observaciones

Este proyecto cumple con los criterios solicitados:

* Swagger configurado en `main.ts`
* Endpoints documentados con decoradores
* DTOs documentados
* Documentación accesible desde `/api`
* README claro y estructurado

---


