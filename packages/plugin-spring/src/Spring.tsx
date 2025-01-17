import React from 'react'
import { useInputContext, Vector, Label, Row, styled } from 'leva/plugins'
import { SpringCanvas, SpringProps } from './SpringCanvas'

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  columnGap: '$colGap',
})

export function Spring() {
  const { label, displayValue, onUpdate, settings } = useInputContext<SpringProps>()

  return (
    <>
      <Row>
        <SpringCanvas />
      </Row>
      <Row input>
        <Label>{label}</Label>
        <Container>
          <Vector value={displayValue} settings={settings as any} onUpdate={onUpdate} />
        </Container>
      </Row>
    </>
  )
}
