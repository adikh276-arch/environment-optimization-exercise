# Stage 1: Build the Vite app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY vite-nginx.conf /etc/nginx/conf.d/

# Copy build output to the subpath directory
RUN mkdir -p /usr/share/nginx/html/environment-optimization-exercise
COPY --from=build /app/dist /usr/share/nginx/html/environment-optimization-exercise

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
