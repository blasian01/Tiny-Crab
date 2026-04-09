#!/usr/bin/env bun

// Runtime MACRO fallback for local source-mode execution.
// In official builds, these are compile-time inlined by the bundler.
const runtimeMacro = {
  VERSION: '2.1.89',
  PACKAGE_URL: '@anthropic-ai/claude-code-dev-local',
  NATIVE_PACKAGE_URL: '@anthropic-ai/claude-code-dev-local',
  ISSUES_EXPLAINER:
    'report issues at https://github.com/anthropics/claude-code/issues',
  FEEDBACK_CHANNEL: 'https://github.com/anthropics/claude-code/issues',
  BUILD_TIME: '',
  VERSION_CHANGELOG: '',
}

globalThis.eval(`var MACRO = ${JSON.stringify(runtimeMacro)};`)

await import('./cli.tsx')
