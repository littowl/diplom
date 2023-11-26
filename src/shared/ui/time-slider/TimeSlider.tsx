import { Slider } from '@mantine/core'

interface TimeSliderProps {
  id: number
  onChange: (id: number, value: number) => void
}

export const TimeSlider = ({ id, onChange }: TimeSliderProps) => {
  const valueLabelFormat = (value: number) => {
    const units = ['сек.', 'мин.']
    let unitIndex = 0
    let scaledValue = value
    while (scaledValue >= 60 && unitIndex < units.length - 1) {
      unitIndex += 1
      scaledValue = Math.floor(scaledValue / 60)
    }

    return unitIndex === 0
      ? `${scaledValue} ${units[unitIndex]}`
      : `${scaledValue} ${units[unitIndex]} ${
          value - 60 * Math.floor(value / 60)
        }сек.`
  }

  return (
    <Slider
      marks={[
        { value: 30, label: '30 сек.' },
        { value: 60, label: '1 мин.' },
        { value: 90, label: '1.5 мин.' },
        { value: 120, label: '2 мин.' },
        { value: 150, label: '2.5 мин' },
      ]}
      max={150}
      defaultValue={30}
      label={valueLabelFormat}
      thumbSize={20}
      onChange={(value) => onChange(id, value)}
    />
  )
}
