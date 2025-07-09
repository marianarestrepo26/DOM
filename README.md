# 🎯 Entrenamiento DOM - Persistencia de Datos

## Descripción del Proyecto

Este proyecto es un entrenamiento completo sobre manipulación del DOM y persistencia de datos en el navegador. Implementa una aplicación web interactiva que demuestra los conceptos fundamentales de:

- Selección y manipulación de elementos del DOM
- Almacenamiento de datos en Local Storage
- Gestión de datos en Session Storage
- Validación de formularios
- Interfaz de usuario dinámica

## Funcionalidades Implementadas

### 🟣 Paso 1: Configuración del Proyecto
- **Estructura HTML completa** con formulario interactivo
- **Archivo JavaScript** asociado para la funcionalidad

### 🟣 Paso 2: Captura y Almacenamiento de Datos
- **Formulario HTML** con campos para nombre y edad
- **Validación en tiempo real** de los datos ingresados
- **Almacenamiento en Local Storage** al hacer clic en "Guardar Datos"
- **Mensajes de retroalimentación** para el usuario

### 🟣 Paso 3: Recuperación y Visualización de Datos
- **Carga automática** de datos al recargar la página
- **Manejo de casos** cuando no hay datos almacenados

### 🟣 Paso 4: Contador con Session Storage
- **Contador de interacciones** que persiste durante la sesión
- **Incremento automático** con cada interacción del usuario
- **Almacenamiento temporal** que se elimina al cerrar la pestaña

### 🟣 Paso 5: Limpieza de Datos
- **Botón "Limpiar Datos"** que elimina información del Local Storage
- **Actualización automática** de la interfaz después de la limpieza
- **Limpieza del formulario** para nueva entrada

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y formularios
- **Bulma CSS**: Framework CSS moderno y responsive
- **Font Awesome**: Iconos vectoriales para mejor UX
- **JavaScript**: Programación moderna con arrow functions y destructuring
- **Local Storage**: Persistencia de datos entre sesiones
- **Session Storage**: Almacenamiento temporal durante la sesión

## 📁 Estructura del Proyecto

```
DOM/
├── index.html
├── script.js
└── README.md
```

## Cómo Usar la Aplicación

### 1. Interactuar con el Formulario
1. **Ingresa tu nombre** en el campo correspondiente
2. **Ingresa tu edad** (número entre 1 y 120)
3. **Haz clic en "Guardar Datos"** para almacenar la información

### 2. Observar la Persistencia
- **Recarga la página** para ver que los datos se mantienen
- **Observa el contador** que aumenta con cada interacción
- **Usa "Limpiar Datos"** para eliminar la información almacenada


## Validaciones Implementadas

- **Nombre**: 
  - Solo letras, espacios y acentos (á, é, í, ó, ú, ñ, ü)
  - Mínimo 2 caracteres
  - Permite espacios para nombres compuestos
  - No permite números ni caracteres especiales
  - No permite espacios múltiples
- **Edad**: Número entre 1 y 120
- **Campos requeridos**: Ambos campos deben estar completos
- **Validación al enviar**: Mensajes de error solo al hacer clic en "Guardar Datos"


🟣 Elaborado por Mariana