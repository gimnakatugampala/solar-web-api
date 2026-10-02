import app from './app.js';
import { connectDatabase } from './config/database.js';

async function startServer() {
  const port = Number(process.env.PORT ?? 3000);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535.');
  }

  await connectDatabase();
  console.log('MongoDB connected.');

  const server = app.listen(port, () => {
    console.log('Solar API listening on port ' + port);
  });

  server.on('error', (error) => {
    console.error('HTTP server failed to start: ' + error.code);
    process.exit(1);
  });
}

startServer().catch(() => {
  // Connection errors can contain credentials; keep them out of console output.
  console.error('Application startup failed. Check PORT, MONGODB_URI and MongoDB availability.');
  process.exit(1);
});
