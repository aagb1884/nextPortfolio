export const apiVersion =
  process.env.NEXT_PRIVATE_SANITY_API_VERSION || '2024-12-05'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET || 'production',
  'Missing environment variable: NEXT_PRIVATE_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: NEXT_PRIVATE_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
