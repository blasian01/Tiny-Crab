/**
 * Shared types/constants for file persistence.
 */

/** Millisecond timestamp captured at turn start (Date.now()). */
export type TurnStartTime = number

/** Successful persisted file record. */
export type PersistedFile = {
  filename: string
  file_id: string
}

/** Failed persistence record. */
export type FailedPersistence = {
  filename: string
  error: string
}

/** Event payload emitted after persistence completes. */
export type FilesPersistedEventData = {
  files: PersistedFile[]
  failed: FailedPersistence[]
}

/** Relative outputs directory under the per-session workspace. */
export const OUTPUTS_SUBDIR = 'outputs'

/** Max number of files processed in one persistence pass. */
export const FILE_COUNT_LIMIT = 500

/** Parallel upload fanout for Files API calls. */
export const DEFAULT_UPLOAD_CONCURRENCY = 8
