import { mouse, screen, Region } from '@nut-tree/nut-js'
import Jimp from 'jimp'

export const positionHandler = async (): Promise<string> => {
  const { x, y } = await mouse.getPosition()

  return `${x}px,${y}px`
}

export const printScreenHandler = async (): Promise<string> => {
  let imgUrl = ''

  try {
    const { x, y } = await mouse.getPosition()
    const area = new Region(x - 100, y - 100, 200, 200)
    const img = await screen.grabRegion(area)

    const jimpImg = new Jimp(img)
    const buffer = await jimpImg.getBufferAsync(Jimp.MIME_PNG)

    return buffer.toString('base64')
  } catch (e) {
    console.error(e)
  }

  return imgUrl
}
