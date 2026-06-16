const express = require('express');
const cors = require('cors');

<<<<<<< HEAD
const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:4200', // Para desarrollo, ajustar en producción
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', require('./routes/api.routes'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
=======
const authRoutes = require('./modules/auth/auth.routes');
const lineaRoutes = require('./modules/linea/linea.routes');
const clienteRoutes = require('./modules/cliente/cliente.routes');
const proveedorRoutes = require('./modules/proveedor/proveedor.routes');
const protect = require('./middlewares/protect');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Health check (publico)
app.get('/api/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok' }, error: null });
>>>>>>> desarrollo
});

// Rutas publicas
app.use('/api/auth', authRoutes);

// Rutas protegidas (requieren JWT)
app.use('/api/lineas', protect, lineaRoutes);
app.use('/api/clientes', protect, clienteRoutes);
app.use('/api/proveedores', protect, proveedorRoutes);

// 404 + manejador central de errores (SIEMPRE los ultimos)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
