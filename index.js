const express = require('express');
const path = require('path');
const fileRoutes = require('./routes/index.routes');
const corsMiddleware = require('./middlewares/cors.mw');
const { logSuccess } = require('./services/log.service');
const app = express();

app.use(corsMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', fileRoutes);

const port = 5000;
app.listen(port, () => {
  logSuccess(`Server is running on http://localhost:${port}`);
});
