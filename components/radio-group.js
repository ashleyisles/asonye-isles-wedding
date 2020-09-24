import React from 'react'

export const RadioGroup = React.forwardRef(({ invalid, errorMessage, options, name, label, onChange }, ref) => {

  return (
    <div className="flex flex-col">
      <label className="font-semibold text-sm mb-1">{ label }</label>
      <div role="group">
        {
          options.map(option => {
            return (
              <div key={`opt-${option.value}-${name}`}>
                <input value={option.value} ref={ref} id={`opt-${option.value}-${name}`} name={name} className="focus:outline-none checked:bg-white checked:border-4 checked:border-blue-600 focus:shadow-outline cursor-pointer h-4 w-4 bg-white border border-gray-400 text-blue-600 rounded-full flex-shrink-0 inline-block align-middle select-none appearance-none" type="radio"></input>
                <label htmlFor={`opt-${option.value}-${name}`} className="ml-3">
                  <span className="text-base font-normal text-gray-700">{ option.label }</span>
                </label>
              </div>
            )
          })
        }
      </div>
      {
        invalid &&
        <span className="text-red-600 text-xs font-semibold">{ errorMessage }</span>
      }
    </div>
  )
})
