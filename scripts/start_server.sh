#!/bin/bash
# Navegar a la carpeta de la aplicación
cd /home/ubuntu/app

# Detener cualquier instancia en ejecución
pm2 stop myapp || true

# Iniciar la aplicación con PM2
pm2 start npm --name "myapp" -- start
