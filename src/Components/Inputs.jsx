import React from 'react'

export const Inputs = ({label, value, onChange, placeholder, type = "text"}) => {
  return (
    <div class="mb-3">
      <label class="form-label">{label}</label>
      <input type={type} value={value} onChange={onChange} className="form-control" placeholder={placeholder} />
    </div>

  )
}
