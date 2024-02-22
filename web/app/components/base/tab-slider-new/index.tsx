import type { FC } from 'react'
import cn from 'classnames'

type Option = {
  value: string
  text: string
}
type TabSliderProps = {
  className?: string
  value: string
  onChange: (v: string) => void
  options: Option[]
}
const TabSliderNew: FC<TabSliderProps> = ({
  className,
  value,
  onChange,
  options,
}) => {
  return (
    <div className={cn(className, 'relative flex')}>
      {options.map(option => (
        <div
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            'mr-1 px-3 py-[5px] h-[28px] rounded-lg border-[0.5px] border-transparent text-gray-700 text-[13px] font-medium leading-[18px] cursor-pointer hover:bg-gray-200',
            value === option.value && 'bg-white border-gray-200 shadow-xs text-primary-600 hover:bg-white',
          )}
        >
          {option.text}
        </div>
      ))}
    </div>
  )
}

export default TabSliderNew
