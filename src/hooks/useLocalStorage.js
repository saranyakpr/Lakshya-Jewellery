import { useEffect, useState } from 'react'

const STORAGE_EVENT = 'lakshya-storage-update'

export function notifyStorageUpdate(key) {
  window.dispatchEvent(new CustomEvent(STORAGE_EVENT, { detail: { key } }))
}

export function useLocalStorageValue(key) {
  const [value, setValue] = useState(() => window.localStorage.getItem(key))

  useEffect(() => {
    const update = (event) => {
      if (event.type === 'storage' && event.key !== key) {
        return
      }
      if (event.type === STORAGE_EVENT && event.detail?.key !== key) {
        return
      }
      setValue(window.localStorage.getItem(key))
    }

    window.addEventListener('storage', update)
    window.addEventListener(STORAGE_EVENT, update)

    return () => {
      window.removeEventListener('storage', update)
      window.removeEventListener(STORAGE_EVENT, update)
    }
  }, [key])

  return value
}
