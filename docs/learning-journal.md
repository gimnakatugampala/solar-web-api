# Learning journal

This file is an AI-generated learning scaffold. Complete the reflection sections in your own words based on what you actually did.

## Increment 1 Express foundation

Scope: application module, listener module, environment configuration, liveness response, and JSON 404 response.

### Proposed decisions and reasons

- Start with plain JavaScript and Express: use the requested stack and keep the first increment small enough to explain.
- Use ES modules: make module imports and exports explicit.
- Separate app.js from server.js: request handling can be exercised independently of opening a fixed port; server.js owns startup.
- Read PORT from the environment: a deployment platform can choose the listening port.
- Use Node's built-in environment-file loading and watch mode for local development: Node 24 already provides both, so this increment needs only Express.
- Add /health: verify the HTTP application responds. Database readiness will require a separate check later.
- Place the 404 middleware after routes: a matching route must have the first opportunity to respond.
- Keep an error object with code, message, and details: establish the shape required by the brief; future validation and security errors must use it too.
- Ignore .env but keep .env.example: publish configuration names without publishing real secrets.

### Your actual observations

Leave these unanswered until you have run and inspected this increment.

- What happened when you requested /health?
- What happened when you requested an unknown path?
- Explain import, app.get, res.status, res.json, and export in your own words.
- What would happen if the 404 middleware were placed before /health?
- Why is /health not proof that MongoDB works?
- What did you personally review or change?
- What did you misunderstand initially, and how did you resolve it?

## Domain decisions to make before increment 2 models

Required hierarchy: Province -> District -> GridSubstation -> SolarInstallation -> GenerationReading. User is the sixth entity.

GenerationReading must be an append-only history collection. Meter or inverter identity belongs to SolarInstallation as an attribute. No separate Device entity is required.

The module REST API Design Guidelines white paper has not yet been supplied. Endpoint designs remain provisional until checked against it.

The brief and rubric ask for CRUD while also requiring append-only readings and restricting devices to reading ingestion. Clarify which non-reading resources are writable and by which principal before implementing update/delete. Do not let devices or analyst users bypass the required write-read split.
