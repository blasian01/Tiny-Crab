/**
 * Public/open-source fallback for Chrome MCP tool names.
 *
 * Internal Anthropic builds source these from @ant/claude-for-chrome-mcp.
 * That package is not published publicly, so this local list keeps CLI startup
 * working in OSS/dev environments.
 */
export const BROWSER_TOOL_NAMES = [
  'javascript_tool',
  'read_page',
  'find',
  'form_input',
  'computer',
  'navigate',
  'resize_window',
  'gif_creator',
  'upload_image',
  'get_page_text',
  'tabs_context_mcp',
  'tabs_create_mcp',
  'update_plan',
  'read_console_messages',
  'read_network_requests',
  'shortcuts_list',
  'shortcuts_execute',
] as const

export const BROWSER_TOOLS = BROWSER_TOOL_NAMES.map(name => ({ name }))
