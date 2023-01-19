import {
  mouse,
  left,
  right,
  up,
  down,
  Button,
  Point,
  straightTo,
} from '@nut-tree/nut-js'

export const drawCircleHandler = async (value: number[]): Promise<void> => {
  await mouse.pressButton(Button.LEFT)

  let angle = 0
  const r = value[0]
  const { x, y } = await mouse.getPosition()
  const cx = x - r
  const cy = y

  while (angle !== 360) {
    const radians = (angle * Math.PI) / 180
    const xCord = cx + r * Math.cos(radians)
    const yCord = cy + r * Math.sin(radians)

    await mouse.move(straightTo(new Point(xCord, yCord)))

    angle++
  }

  await mouse.releaseButton(Button.LEFT)
}

export const drawSquareHandler = async (value: number[]): Promise<void> => {
  await mouse.pressButton(Button.LEFT)

  await mouse.move(right(value[0]))
  await mouse.move(down(value[0]))
  await mouse.move(left(value[0]))
  await mouse.move(up(value[0]))

  await mouse.releaseButton(Button.LEFT)
}

export const drawRectangleHandler = async (value: number[]): Promise<void> => {
  await mouse.pressButton(Button.LEFT)

  await mouse.move(right(value[0]))
  await mouse.move(down(value[1]))
  await mouse.move(left(value[0]))
  await mouse.move(up(value[1]))

  await mouse.releaseButton(Button.LEFT)
}
