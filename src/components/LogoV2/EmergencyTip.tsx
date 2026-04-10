import type { ReactNode } from 'react'
import { useEffect, useMemo } from 'react'
import { Box, Text } from 'src/ink.js'
import { getDynamicConfig_CACHED_MAY_BE_STALE } from 'src/services/analytics/growthbook.js'
import { getGlobalConfig, saveGlobalConfig } from 'src/utils/config.js'
import { isLocalModelMode } from 'src/utils/envUtils.js'

const CONFIG_NAME = 'tengu-top-of-feed-tip'

type TipOfFeed = {
  tip: string
  color?: 'dim' | 'warning' | 'error'
}

const DEFAULT_TIP: TipOfFeed = {
  tip: '',
  color: 'dim',
}

export function EmergencyTip(): ReactNode {
  const tip = useMemo(getTipOfFeed, [])
  const lastShownTip = useMemo(
    () => getGlobalConfig().lastShownEmergencyTip,
    [],
  )
  const shouldShow = !isLocalModelMode() && tip.tip && tip.tip !== lastShownTip

  useEffect(() => {
    if (!shouldShow) {
      return
    }

    saveGlobalConfig(current => {
      if (current.lastShownEmergencyTip === tip.tip) {
        return current
      }

      return {
        ...current,
        lastShownEmergencyTip: tip.tip,
      }
    })
  }, [shouldShow, tip.tip])

  if (!shouldShow) {
    return null
  }

  return (
    <Box paddingLeft={2} flexDirection="column">
      <Text
        {...(tip.color === 'warning'
          ? { color: 'warning' as const }
          : tip.color === 'error'
            ? { color: 'error' as const }
            : { dimColor: true })}
      >
        {tip.tip}
      </Text>
    </Box>
  )
}

function getTipOfFeed(): TipOfFeed {
  return getDynamicConfig_CACHED_MAY_BE_STALE<TipOfFeed>(
    CONFIG_NAME,
    DEFAULT_TIP,
  )
}
