import React from 'react'

const FormField = ({label, type}) => {
  return (
    <div>
        <div className="mb-4    ">
            <label htmlFor="number" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              {label}
            </label>
            <input
              type={type}
              name="number"
              id="number"
              autoComplete="current-password"
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
    </div>
  )
}

export default FormField