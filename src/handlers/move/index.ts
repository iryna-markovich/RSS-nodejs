import { mouse, left, right, up, down } from '@nut-tree/nut-js'

export const mouseMoveLeftHandler = async (value: number[]): Promise<void> => {
  await mouse.move(left(value[0]))
}

export const mouseMoveRightHandler = async (value: number[]): Promise<void> => {
  await mouse.move(right(value[0]))
}

export const mouseMoveDownHandler = async (value: number[]): Promise<void> => {
  await mouse.move(down(value[0]))
}

export const mouseMoveUpHandler = async (value: number[]): Promise<void> => {
  await mouse.move(up(value[0]))
}
