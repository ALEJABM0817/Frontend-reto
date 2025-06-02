# Frontend - Reto Vue 3 + Vite

Este frontend es una aplicación web que permite consultar datos de ratings de analistas bursátiles, almacenarlos en la base de datos, listarlos de forma paginada y recibir recomendaciones sobre en qué acción invertir, todo a través de una interfaz sencilla y moderna.

---

## 🌐 URLs de la aplicación desplegada en AWS

- **Frontend:**  
  [http://frontend-alb-32408893.us-east-1.elb.amazonaws.com/](http://frontend-alb-32408893.us-east-1.elb.amazonaws.com/)

- **Backend:**  
  [http://backend-alb-574949025.us-east-1.elb.amazonaws.com/](http://backend-alb-574949025.us-east-1.elb.amazonaws.com/)  
  Puedes probar el endpoint `/ping` en:  
  [http://backend-alb-574949025.us-east-1.elb.amazonaws.com/ping](http://backend-alb-574949025.us-east-1.elb.amazonaws.com/ping)

---

## Requisitos

- Node.js (v18 o superior recomendado)
- npm (v9 o superior recomendado)
- Acceso al backend configurado en la variable de entorno `VITE_URL_BACKEND`

## Instalación

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/ALEJABM0817/Frontend-reto.git
   cd Frontend-reto
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y agrega la URL de tu backend, por ejemplo:

   ```
   VITE_URL_BACKEND=http://localhost:8081/
   ```

## Uso

### Compilar y recargar en modo desarrollo

```sh
npm run dev
```

### Compilar y minificar para producción

```sh
npm run build
```

### Chequear tipos y lint

```sh
npm run lint
```

## Recomendaciones

- Usa [VSCode](https://code.visualstudio.com/) con la extensión [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para una mejor experiencia con Vue y TypeScript.
- Si usas TypeScript, los chequeos de tipos se realizan automáticamente con `vue-tsc`.

## Notas

- Este frontend está diseñado para funcionar junto con el backend del reto. Asegúrate de que el backend esté corriendo y accesible desde la URL configurada.
- Si tienes problemas de CORS, revisa la configuración del backend para permitir peticiones desde el origen del frontend.

---
```<!-- filepath: c:\Users\Steven\Desktop\Golang\Frontend\README.md -->
# Frontend - Reto Vue 3 + Vite

Repositorio: [https://github.com/ALEJABM0817/Frontend-reto.git](https://github.com/ALEJABM0817/Frontend-reto.git)

## Requisitos

- Node.js (v18 o superior recomendado)
- npm (v9 o superior recomendado)
- Acceso al backend configurado en la variable de entorno `VITE_URL_BACKEND`

## Instalación

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/ALEJABM0817/Frontend-reto.git
   cd Frontend-reto
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y agrega la URL de tu backend, por ejemplo:

   ```
   VITE_URL_BACKEND=http://localhost:8081/
   ```

## Uso

### Compilar y recargar en modo desarrollo

```sh
npm run dev
```

### Compilar y minificar para producción

```sh
npm run build
```

### Chequear tipos y lint

```sh
npm run lint
```

## Recomendaciones

- Usa [VSCode](https://code.visualstudio.com/) con la extensión [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para una mejor experiencia con Vue y TypeScript.
- Si usas TypeScript, los chequeos de tipos se realizan automáticamente con `vue-tsc`.

## Notas

- Este frontend está diseñado para funcionar junto con el backend del reto. Asegúrate de que el backend esté corriendo y accesible desde la URL configurada.
- Si tienes problemas de CORS, revisa la configuración del backend para permitir peticiones desde el origen del frontend.

---