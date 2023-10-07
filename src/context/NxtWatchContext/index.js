import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: true,
  savedList: [],
  addToSavedList: () => {},
  toggleTheTheme: () => {},
})

export default NxtWatchContext
