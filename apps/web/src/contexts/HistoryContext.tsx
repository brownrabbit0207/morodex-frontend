import { useRouter } from 'next/router'
import { useContext, createContext, useEffect, useState, useMemo } from 'react'

const historyManagerContext = createContext<ReturnType<typeof useHistoryManager>>(null)

export function HistoryManagerProvider({ children }) {
  const value = useHistoryManager()
  return <historyManagerContext.Provider value={value}>{children}</historyManagerContext.Provider>
}

export const useHistory = () => useContext(historyManagerContext)

function useHistoryManager() {
  const router = useRouter()
  const [history, setHistory] = useState<string[]>(() => [router?.asPath])

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (!shallow) {
        setHistory((prevState) => [...prevState, url])
      }
    }

    router.beforePopState(() => {
      setHistory((prevState) => prevState.slice(0, -2))
