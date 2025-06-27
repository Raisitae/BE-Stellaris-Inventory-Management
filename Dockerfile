# Usa una imagen oficial de Node como base
FROM node:18

# Crea y selecciona el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto que usará la app (coincide con process.env.PORT o el default 3000)
EXPOSE 3000

# Comando para arrancar la app compilada
CMD ["node", "dist/main"]
