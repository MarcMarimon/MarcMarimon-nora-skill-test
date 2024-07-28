# MarcMarimon-nora-skill-test

## Problem Description 

Nora's ecosystem of technologies is made up of three main elements: Nora Professional, Nora
App and Noralytics. This technical test describes a small subset of the features and functionality
of Nora Professional.

1. **Therapists, Patients and Centers**

   The objective of the Nora Professional system is that health professionals, therapists from now
on, can actively monitor the patients discharged after suffering a stroke. The therapists belong
to a single center which is identified by a unique code made up of five alphanumeric characters.
Patients are also assigned to a single center. And also patients are assigned to a therapist.
Patients can only be assigned to a therapist if they belong to the same center.

3. **Surveys:**

   One of the most used monitoring methods is to carry out surveys to the patients. A survey is
made up of questions which can be of the type Open, Range or Decimal.
- Open-ended questions are answered with free-form text
- Range-type questions are answered with an integer between two values (min and max)
- Decimal questions are answered with an unrestricted decimal number


Surveys may also contain groups of questions, these receive a name and are composed of a
series of questions.
It is of interest to know the numerical value of a whole survey, that is, the sum of the values of
all the responses. If the question is open type, its value is 0.
The surveys belong to a single center. The therapist may send surveys to patients when the
following conditions are met:


- The survey belongs to the same center as the therapist
- The patient belongs to the same center and is assigned to the therapist

  

3. **Attributes and format restrictions:**

***Center attributes:***

- Code
- Address
  
***Therapist attributes:***
- Name (required)
- Telephone (optional)
- email (the format must be validated)


***Patient attributes:***
- patient code (free string, maximum 10 characters)
- telephone (optional)
- email (required)
- name (required)

  
***Format restrictions:***
- Center code: 5 alphanumeric characters. Mandatory and unique field
- Patient code: Alphanumeric of max
- Email: correct email format

# Nora Professional

Este proyecto es una aplicación para gestionar encuestas y preguntas asociadas. A continuación, se detallan los pasos necesarios para configurar el proyecto en tu entorno local.

## Requisitos Previos

1. **Node.js y npm:** Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados. Puedes verificar su instalación con los siguientes comandos:
   ```bash
   node -v
   npm -v
   ```
2. **MySQL:** Necesitarás [MySQL](https://dev.mysql.com/downloads/mysql/) instalado y en funcionamiento. Asegúrate de que el servicio MySQL esté corriendo y que puedas acceder a él.

## Clonar el Repositorio

Primero, clona el repositorio desde GitHub:

```bash
git clone https://github.com/tuusuario/nora-professional.git
cd nora-professional
```
## Instalar Dependencias

Instala las dependencias de Node.js y Sequelize:

```bash
npm install
```
## Configurar Sequelize

### Inicializar Sequelize

Si aún no has inicializado Sequelize en tu proyecto, ejecuta el siguiente comando para configurar el archivo `sequelize-cli`:

```bash
npx sequelize-cli init
```
Esto generará los siguientes directorios:

- `config/`: Para los archivos de configuración de la base de datos.
- `models/`: Para los modelos de Sequelize.
- `migrations/`: Para los archivos de migración.
- `seeders/`: Para los archivos de semillas de datos.

### Configurar `config/config.json`

Abre el archivo `config/config.json` y ajusta la configuración para conectar con tu base de datos MySQL:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "nora_professional",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
Asegúrate de reemplazar **"your_password"** con la contraseña de tu base de datos.

### Ejecutar Migraciones

Si tienes migraciones pendientes, ejecútalas con:

```bash
npx sequelize-cli db:migrate
```
### Insertar Datos Iniciales

Para insertar datos iniciales en la base de datos, ejecuta el siguiente comando:

```bash
npx ts-node src/db/init.ts
```
Este comando ejecutará el script **init.ts** ubicado en src/db para insertar datos iniciales en la base de datos.

### Iniciar el Servidor

Para iniciar la aplicación, ejecuta:

```bash
npm start
```
Esto iniciará el servidor en el puerto 3000 por defecto. Puedes acceder a la API en **[http://localhost:3000.]**

### Uso de la API

Puedes probar los siguientes endpoints utilizando [Postman](https://www.postman.com/) o cualquier cliente HTTP:
Esta es la API publicada por mi con la creacion de la encuesta y el calculo del valor total de una encuesta: [https://documenter.getpostman.com/view/32893977/2sA3kaCJmq#ea42bc1b-f1fa-4962-9b87-3888af695440](https://documenter.getpostman.com/view/32893977/2sA3kaCJmq#ea42bc1b-f1fa-4962-9b87-3888af695440)
En caso de querer crearla por vuestra parte aqui teneis los pasos a seguir:

#### Crear Encuesta

- **Método:** POST
- **URL:** `/api/surveys`

**Cuerpo de la Solicitud (JSON):**

```json
{
  "nombre": "Encuesta de Satisfacción",
  "codigoCentro": "ABC12",
  "preguntas": [
    {
      "nombre": "Grupo 1",
      "preguntas": [
        { "tipo": "texto", "contenido": "¿Cómo calificaría nuestro servicio?", "respuesta": "4" },
        { "tipo": "texto", "contenido": "¿Recomendaría nuestro servicio?", "respuesta": "5" }
      ]
    }
  ]
}
```
#### Calcular Valor Total de una Encuesta

- **Método:** GET
- **URL:** `/api/surveys/:encuestaId/value`

**Ejemplo:** `http://localhost:3000/api/surveys/1/value`

Donde `:encuestaId` es el ID de la encuesta cuya valoración quieres calcular.

---

### Contribuciones

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/tu-feature
   ```
3. Realiza tus cambios y realiza commits:
   ```bash
   git commit -am 'Add nueva característica'
   ```
4. Empuja tus cambios a tu repositorio:
   ```bash
   git push origin feature/tu-feature
   ```
5. Crea una solicitud de extracción (pull request).


