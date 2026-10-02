import express from 'express';

const app = express();

app.disable('x-powered-by');

// Liveness checks whether the HTTP application can respond.
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'slsea-solar-api'
  });
});

// Register this after routes, so it handles requests no route matched.
app.use((req, res) => {
  res.status(404).json({
    error: {
      code: 'RESOURCE_NOT_FOUND',
      message: 'The requested resource does not exist.',
      details: {
        path: req.path
      }
    }
  });
});

export default app;
