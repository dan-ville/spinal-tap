# Free Weights

One repository for training research and the sites built on it. Research rounds produce theses
and structured evidence records. The apps read from that evidence.

## Layout

| Path | What it holds |
|---|---|
| `apps/spinal-tap/` | Spinal Tap, the lumbar-spine learning site (Astro). Self-contained: its own `package.json`, lockfile, `vercel.json`, licences and README. |
| `research/` | Research rounds: theses, chapter drafts and the working notes behind them. See [research/README.md](research/README.md). |
| `docs/` | Repository-wide design documents. |
| `evidence/` | Structured evidence records, one YAML file per source, shared by every thesis and app. See [evidence/README.md](evidence/README.md). |

This is **Free Weights**, an open-source toolkit for evidence-based fitness and health. More apps will sit beside Spinal Tap, each with its own brand but sharing one framework and the evidence base. The plan is in [docs/design/suite.md](docs/design/suite.md).

## Working on Spinal Tap

```sh
cd apps/spinal-tap
npm ci && npm --prefix atlas ci
npm run dev
```

CI (`.github/workflows/ci.yml`) runs the Spinal Tap checks from `apps/spinal-tap`. Vercel must have
its project **Root Directory** set to `apps/spinal-tap`.

## Licences

Code is MIT ([LICENSE](LICENSE)). Each app carries its own licence files for prose and data; see
[apps/spinal-tap/README.md](apps/spinal-tap/README.md#licences).
