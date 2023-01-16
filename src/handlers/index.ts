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
  prnt_scrn: { call: printScreenHandler },
  draw_rectangle: { call: drawRectangleHandler },
  draw_square: { call: drawSquareHandler },
  draw_circle: { call: drawCircleHandler },
  mouse_left: { call: mouseMoveLeftHandler, format: () => {} },
  mouse_right: { call: mouseMoveRightHandler, format: () => {} },
  mouse_down: { call: mouseMoveDownHandler, format: () => {} },
  mouse_up: { call: mouseMoveUpHandler, format: () => {} },
  mouse_position: { call: positionHandler, format: () => {} },
}

export default commandPalette
