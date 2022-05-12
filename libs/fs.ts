import fs from 'fs'
import fsPromise from 'fs/promises'
import path from 'path'

type ignoreFilename = string | ((filename: string) => boolean)

const isIgnoreFilename = (
  filename: string,
  ignoreFilenames: ignoreFilename[],
) => {
  return (
    ignoreFilenames.findIndex(c => {
      if (typeof c === 'function') {
        return c(filename)
      }

      return c === filename
    }) > -1
  )
}

export const remove = async (p: string, ignoreFilenames?: ignoreFilename[]) => {
  const files = await fsPromise.readdir(p)

  await Promise.all(
    files.map(async filename => {
      const isIgnore = isIgnoreFilename(filename, ignoreFilenames || [])
      if (isIgnore) {
        return Promise.resolve()
      }

      const filePath = path.join(p, filename)

      const stat = await fsPromise.stat(filePath)

      if (!stat.isDirectory()) {
        fs.unlinkSync(filePath)
      }
    }),
  )
}
