import { styled } from '../../styles'

export const InnerNumberLabel = styled('label', {
  $draggable: '',
  cursor: 'ew-resize',
})

export const RangeGrid = styled('div', {
  variants: {
    hasRange: {
      true: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        columnGap: '$colGap',
        alignItems: 'center',
      },
    },
  },
})
