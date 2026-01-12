
# 🚀 Backend - Equipment Manager API

API REST desarrollada con **NestJS** y **PostgreSQL** para la gestión y validación de equipos tecnológicos. Este proyecto es parte de la prueba técnica para **Leasein**.

## 🛠 Tech Stack

* **Framework:** NestJS 11
* **Lenguaje:** TypeScript
* **Base de Datos:** PostgreSQL 16
* **ORM:** TypeORM
* **Validación:** class-validator & class-transformer
* **Documentación:** Swagger (OpenAPI)
* **Contenedorización:** Docker & Docker Compose

---

## 📋 Prerrequisitos

Asegúrate de tener instalado en tu entorno local:

* Node.js (v18 o superior)
* pnpm (Gestor de paquetes utilizado)
* Docker Desktop (corriendo)

---

## ⚙️ Configuración e Instalación

### 1. Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto (`/equipment-manager-api`) basándote en el siguiente ejemplo:

```env
# Configuración de Base de Datos
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=root
DB_DATABASE=leasein_db

# Configuración del Servidor
PORT=3000

# Sincronización de TypeORM (true para dev/pruebas, false para prod)
SYNCRONIZE_DB=true

```

### 2. Levantar Base de Datos (Docker)

El proyecto utiliza Docker para la persistencia de datos. Ejecuta el siguiente comando en la raíz del repositorio (donde está el archivo `docker-compose.yml`) para iniciar PostgreSQL:

```bash
docker-compose up -d

```

### 3. Instalar Dependencias

Dentro de la carpeta `equipment-manager-api`, ejecuta:

```bash
pnpm install

```

---

## ▶️ Ejecución del Proyecto

### Modo Desarrollo

Para levantar el servidor en modo desarrollo (con hot-reload):

```bash
pnpm run start:dev

```

La aplicación estará corriendo en: `http://localhost:3000`

---

## 📚 Documentación de API (Swagger)

La API cuenta con documentación interactiva generada con Swagger. Una vez levantado el servidor, visita:

👉 **[http://localhost:3000/api/docs](https://www.google.com/search?q=http://localhost:3000/api/docs)**

Desde allí podrás probar endpoints como `/equipos/validar-equipos` directamente en el navegador.

---

## 🧪 Endpoints Principales

| Método | Endpoint | Descripción |
| --- | --- | --- |
| `GET` | `/equipos` | Listar todos los equipos registrados. |
| `POST` | `/equipos` | Crear un nuevo equipo (Seed). |
| `POST` | `/equipos/validar-equipos` | Validar una lista de códigos (Requisito Principal). |

### Ejemplo de Body para Validación

**POST** `/equipos/validar-equipos`

```json
{
  "codigos": [
    "EQ001",
    "EQ999",
    "LAP-X1"
  ]
}

```

---

## 🏗 Estructura del Proyecto

```text
src/
├── equipment/          # Módulo de Equipos (Resource)
│   ├── dto/            # Data Transfer Objects (Validaciones)
│   ├── entities/       # Entidades TypeORM (Tablas BD)
│   └── ...
├── app.module.ts       # Configuración principal y conexión BD
└── main.ts             # Entry point y configuración Swagger/Pipes

```

```

***

### Tips Pro para este README:

1.  **Claridad:** He separado la instalación de dependencias de la base de datos, ya que el Docker Compose lo tienes afuera.
2.  **Swagger:** He resaltado el link a la documentación, ya que es la forma más fácil para que el revisor pruebe tu trabajo sin configurar Postman.
3.  **Ejemplos:** Puse un JSON de ejemplo para el endpoint principal, ahorrándole tiempo al revisor.

Con esto, el backend está **listo para entregar**. ¿Hacemos el commit final de este README y pasamos a Angular?

```