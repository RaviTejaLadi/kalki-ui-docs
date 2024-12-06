export const RESIZE_DEFAULTS = {
  MIN_WIDTH: 200,
  MAX_WIDTH: '100%',
  INITIAL_WIDTH: '100%'
} as const;

export type ResizeWidth = number | '100%';