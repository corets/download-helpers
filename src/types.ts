export type DownloadAsFile = (
  fileName: string,
  data: BlobPart | BlobPart[],
  contentType?: string
) => void
