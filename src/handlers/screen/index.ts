import { mouse, screen, Region, FileType } from '@nut-tree/nut-js'
import path from 'path'
import fs from 'fs/promises'
import { CommandPalette } from '../index.types'

export const positionHandler = async () => {
  const { x, y } = await mouse.getPosition()
  return `${x}px,${y}px`
}

export const printScreenHandler = async () => {
  const pathToFile = path.resolve(__dirname, 'img.png')

  try {
    const { x, y } = await mouse.getPosition()
    const area = new Region(x - 100, y - 100, 200, 200)

    await screen.captureRegion('img', area, '.png' as FileType, __dirname)
    const imgUrl = await fs.readFile(pathToFile, 'base64')

    return imgUrl
  } catch (e) {
    console.error(e)
  }
}
