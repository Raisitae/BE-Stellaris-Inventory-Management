<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Stellaris Inventory Management

Sistema de gestión de inventario construido con [NestJS](https://nestjs.com/) y MongoDB.

---

## Descripción

Este proyecto es una API backend para la gestión de productos y ventas, utilizando NestJS y una base de datos MongoDB. Incluye endpoints para productos, ventas y seed de datos.

---

## Requisitos

- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) (opcional pero recomendado para desarrollo)

---

## Instalación

```bash
npm install
```

---

## Uso con Docker

1. Asegúrate de tener Docker instalado.
2. Levanta los servicios (backend y base de datos):

```bash
docker compose up -d
```

Esto iniciará MongoDB y el backend en modo desarrollo.

---

## Variables de entorno

El archivo `docker-compose.yaml` ya define la variable de conexión a MongoDB. Si corres el backend fuera de Docker, asegúrate de definir la variable `MONGODB_URI` en tu entorno.

---

## Comandos útiles

### Desarrollo local

```bash
npm run start:dev
```

### Pruebas

```bash
# Unit tests
npm run test

# End-to-end tests
npm run test:e2e
```

---

## Notas

- **No subas la carpeta `mongo/` al repositorio.** Añádela a tu `.gitignore` ya que contiene los datos de la base de datos.
- El backend corre por defecto en el puerto `3000`.

---

## Recursos

- [NestJS Documentation](https://docs.nestjs.com)
- [Docker Compose Docs](https://docs.docker.com/compose/)

---

## Licencia

MIT
