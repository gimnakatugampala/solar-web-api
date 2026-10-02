# SLSEA solar generation coursework API

This repository currently contains learning increments 1, 2, and 2a: an Express HTTP foundation, MongoDB Atlas configuration, a conceptual domain model, and one Province model. Authentication, domain HTTP resources, seed data, Swagger, and public deployment will be added in later increments.

## Run this increment

Node.js 24 is used. From this directory:

1. Run npm.cmd install if dependencies are not installed.
2. Ensure .env exists; copy .env.example to .env if needed.
3. Follow docs/atlas-setup.md and put your real Atlas connection string in .env as MONGODB_URI. The setting is intentionally blank until you configure it.
4. Run npm.cmd run dev. MongoDB must connect before the HTTP listener starts.
5. In another PowerShell terminal, run Invoke-RestMethod http://localhost:3000/health.
6. Run curl.exe -i http://localhost:3000/unknown to inspect the JSON 404 response.

npm.cmd start runs without loading a local .env file. The environment must supply MONGODB_URI; the deployment platform will supply it and PORT. If PORT is absent, it defaults to 3000. For local development, npm.cmd run dev loads .env.

GET /health is a liveness check. Startup requires a working database connection, but /health does not monitor ongoing database readiness.

MongoDB Atlas hosts the database. The Express API must be deployed separately to satisfy the coursework's public HTTPS API requirement. The Province model works with Atlas without changes.

## Source files

- src/app.js defines request handling and exports the Express application.
- src/server.js validates configuration and starts the HTTP listener.
- src/config/database.js establishes the MongoDB connection.
- src/models/province.model.js declares the first domain model.
- .env.example records non-secret configuration names.
- .gitignore excludes local configuration and installed dependencies.

Read docs/domain-model.md before studying the Province schema. Only Province is implemented so far. There are no domain HTTP routes or seeded records yet.

## Learning and evidence

Read docs/learning-journal.md and docs/ai-disclosure.md. Record your own explanations and actual changes. Create a Git commit after reviewing and understanding each increment; do not invent development history.

The coursework permits disclosed AI-generated code. Its report prose must be the student's own writing. These notes are teaching aids, not a report to submit as personal prose.
