# Tiny Crab

 Tiny Crab is a local-first coding agent CLI that runs against your own local Ollama or LM Studio models.

It is designed for developers who want Claude-Code-style workflow (agent loop, tool use, rolling context, and compaction behavior) without cloud sign-in, API keys, or internet-dependent model calls.

## What Tiny Crab does

- Runs fully local LLM sessions through Ollama or LM Studio.
- Prompts for a local runtime and installed models at startup (arrow keys + Enter).
- Shows `#` warmup progress while loading the selected model into memory.
- Supports model lifecycle commands in-session:
  - `/changemodel` (alias of `/model`)
  - `/unload` (unload active model from memory)
- Unloads running models automatically on app exit.
- Uses a separate config home (`~/.tiny-crab`) so it does not interfere with official `claude`.

## Command names

- Official Anthropic CLI stays: `claude`
- This project CLI: `tiny-crab`

## Requirements

- macOS or Linux
- [Ollama](https://ollama.com/) installed and running, or [LM Studio](https://lmstudio.ai/) running its local server
- At least one downloaded local model in your chosen runtime
- Bun (project runtime)

## Quick start

```bash
# 1) Install deps
npm install

# 2) Install Tiny Crab command globally from this repo
npm install -g .

# 3) Start Tiny Crab
tiny-crab
```

On launch, Tiny Crab will show your available local runtimes and let you choose from the installed models in the selected runtime.

## Non-interactive usage

```bash
# Skip the picker and force an Ollama model
OLLAMA_MODEL=llama3.1:8b CLAUDE_DEV_SKIP_MODEL_PICKER=1 tiny-crab -p "Summarize this repo"

# Skip the picker and force an LM Studio model
CLAUDE_DEV_LOCAL_PROVIDER=lmstudio LMSTUDIO_MODEL=openai/gpt-oss-20b CLAUDE_DEV_SKIP_MODEL_PICKER=1 tiny-crab -p "Summarize this repo"
```

## Local runtime tuning

Tiny Crab keeps legacy env var names for compatibility.

- `CLAUDE_DEV_LOCAL_PROVIDER` (`ollama` or `lmstudio`)
- `CLAUDE_DEV_OLLAMA_BASE_URL` (default: `http://127.0.0.1:11434`)
- `CLAUDE_DEV_LMSTUDIO_BASE_URL` (default: `http://127.0.0.1:1234`)
- `CLAUDE_DEV_CONTEXT_WINDOW_CAP` (default: `32768`)
- `CLAUDE_DEV_MAX_OUTPUT_TOKENS_CAP` (default: `2048`)
- `CLAUDE_DEV_EFFORT_LEVEL` (default: `low`)
- `CLAUDE_DEV_SKIP_MODEL_PICKER=1` (skip model selector)
- `CLAUDE_DEV_UNLOAD_ON_EXIT=1` (auto-unload models when app exits)

## Model management

Inside Tiny Crab:

- `/changemodel` to switch active model
- `/unload` to unload the active model from RAM

## Project goal

Tiny Crab is being developed as an open-source local agentic coding tool focused on:

- privacy-first local inference
- reliable local tool execution
- practical coding workflows on self-hosted models
