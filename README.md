<p align="center">
  <img src="assets/tiny-crab-banner.jpg" alt="Tiny Crab — Local-First Agentic Coding" width="420" />
</p>

<h1 align="center">🦀 Tiny Crab</h1>

<p align="center">
  <strong>A local-first agentic coding CLI — all the power, none of the cloud.</strong>
</p>

<p align="center">
  <a href="#-quick-start"><img src="https://img.shields.io/badge/get%20started-quick%20start-orange?style=for-the-badge" alt="Quick Start" /></a>
  <a href="#-architecture"><img src="https://img.shields.io/badge/read-architecture-blue?style=for-the-badge" alt="Architecture" /></a>
  <a href="#-local-first-philosophy"><img src="https://img.shields.io/badge/learn-philosophy-green?style=for-the-badge" alt="Philosophy" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/runtime-Bun-f9f1e1?logo=bun&logoColor=000" alt="Bun" />
  <img src="https://img.shields.io/badge/language-TypeScript-3178c6?logo=typescript&logoColor=fff" alt="TypeScript" />
  <img src="https://img.shields.io/badge/UI-React%20%2B%20Ink-61dafb?logo=react&logoColor=000" alt="React + Ink" />
  <img src="https://img.shields.io/badge/LLM-Ollama%20%7C%20LM%20Studio-111?logo=linux&logoColor=fff" alt="Ollama | LM Studio" />
  <img src="https://img.shields.io/badge/license-UNLICENSED-red" alt="License" />
</p>

---

## 📖 What Is Tiny Crab?

