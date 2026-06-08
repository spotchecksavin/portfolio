---
name: auto-graphify-update
description: Keep graphify artifacts current after repository edits by running `graphify update .` and verifying output files. Use when code files are created, modified, renamed, or deleted, especially before finishing a task, sharing status, or running graph queries.
---

# Auto Graphify Update

## Overview

Keep `graphify-out/` fresh after code edits with one fast command. Use this skill as the post-edit sync step before the final response.

## Workflow

1. Run `graphify update .` from the repository root.
2. Confirm success by checking that these files exist:
- `graphify-out/graph.json`
- `graphify-out/GRAPH_REPORT.md`
- `graphify-out/graph.html`
3. Report the updated graph size (nodes, edges, communities) from command output.
4. If update fails because `graphify` is missing, tell the user to install/configure graphify and stop.
5. If update warns about docs/papers/images, note that `graphify update .` is AST-only and suggest a full `/graphify .` run when an LLM API key is available.

## Guardrails

- Do not skip graph update after code edits.
- Do not run destructive git or filesystem commands as part of this skill.
- Keep updates quick: run once after a batch of related edits, and always run before final handoff.
- If there are no code changes, skip execution and state that no graph refresh was needed.

## Output Template

Use this concise status shape:

- `Graph updated: <nodes> nodes, <edges> edges, <communities> communities`
- `Artifacts: graphify-out/graph.json, graphify-out/GRAPH_REPORT.md, graphify-out/graph.html`
- `Notes: <warnings/limitations if any>`
