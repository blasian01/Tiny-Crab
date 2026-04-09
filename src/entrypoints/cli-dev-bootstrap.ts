#!/usr/bin/env bun

// Runtime MACRO fallback for local source-mode execution.
// In official builds, these are compile-time inlined by the bundler.
const runtimeMacro = {
  VERSION: '0.1.0',
  PACKAGE_URL: 'tiny-crab',
  NATIVE_PACKAGE_URL: 'tiny-crab',
  ISSUES_EXPLAINER:
    'report issues at https://github.com/blasian01/claude-code/issues',
  FEEDBACK_CHANNEL: 'https://github.com/blasian01/claude-code/issues',
  BUILD_TIME: '',
  VERSION_CHANGELOG: '',
}

globalThis.eval(`var MACRO = ${JSON.stringify(runtimeMacro)};`)

await import('./cli.tsx')