**Tiny Crab** is a fully local, privacy-first agentic coding CLI built by [Tao Creative Labs](https://taocreativelabs.com). It delivers a professional agentic development experience — agent loops, tool use, rolling context, and smart compaction — powered entirely by **your own local LLM models** running on [Ollama](https://ollama.com/) or [LM Studio](https://lmstudio.ai/).

No cloud API keys. No internet-dependent model calls. No sign-in. No telemetry phoning home. Just you, your hardware, and a crab. 🦀

### Why "Tiny Crab"?

Because crabs are small, resilient, and self-sufficient — they carry their home on their back. Tiny Crab carries everything it needs locally on your machine. It's a nod to the philosophy: **your dev environment should be self-contained, portable, and yours**.

---

## 🏠 Local-First Philosophy

Tiny Crab is built on a foundational belief: **your code, your models, your machine, your rules.**

### What "Local-First" Means in Practice

| Principle | How Tiny Crab Implements It |
|-----------|---------------------------|
| **🔒 Privacy by Default** | All LLM inference runs on your hardware. Your code never leaves your machine. There are no cloud API calls, no data collection, and no usage tracking. |
| **🌐 Zero Internet Dependency** | Tiny Crab works entirely offline. Once you've downloaded a model, you can code on an airplane, in a cabin, or in a SCIF — anywhere, without connectivity. |
| **🔑 No API Keys Required** | No cloud API keys, no OpenAI key, no billing dashboard. You bring the model; Tiny Crab brings the agent. |
| **⚡ No Signup or Auth** | There's no OAuth flow, no account creation, no login screen. Install and go. |
| **🧠 Model Freedom** | Run any model available in Ollama or LM Studio — Llama 3.1, Mistral, CodeGemma, DeepSeek, Phi, Qwen, or any quantized variant that fits your hardware. |
| **💾 Data Sovereignty** | Conversations, memory files, and configuration stay in `~/.tiny-crab` on your local filesystem. You own every byte. |

### The Problem with Cloud-Dependent AI Coding Tools

Most AI coding assistants require you to:

1. **Send your proprietary code to a remote server** — a non-starter for many companies, government contractors, and security-conscious developers.
2. **Pay per-token for every interaction** — costs that scale unpredictably and can exceed hundreds of dollars per month for heavy users.
3. **Depend on internet connectivity** — meaning you can't work on a plane, on a train, or in an air-gapped environment.
4. **Trust a third party with your intellectual property** — even with data retention policies, your code transits through infrastructure you don't control.

Tiny Crab eliminates all of these constraints. It gives you the full agentic coding workflow — loop, tool use, context management — running on models you host yourself.

### Who Is This For?

- **Privacy-conscious developers** who don't want their code leaving their machine
- **Enterprise teams** in regulated industries (finance, healthcare, defense) that prohibit sending code to third-party APIs
- **Hobbyists and tinkerers** who want to experiment with agentic coding without a billing dashboard
- **Developers in low-connectivity environments** — field work, travel, air-gapped networks
- **Open-source advocates** who believe developer tools should be open and self-hostable
- **Hardware enthusiasts** with powerful local GPUs who want to put them to work

---

## ✨ Features

### 🤖 Full Agentic Loop

Tiny Crab doesn't just chat — it **acts**. Like cloud-based agentic coding tools, it runs a full agent loop:

1. You describe a task in natural language
2. The local LLM reasons about the task and decides which tools to invoke
3. Tiny Crab executes the tool (reads a file, runs a command, writes code)
4. The result is fed back to the LLM for further reasoning
5. Repeat until the task is complete

This is the same loop-and-tool-use pattern that makes cloud agentic tools powerful — just running locally.

### 🛠️ 40+ Built-in Tools

Tiny Crab ships with a comprehensive tool suite, each implemented as a self-contained module with input validation (Zod), permission checks, and terminal UI rendering:

| Category | Tools |
|----------|-------|
| **File Operations** | `FileRead`, `FileWrite`, `FileEdit`, `GlobTool`, `GrepTool` |
| **Shell Execution** | `BashTool`, `PowerShellTool`, `REPLTool` |
| **Code Intelligence** | `LSPTool` (Language Server Protocol integration) |
| **Agent Coordination** | `AgentTool`, `TaskCreateTool`, `TaskGetTool`, `TaskListTool`, `TaskStopTool`, `TaskUpdateTool`, `TaskOutputTool` |
| **Team Management** | `TeamCreateTool`, `TeamDeleteTool`, `SendMessageTool` |
| **MCP Integration** | `MCPTool`, `ListMcpResourcesTool`, `ReadMcpResourceTool`, `McpAuthTool` |
| **Workflow** | `EnterPlanModeTool`, `ExitPlanModeTool`, `EnterWorktreeTool`, `ExitWorktreeTool` |
| **Utility** | `AskUserQuestionTool`, `BriefTool`, `ConfigTool`, `SkillTool`, `SleepTool`, `WebFetchTool`, `WebSearchTool`, `TodoWriteTool`, `ToolSearchTool` |
| **Scheduling** | `ScheduleCronTool`, `RemoteTriggerTool` |

### 📂 50+ Slash Commands

Rich REPL commands for every workflow:

| Command | Description |
|---------|-------------|
| `/model` or `/changemodel` | Switch active LLM model mid-session |
| `/unload` | Unload the active model from GPU/RAM |
| `/commit` | Generate a commit message and commit |
| `/review` | Code review the current diff |
| `/compact` | Compress conversation context |
| `/doctor` | Run environment diagnostics |
| `/memory` | Manage persistent memories |
| `/skills` | Browse and invoke skills |
| `/plugin` | Install or manage plugins |
| `/diff` | View file diffs |
| `/cost` | View token usage stats |
| `/export` | Export conversation |
| `/resume` | Resume a previous session |
| `/plan` | Enter plan mode |
| `/vim` | Toggle vim keybindings |
| `/voice` | Voice input mode |
| `/help` | Full command reference |

### 🧠 Context Management & Compaction

Tiny Crab intelligently manages the conversation context window:

- **Rolling context** — keeps the most relevant recent messages in the context window
- **Smart compaction** — when context grows too large, automatically summarizes and compresses older turns while preserving critical information
- **Token estimation** — tracks input/output tokens per turn for visibility
- **Configurable context cap** — tune `CLAUDE_DEV_CONTEXT_WINDOW_CAP` to match your model's capacity

### 🔌 Plugin & Skill System

Extend Tiny Crab's capabilities:

- **16 built-in skills** — batch operations, debugging, code simplification, iterative refinement loops, and more
- **Plugin architecture** — install community plugins or write your own
- **MCP compatibility** — connect to any MCP-compliant tool server for additional tools and resources

### 💾 Persistent Memory

Tiny Crab remembers across sessions:

- **Project memory** (`TINYCRAB.md`) — project-specific conventions, facts, and preferences
- **User memory** (`~/.tiny-crab/TINYCRAB.md`) — cross-project personal preferences
- **Auto-extracted memories** — Tiny Crab can automatically distill and save important information from conversations

### 🖥️ Beautiful Terminal UI

Built with **React + Ink** (React for the terminal):

- ~140 terminal UI components
- ~80 React hooks
- Syntax-highlighted code output
- Progress indicators during model warmup
- Vim keybinding support
- Voice input support

---

## 🚀 Quick Start

### Prerequisites

| Requirement | Details |
|-------------|---------|
| **Operating System** | macOS or Linux |
| **Runtime** | [Bun](https://bun.sh) ≥ 1.1.0 |
| **LLM Backend** | [Ollama](https://ollama.com/) installed & running, **or** [LM Studio](https://lmstudio.ai/) with local server enabled |
| **Models** | At least one downloaded model in your chosen runtime |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/blasian01/Tiny-Crab.git
cd Tiny-Crab

# 2. Install dependencies
npm install

# 3. Install Tiny Crab globally
npm install -g .

# 4. Launch 🦀
tiny-crab
```

On first launch, Tiny Crab will:
1. Detect available local runtimes (Ollama, LM Studio)
2. Present your installed models with an arrow-key selector
3. Show `#` warmup progress while loading the selected model into GPU memory
4. Drop you into the interactive REPL — ready to code

### Verify Installation

```bash
# Should print the Tiny Crab version
tiny-crab --version

# Run environment diagnostics
tiny-crab
# Then type: /doctor
```

---

## 🛠️ Configuration

### Environment Variables

Tiny Crab is configured through environment variables for maximum flexibility:

| Variable | Default | Description |
|----------|---------|-------------|
| `CLAUDE_DEV_LOCAL_PROVIDER` | *(auto-detected)* | Force a runtime: `ollama` or `lmstudio` |
| `CLAUDE_DEV_OLLAMA_BASE_URL` | `http://127.0.0.1:11434` | Ollama API endpoint |
| `CLAUDE_DEV_LMSTUDIO_BASE_URL` | `http://127.0.0.1:1234` | LM Studio API endpoint |
| `CLAUDE_DEV_CONTEXT_WINDOW_CAP` | `32768` | Max tokens in context window |
| `CLAUDE_DEV_MAX_OUTPUT_TOKENS_CAP` | `2048` | Max output tokens per response |
| `CLAUDE_DEV_EFFORT_LEVEL` | `low` | Reasoning effort: `low`, `medium`, `high` |
| `CLAUDE_DEV_SKIP_MODEL_PICKER` | `0` | Set `1` to skip the model selector |
| `CLAUDE_DEV_UNLOAD_ON_EXIT` | `1` | Auto-unload models when app exits |
| `OLLAMA_MODEL` | — | Force a specific Ollama model |
| `LMSTUDIO_MODEL` | — | Force a specific LM Studio model |

### Config Locations

| Scope | Location |
|-------|----------|
| **Tiny Crab config** | `~/.tiny-crab/` |
| **Project config** | `.tiny-crab/config.json` in your project root |
| **Project memory** | `TINYCRAB.md` in your project root |
| **User memory** | `~/.tiny-crab/TINYCRAB.md` |

### Non-Interactive / CI Usage

```bash
# Ollama — skip picker and run a one-shot prompt
OLLAMA_MODEL=llama3.1:8b \
CLAUDE_DEV_SKIP_MODEL_PICKER=1 \
tiny-crab -p "Summarize this repo"

# LM Studio — same pattern
CLAUDE_DEV_LOCAL_PROVIDER=lmstudio \
LMSTUDIO_MODEL=openai/gpt-oss-20b \
CLAUDE_DEV_SKIP_MODEL_PICKER=1 \
tiny-crab -p "Find and fix all TODO comments in src/"
```

---

## 🏗️ Architecture

Tiny Crab is a **~512,000-line TypeScript codebase** built around a reactive pipeline architecture:

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌──────────────┐    ┌────────────┐
│  User Input │───►│  CLI Parser  │───►│ Query Engine │───►│ Tool Executor│───►│ Terminal UI│
│  (Terminal) │    │ (Commander)  │    │ (Agent Loop) │    │  (40+ Tools) │    │ (React+Ink)│
└─────────────┘    └──────────────┘    └──────┬───────┘    └──────────────┘    └────────────┘
                                              │
                                              ▼
                                     ┌────────────────┐
                                     │  Local LLM     │
                                     │  (Ollama / LMS)│
                                     │  127.0.0.1     │
                                     └────────────────┘
```

### Key Subsystems

| Subsystem | Description |
|-----------|-------------|
| **Query Engine** (`QueryEngine.ts`, ~46K lines) | Heart of the agent — handles streaming, tool-call loops, thinking mode, retry logic, token counting, and context management |
| **Tool System** (`src/tools/`, 40+ tools) | Self-contained modules with Zod schemas, permission models, execution logic, and terminal UI components |
| **Command System** (`src/commands/`, 50+ commands) | Slash commands: PromptCommands (send to LLM), LocalCommands (in-process text), and LocalJSXCommands (in-process React) |
| **Permission System** (`src/hooks/toolPermission/`) | Granular control: `default` (prompt per op), `plan` (batch approve), `bypassPermissions`, and `auto` (ML classifier) |
| **Plugin System** (`src/plugins/`) | Extensible plugin architecture with marketplace, bundled plugins, and auto-update support |
| **Skill System** (`src/skills/`, 16 built-in) | Named, reusable workflows that bundle prompts and tool configurations |
| **Memory System** (`src/memdir/`) | Persistent memory via `TINYCRAB.md` files — project, user, and auto-extracted scopes |
| **Task System** (`src/tasks/`) | Background and parallel task management — shell tasks, agent sub-tasks, teammate agents |
| **Bridge** (`src/bridge/`) | Bidirectional IDE communication layer for VS Code / JetBrains integration |
| **MCP** (`src/services/mcp/`) | Model Context Protocol — consume tools from MCP servers or expose Tiny Crab's tools as an MCP server |
| **Voice** (`src/voice/`) | Voice input/output — STT streaming, domain-specific vocabulary |
| **Coordinator** (`src/coordinator/`) | Multi-agent orchestration for parallel sub-tasks |

### Directory Structure

```
Tiny-Crab/
├── assets/                    # Branding assets (Tiny Crab logo)
├── docs/                      # Detailed architecture documentation
│   ├── architecture.md        # Core pipeline deep-dive
│   ├── subsystems.md          # All subsystems documented
│   ├── tools.md               # Tool catalog & reference
│   ├── commands.md            # Command catalog & reference
│   └── exploration-guide.md   # Navigating the codebase
├── src/
│   ├── main.tsx               # CLI entry point (Commander parser)
│   ├── QueryEngine.ts         # Core LLM agent loop (~46K lines)
│   ├── Tool.ts                # Tool type definitions & factory
│   ├── tools.ts               # Tool registry & presets
│   ├── commands.ts            # Command registry
│   ├── context.ts             # System/user context collection
│   ├── cost-tracker.ts        # Token usage & cost tracking
│   ├── tools/                 # 40+ agent tools
│   ├── commands/              # 50+ slash commands
│   ├── components/            # ~140 terminal UI components
│   ├── hooks/                 # ~80 React hooks
│   ├── services/              # External integrations
│   ├── state/                 # React context + custom store
│   ├── skills/                # Bundled skills
│   ├── plugins/               # Plugin system
│   ├── memdir/                # Persistent memory system
│   ├── tasks/                 # Task management
│   ├── entrypoints/           # Init logic, SDK, MCP entry
│   └── ...
├── mcp-server/                # Exploration MCP server
├── prompts/                   # System prompts
├── scripts/                   # Build scripts
├── docker/                    # Docker support
├── Dockerfile                 # Container build
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
├── biome.json                 # Linter/formatter config
└── tiny-crab                  # CLI binary entrypoint
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| **Language** | TypeScript (strict mode, ES modules) |
| **Runtime** | Bun ≥ 1.1.0 (JSX support, bundle feature flags) |
| **Terminal UI** | React 19 + Ink (React for CLI) |
| **CLI Parser** | Commander.js (`@commander-js/extra-typings`) |
| **Validation** | Zod v4 |
| **Linter** | Biome |
| **Styling** | Chalk (terminal colors) |
| **Build** | esbuild (via Bun scripts) |

---

## 🔬 How the Agentic Loop Works Locally

Understanding the core loop is key to understanding what makes Tiny Crab tick:

### Step-by-Step Flow

```
┌──────────────────────────────────────────────────────────────┐
│                     AGENT LOOP (LOCAL)                        │
│                                                              │
│  1. User types a prompt                                      │
│     └──► "Fix the authentication bug in src/auth.ts"         │
│                                                              │
│  2. Prompt + system context + tool definitions are sent       │
│     to the LOCAL LLM via Ollama/LM Studio API                │
│     └──► POST http://127.0.0.1:11434/api/chat                │
│                                                              │
│  3. LLM streams a response that may include tool calls        │
│     └──► { tool: "FileRead", args: { path: "src/auth.ts" } } │
│                                                              │
│  4. Tiny Crab executes the tool LOCALLY                       │
│     └──► Reads the file from disk                            │
│                                                              │
│  5. Tool result is appended to conversation context           │
│     └──► File contents added as assistant context             │
│                                                              │
│  6. Updated context sent back to LOCAL LLM                    │
│     └──► LLM reasons about the file and decides next action   │
│                                                              │
│  7. Repeat steps 3-6 until the LLM signals completion         │
│     └──► "I've fixed the bug. Here's what I changed..."       │
│                                                              │
│  ⚡ ALL of this stays on 127.0.0.1. Zero external traffic.   │
└──────────────────────────────────────────────────────────────┘
```

### Context Window Management

Local models typically have smaller context windows than cloud models. Tiny Crab handles this with:

1. **Smart compaction** — automatically summarizes older conversation turns when the context window fills up
2. **Token estimation** — counts tokens per turn so you always know your context budget
3. **Configurable caps** — set `CLAUDE_DEV_CONTEXT_WINDOW_CAP` to match your model's limit (e.g., 8192 for smaller models, 131072 for large ones)
4. **Rolling context** — prioritizes recent, relevant messages while compacting older history

### Permission Model

Even locally, Tiny Crab respects safety:

```
Bash(git *)           → Auto-approved: all git commands
Bash(npm test)        → Auto-approved: npm test specifically
FileEdit(/src/*)      → Auto-approved: edits under src/
FileRead(*)           → Auto-approved: reading any file
Bash(rm -rf *)        → BLOCKED: requires explicit user confirmation
```

---

## 🐳 Docker

Run Tiny Crab in a containerized environment:

```bash
# Build the Docker image
docker build -t tiny-crab .

# Run with your local Ollama (host networking)
docker run --network host -it tiny-crab
```

---

## 🧪 Development

### Build Commands

```bash
# Development build (with watch mode)
npm run build:watch

# Production build (minified)
npm run build:prod

# Type checking
npm run typecheck

# Lint
npm run lint

# Lint + auto-fix
npm run lint:fix

# Format code
npm run format

# Full check (lint + typecheck)
npm run check
```

### Code Style

- **TypeScript** with strict mode, ES modules
- **Biome** for linting and formatting
- **2-space indentation** (tabs for `src/` to match Biome config)
- **Zod v4** for all input validation at system boundaries
- **React + Ink** for terminal UI components

---

## 🧭 Recommended Models

Tiny Crab works with any model available in your local runtime. Here are some recommendations by hardware tier:

| Hardware | Recommended Models | Context Window |
|----------|-------------------|----------------|
| **8GB RAM** | `phi3:mini`, `gemma:2b`, `codegemma:2b` | 4K–8K |
| **16GB RAM** | `llama3.1:8b`, `mistral:7b`, `codellama:7b` | 8K–32K |
| **32GB RAM** | `llama3.1:70b-q4`, `deepseek-coder-v2:16b`, `qwen2.5:32b` | 32K–128K |
| **64GB+ RAM / GPU** | `llama3.1:70b`, `deepseek-coder-v2:33b`, `qwen2.5-coder:32b` | 128K+ |

> **Tip:** For coding tasks, code-specialized models like `deepseek-coder-v2`, `qwen2.5-coder`, and `codellama` tend to produce significantly better tool-call behavior than general-purpose models.

---

## 🗺️ Roadmap

Tiny Crab is actively developed. The focus areas are:

- [ ] **Improved local tool-calling** — Better prompt engineering for reliable tool invocation on smaller models
- [ ] **Model auto-detection** — Automatically select optimal settings based on the detected model architecture
- [ ] **Conversation persistence** — Resume sessions across restarts
- [ ] **Local embeddings** — RAG-based code search using local embedding models
- [ ] **Multi-model routing** — Use different models for different tasks (fast model for simple edits, powerful model for reasoning)

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**tl;dr:**

1. Fork the repository
2. Create a feature branch
3. Make your changes (documentation, MCP server, tooling, analysis)
4. Open a pull request

---

## 📚 Further Reading

| Document | Description |
|----------|-------------|
| [Architecture](docs/architecture.md) | Deep-dive into the core pipeline |
| [Subsystems](docs/subsystems.md) | All major subsystems documented |
| [Tools Reference](docs/tools.md) | Complete catalog of 40+ tools |
| [Commands Reference](docs/commands.md) | Complete catalog of 50+ commands |
| [Exploration Guide](docs/exploration-guide.md) | How to navigate the codebase |

---

## ⚖️ License

Tiny Crab is developed and maintained by **Tao Creative Labs**. This repository contains modified source code adapted for fully local, offline LLM inference. The original upstream code is NOT open-source and is published here for **educational and research purposes**. See [LICENSE](LICENSE) for full details.

Tiny Crab modifications (local model support, branding, CLI shim) are Tao Creative Labs contributions.

---

<p align="center">
  <img src="assets/tiny-crab-banner.jpg" alt="Tiny Crab" width="120" />
  <br />
  <sub>Built with 🦀 by <a href="https://taocreativelabs.com">Tao Creative Labs</a> — AI coding tools should be local, private, and free.</sub>
</p>
