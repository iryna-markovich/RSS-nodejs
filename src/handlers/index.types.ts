export type CommandPalette = {
  [index: string]: (value: number[]) => Promise<string | void>
}
