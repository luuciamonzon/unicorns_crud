# 🦄 Unicornios CRUD + Exportación PDF

Aplicación web construida con **React** que permite gestionar un listado de unicornios mágicos mediante un sistema CRUD completo. Incluye una función de **exportación a PDF visualmente mejorada**, con líneas divisorias visibles, estilos cuidados y estructura centrada.

---

## 📋 Requisitos cumplidos (según PDF entregado)

- ✅ CRUD completo: Crear, Leer, Actualizar y Eliminar unicornios
- ✅ Listado visual con DataTable de PrimeReact
- ✅ Manejo de estado con Context API + useReducer
- ✅ Ruteo con React Router DOM
- ✅ Llamadas HTTP con Axios
- ✅ Exportación de tabla a PDF con jsPDF + autoTable
- ✅ Diseño atractivo, responsivo y limpio
- ✅ Código modular, validado y funcional

---

## 🖼️ Descripción general de la aplicación

La app permite:
- Agregar nuevos unicornios mediante un formulario
- Editar unicornios existentes
- Eliminar unicornios con confirmación
- Ver un listado ordenado y con paginación
- Exportar ese listado en PDF con formato visual profesional

---

## ✨ Características visuales destacadas

- Interfaz basada en PrimeReact con estilo **Lara Light Indigo**
- Uso de tarjetas (`Card`) y botones temáticos (`Button`)
- DataTable con líneas visibles (`showGridlines`)
- PDF generado con:
  - Título centrado
  - Tabla con líneas entre filas y columnas
  - Estilo alternado por filas
  - Columnas centradas
  - Colores profesionales y legibles

---

## 🛠️ Tecnologías utilizadas

| Herramienta         | Descripción                                  |
|---------------------|----------------------------------------------|
| React               | Framework principal para la SPA              |
| PrimeReact          | Librería de componentes visuales             |
| React Router DOM    | Navegación entre vistas                      |
| Axios               | Cliente HTTP para API REST                   |
| Context API + Reducer | Manejo de estado global                    |
| jsPDF + autoTable   | Generación y estilo de documentos PDF        |

---

## ⚙️ Instalación y uso local

### 1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/unicorns-crud.git
cd unicorns-crud
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar la aplicación
```bash
npm run dev
```

### 4. Acceder en el navegador
```
http://localhost:5173
```

---

## 📁 Estructura del proyecto

```
unicorns-crud/
│
├── public/                  # Archivos públicos y estáticos
│
├── src/
│   ├── components/          # Componentes reutilizables
│   │   └── UnicornForm.jsx
│   │
│   ├── contexts/            # Contexto global de unicornios
│   │   └── UnicornContext.jsx
│   │
│   ├── services/            # Lógica de conexión con API (Axios)
│   │   └── unicornService.js
│   │
│   ├── views/               # Vistas principales
│   │   ├── UnicornsView.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx              # Definición de rutas
│   └── main.jsx             # Entrada principal del proyecto
│
├── package.json
├── README.md
└── vite.config.js
```

---

## 🧾 Detalles de exportación a PDF

La función `exportPDF` está implementada con `jsPDF` y `autoTable`, generando un PDF estilizado con:

- ✅ Encabezado “Listado de Unicornios” centrado
- ✅ Tabla con columnas: Nombre, Edad, Color, Poder
- ✅ Bordes visibles entre columnas y filas (`theme: 'grid'`)
- ✅ Alternancia de colores en filas
- ✅ Alineación centrada en todas las celdas
- ✅ Tipografía clara (Helvetica)
- ✅ Fecha de generación automática (opcional)

### Fragmento de configuración PDF:
```js
autoTable(doc, {
  head: [['Nombre', 'Edad', 'Color', 'Poder']],
  body: unicorns.map((u) => [u.name, u.age, u.color, u.power]),
  startY: 30,
  theme: 'grid',
  headStyles: { fillColor: [63, 81, 181], halign: 'center' },
  styles: { halign: 'center', font: 'helvetica', fontSize: 11 },
  alternateRowStyles: { fillColor: [240, 240, 255] },
});
```

---

## 📌 Consideraciones

- Se usó la estructura modular de React y Context API para mantener un código limpio y escalable.
- El proyecto puede adaptarse fácilmente para otro tipo de entidades distintas a unicornios (productos, personas, tareas).
- Se cuidó la accesibilidad y el diseño visual.
- La exportación PDF representa fielmente lo visualizado en la tabla.

---