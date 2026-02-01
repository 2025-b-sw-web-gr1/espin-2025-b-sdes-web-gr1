<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
# Examen 002 — NestJS (Proyecto de evaluación) 🔧

**Descripción breve** 💡

`Examen 002` es un proyecto de evaluación basado en **NestJS** que sirve para medir conocimientos prácticos en desarrollo de APIs con TypeScript. Incluye un módulo `teams` con controladores, servicios y pruebas (unitarias y e2e) que permiten comprobar rutas, lógica y cobertura de tests.

---

## 📦 Contenido del repositorio

- `src/` — código fuente de la aplicación
  - `main.ts` — arranque de la aplicación
  - `app.module.ts`, `app.controller.ts`, `app.service.ts` — estructura base de NestJS
  - `teams/` — módulo con `teams.controller.ts`, `teams.service.ts` y sus pruebas (`*.spec.ts`)
- `test/` — pruebas end-to-end (e2e)
- Archivos de configuración: `tsconfig.json`, `tsconfig.build.json`, `eslint.config.mjs`, `package.json`

---

## 🎯 Objetivos de evaluación

- Implementación correcta de un módulo en NestJS (`teams`).
- Manejo de rutas y respuestas HTTP (GET/POST/PUT/DELETE).
- Separación de responsabilidades (Controller / Service).
- Cobertura mínima de pruebas unitarias y e2e.
- Uso de ESLint y buenas prácticas de TypeScript.

---

## 🧰 Requisitos y configuración

1. Node.js 16+ (recomendado)
2. Instalar dependencias:

```bash
npm install
```

3. Comandos útiles:

- `npm run start` — ejecutar en modo producción
- `npm run start:dev` — modo desarrollo (hot reload)
- `npm run test` — pruebas unitarias
- `npm run test:e2e` — pruebas e2e
- `npm run test:cov` — reporte de cobertura

---

## 🧪 Cómo ejecutar pruebas

- Pruebas unitarias:

```bash
npm run test
```

- Pruebas end-to-end:

```bash
npm run test:e2e
```

---

## 🔍 Puntos clave para revisar rápidamente

1. Endpoints y rutas en `src/teams/teams.controller.ts`
2. Lógica y dependencias en `src/teams/teams.service.ts`
3. Pruebas en `src/teams/*.spec.ts` y `test/app.e2e-spec.ts`
4. Configuración de ESLint y TypeScript en archivos raíz

---

## ℹ️ Notas finales

Este README explica el propósito del examen y cómo verificar su funcionamiento. Si quieres, puedo añadir instrucciones adicionales o ejemplos de peticiones para los endpoints (`curl` o `HTTPie`). ✅

---

**Autor:** Equipo de evaluación


