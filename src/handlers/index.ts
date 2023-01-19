import {
  mouseMoveLeftHandler,
  mouseMoveRightHandler,
  mouseMoveDownHandler,
  mouseMoveUpHandler,
} from './move'
import {
  drawRectangleHandler,
  drawSquareHandler,
  drawCircleHandler,
} from './draw'
import { positionHandler, printScreenHandler } from './screen'
import { CommandPalette } from './index.types'

const commandPalette: CommandPalette = {
  prnt_scrn: printScreenHandler,
  draw_rectangle: drawRectangleHandler,
  draw_square: drawSquareHandler,
  draw_circle: drawCircleHandler,
  mouse_left: mouseMoveLeftHandler,
  mouse_right: mouseMoveRightHandler,
  mouse_down: mouseMoveDownHandler,
  mouse_up: mouseMoveUpHandler,
  mouse_position: positionHandler,
}

export default commandPalette
