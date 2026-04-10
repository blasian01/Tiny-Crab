// Tiny Crab: OAuth stripped — local-only

export function getOauthConfig() {
  return {
    clientId: '',
    tokenEndpoint: '',
    authorizeEndpoint: '',
    redirectUri: '',
    scope: '',
  }
}

export function fileSuffixForOauthConfig() { return '' }
export const OAUTH_BETA_HEADER = ''
export const CLAUDE_AI_PROFILE_SCOPE = ''
export const MCP_CLIENT_METADATA_URL = ''
