// backend/src/server.js
const http = require('http');
const app = require('./app');
const { loadConfig } = require('./config/env');
const logger = require('./utils/logger');

const config = loadConfig();
const PORT = config.port || 4000;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`🚑 AAGC backend listening on http://localhost:${PORT}`);
});
