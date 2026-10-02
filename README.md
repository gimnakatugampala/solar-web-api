# SLSEA solar generation coursework API

This repository currently contains learning increment 1: an Express HTTP foundation. MongoDB, authentication, solar resources, Swagger, and public deployment will be added in later increments.

## Run this increment

Node.js 24 is used. From this directory:

1. Run npm.cmd install if dependencies are not installed.
2. Ensure .env exists; copy .env.example to .env if needed.
3. Run npm.cmd run dev.
4. In another PowerShell terminal, run Invoke-RestMethod http://localhost:3000/health.
5. Run curl.exe -i http://localhost:3000/unknown to inspect the JSON 404 response.

npm.cmd start runs without a local .env file. In deployment, the platform will supply environment variables such as PORT. Locally it defaults to port 3000.

GET /health is a liveness check. It currently says nothing about database readiness.

## Source files

- src/app.js defines request handling and exports the Express application.
- src/server.js validates configuration and starts the HTTP listener.
- .env.example records non-secret configuration names.
- .gitignore excludes local configuration and installed dependencies.

No coursework domain models are implemented in this increment. First understand the implementation-independent domain model, then derive the MongoDB schemas.

## Learning and evidence

Read docs/learning-journal.md and docs/ai-disclosure.md. Record your own explanations and actual changes. Create a Git commit after reviewing and understanding each increment; do not invent development history.

The coursework permits disclosed AI-generated code. Its report prose must be the student's own writing. These notes are teaching aids, not a report to submit as personal prose.
