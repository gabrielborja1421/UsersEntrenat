# Repositorio 211128-Zenteno-EntrenAT-BackEnd-Muscles

Bienvenido al repositorio `211128-Zenteno-EntrenAT-BackEnd-Muscles
`. Este proyecto utiliza una arquitectura hexagonal y se conecta a una base de datos MySQL.

## Instrucciones de Instalación

Sigue estos pasos para configurar y ejecutar el proyecto:

### **Paso 1:** Clonar el Repositorio

Primero, clona el repositorio en tu máquina local.
recuerda, cada servicio se encuentra de forma independiente en cada rama del repositorio

```bash
git clone 211128-Zenteno-EntrenAT-BackEnd-Muscles.git
cd c1-211128-hexagonal
``````

### **Paso 2:** Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto. Usa las siguientes variables de entorno:

```env
PORT=3006
DB_HOST=localhost
DB_USER=<TuUsuarioDB>
DB_DATABASE=<NombreDeLaBaseDeDatos>
DB_PASSWORD=<TuContraseñaDB>

```
Nota: Asegúrate de reemplazar <TuUsuarioDB>, <NombreDeLaBaseDeDatos> y <TuContraseñaDB> con tus datos correspondientes de la base de datos MySQL.

Es importante mantener la KEY_TOKEN tal como está para que las pruebas preexistentes en el repositorio funcionen correctamente. Si cambias esta key, deberás obtener un nuevo token para que las pruebas funcionen.

### **Paso 3:** Instalación de Dependencias y Ejecución

instala las dependencias necesarias:

```bash
npm install
------------
npm run dev
```

# Documentation
https://documenter.getpostman.com/view/21290432/2s9YeK3A8D
