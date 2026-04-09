import * as resources from '@opentelemetry/resources'

export const envDetector = resources.envDetector
export const hostDetector = resources.hostDetector
export const osDetector = resources.osDetector

// Compatibility shim: some snapshots expect resourceFromAttributes, while the
// installed OpenTelemetry resources package only exports Resource.
export function resourceFromAttributes(
  attributes: Record<string, unknown>,
): InstanceType<typeof resources.Resource> {
  const compat = (resources as { resourceFromAttributes?: unknown })
    .resourceFromAttributes
  if (typeof compat === 'function') {
    return compat(attributes) as InstanceType<typeof resources.Resource>
  }
  return new resources.Resource(attributes)
}
