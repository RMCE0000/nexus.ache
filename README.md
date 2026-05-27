# nexus ACHE

nexus ACHE is a meta holding company platform intended to hold and coordinate many operating companies from one trusted core.

## Stack

- Node.js 22+
- TypeScript
- Express
- Zod environment validation
- Pino request logging
- Vitest + Supertest
- Docker + Docker Compose

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create local environment file:

   ```bash
   cp .env.example .env
   ```

3. Start in development mode:

   ```bash
   npm run dev
   ```

4. Verify service:

   - `GET /`
   - `GET /health`

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Dockerized local environment

Start API + Postgres + Redis:

```bash
docker compose up --build
```

## Suggested next milestones

- Add authentication and role model for multi-company governance.
- Add company registry and inter-company relationship graph.
- Add audit/event ledger so changes across all subsidiaries are provable.
