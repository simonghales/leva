import React from 'react'
import { NumberInput } from '../ValueInput'
import { LevaInputProps } from '../../types/'
import { InternalNumberSettings } from './number-plugin'
import { Label, Row } from '../UI'
import { useDragNumber } from '../../utils/hooks'
import { RangeGrid, InnerNumberLabel } from './StyledNumber'
import { RangeSlider } from './RangeSlider'
import { useInputContext } from '../../context'

type NumberProps = LevaInputProps<number, InternalNumberSettings> & {
    id?: string,
}

export function Number({ label, displayValue, onUpdate, onChange, settings, id }: NumberProps) {
    const bind = useDragNumber({ settings, onDrag: onUpdate })

    return (
        <NumberInput value={displayValue} onUpdate={onUpdate} onChange={onChange} id={id}>
            <InnerNumberLabel title={label.length > 1 ? label : ''} htmlFor={id} {...bind()}>
                {label}
            </InnerNumberLabel>
        </NumberInput>
    )
}

export function NumberComponent() {
    const props = useInputContext<NumberProps>()
    const { label, value, onUpdate, settings } = props
    const { min, max } = settings
    const hasRange = max !== Infinity && min !== -Infinity
    return (
        <Row input>
            <Label>{label}</Label>
            <RangeGrid hasRange={hasRange}>
                {hasRange && <RangeSlider value={parseFloat(value as any)} onDrag={onUpdate} {...settings} />}
                <Number {...props} label="value" />
            </RangeGrid>
        </Row>
    )
}
