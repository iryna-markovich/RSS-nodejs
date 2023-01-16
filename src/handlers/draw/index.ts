import { mouse, left, right, up, down, Button } from '@nut-tree/nut-js'
import { CommandPalette } from '../index.types'

export const drawCircleHandler = async (value: any) => {
  await mouse.pressButton(Button.LEFT)

  await mouse.releaseButton(Button.LEFT)
}

export const drawSquareHandler = async (value: any) => {
  await mouse.pressButton(Button.LEFT)

  await mouse.move(right(value[0]))
  await mouse.move(down(value[0]))
  await mouse.move(left(value[0]))
  await mouse.move(up(value[0]))

  await mouse.releaseButton(Button.LEFT)
}

export const drawRectangleHandler = async (value: any) => {
  await mouse.pressButton(Button.LEFT)

  await mouse.move(right(value[0]))
  await mouse.move(down(value[1]))
  await mouse.move(left(value[0]))
  await mouse.move(up(value[1]))

  await mouse.releaseButton(Button.LEFT)
}
