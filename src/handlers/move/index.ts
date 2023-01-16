import { mouse, left, right, up, down } from '@nut-tree/nut-js'
import { CommandPalette } from '../index.types'

export const mouseMoveLeftHandler = async (value: any) => {
  await mouse.move(left(value[0]))
}

export const mouseMoveRightHandler = async (value: any) => {
  await mouse.move(right(value[0]))
}

export const mouseMoveDownHandler = async (value: any) => {
  await mouse.move(down(value[0]))
}

export const mouseMoveUpHandler = async (value: any) => {
  await mouse.move(up(value[0]))
}
