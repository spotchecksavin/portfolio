# Graph Report - portfolio  (2026-06-16)

## Corpus Check
- 16 files · ~270,430 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 101 nodes · 96 edges · 16 communities (11 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `625a879f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `GitHub Pages Deployment Guide` - 8 edges
3. `scripts` - 6 edges
4. `Auto Graphify Update` - 5 edges
5. `📋 Setup Instructions` - 5 edges
6. `Step 3: Deploy` - 3 edges
7. `hooks` - 2 edges
8. `PERSONAL_INFO` - 2 edges
9. `EXPERIENCES` - 2 edges
10. `PROJECTS` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (16 total, 5 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+9 more)

### Community 1 - "Community 1"
Cohesion: 0.25
Nodes (7): 🌐 Access Your Site, GitHub Pages Deployment Guide, 📊 Monitor Deployment, 🚀 Next Steps, ⚙️ Troubleshooting, 📝 What Was Configured, 🔄 Workflow Details

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (11): homepage, name, private, scripts, build, deploy, dev, lint (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (10): VantaInstance, EXPERIENCES, PERSONAL_INFO, PROJECTS, SKILLS, root, rootElement, Experience (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.25
Nodes (8): dependencies, framer-motion, @google/genai, lucide-react, react, react-dom, tailwindcss, @tailwindcss/vite

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (7): **Option A: Automatic Deployment (Recommended)**, **Option B: Manual Deployment, 📋 Setup Instructions, Step 1: Add GitHub Secrets (If Using API Keys), Step 1: Enable GitHub Pages, Step 2: Enable GitHub Pages, Step 3: Deploy

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (5): Auto Graphify Update, Guardrails, Output Template, Overview, Workflow

### Community 7 - "Community 7"
Cohesion: 0.50
Nodes (3): description, name, requestFramePermissions

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (6): devDependencies, gh-pages, @types/node, typescript, vite, @vitejs/plugin-react

## Knowledge Gaps
- **65 isolated node(s):** `PreToolUse`, `SectionProps`, `rootElement`, `root`, `name` (+60 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 4` to `Community 2`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `PreToolUse`, `SectionProps`, `rootElement` to the rest of the system?**
  _65 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._