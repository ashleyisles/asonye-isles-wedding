import React from 'react'

export const Input = React.forwardRef(({ label, name, type = 'text', onBlur, onChange, value, placeholder = 'Type something...', invalid, errorMessage = 'Invalid input!' }, ref) => {
  return (
    <div className="flex flex-col">
      {
        label &&
        <label className="font-semibold text-sm mb-1">{ label }</label>
      }
      <input name={name} value={value} ref={ref} type={type} placeholder={placeholder} onChange={(e) => onChange && onChange(e)} onBlur={onBlur && (() => onBlur())} className={`${invalid ? 'focus:shadow-outline-red' : 'focus:shadow-outline-blue'} rounded-md border leading-10 border-gray-300 focus:outline-none px-4 text-base`}></input>
      {
        invalid &&
        <span className="text-red-600 text-xs font-semibold">{ errorMessage }</span>
      }
    </div>
  )
})
