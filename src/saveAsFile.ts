import { SaveAsFile } from "./types"

export const saveAsFile: SaveAsFile = (
  fileName,
  data,
  contentType = "application/octet-stream"
) => {
  const blobParts = Array.isArray(data) ? data : [data]
  const blob = new Blob(blobParts, { type: contentType })
  const a = document.createElement("a")

  a.href = URL.createObjectURL(blob)
  a.download = fileName
  a.click()
}
