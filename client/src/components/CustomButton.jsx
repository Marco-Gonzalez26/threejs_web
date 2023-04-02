import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

export const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state)

  const generateStyle = () => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }
    if (type === 'outline') {
      return {
        borderWidth: 1,
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}>
      {title}
    </button>
  )
}
