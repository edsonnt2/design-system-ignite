import {
  radii,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    minHeight: 'space',
    maxHeight: 'space',
    width: 'space',
    minWidth: 'space',
    maxWidth: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
