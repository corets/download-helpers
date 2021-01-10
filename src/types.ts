export type SaveAsFile = (
  fileName: string,
  data: BlobPart | BlobPart[],
  contentType?: string
) => void
