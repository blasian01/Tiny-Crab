import type { ReactNode } from 'react'
import { Box, Text } from '../../ink.js'

export type ClawdPose =
  | 'default'
  | 'arms-up'
  | 'look-left'
  | 'look-right'

type Props = {
  pose?: ClawdPose
}

type CrabArt = {
  row1: string
  row2: string
  row3: string
}

const POSES: Record<ClawdPose, CrabArt> = {
  default: {
    row1: '\\/(o.o)\\/',
    row2: '/\\_   _/\\',
    row3: '  /___\\  ',
  },
  'look-left': {
    row1: '\\/(o.O)\\/',
    row2: '/\\_   _/\\',
    row3: '  /___\\  ',
  },
  'look-right': {
    row1: '\\/(O.o)\\/',
    row2: '/\\_   _/\\',
    row3: '  /___\\  ',
  },
  'arms-up': {
    row1: ' ^(o.o)^ ',
    row2: '/\\_   _/\\',
    row3: '  /___\\  ',
  },
}

export function Clawd({ pose = 'default' }: Props): ReactNode {
  const art = POSES[pose]

  return (
    <Box flexDirection="column">
      <Text color="claude">{art.row1}</Text>
      <Text color="clawd_body">{art.row2}</Text>
      <Text color="clawd_body">{art.row3}</Text>
    </Box>
  )
}
