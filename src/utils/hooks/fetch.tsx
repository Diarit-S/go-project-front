import { useState, useEffect, useContext } from 'react'
import { HTTPMethod } from '@/models/Fetch'

export const useFetch = (
  url: string,
  callback?: (data: any) => void,
  noAutoFetch = false,
  method: HTTPMethod = HTTPMethod.GET,
  headers: Headers = new Headers({ Authorization: `Bearer ${sessionStorage.getItem('jwt')}` })
) => {
  console.log(url)
  const [data, setData] = useState<Record<string, any>>({})

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState(false)

  async function fetchData(finalUrl = url, body?: any) {
    try {
      setIsLoading(true)
      const response = await fetch(finalUrl, {
        method,
        headers,
        ...(body && { body: JSON.stringify(body) })
      })
      const jsonResponse = await response.json()
      setData(jsonResponse)
      callback && callback(jsonResponse)
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (!noAutoFetch) {
    useEffect(() => {
      if (!url) return

      fetchData()
    }, [url])
  }

  return { isLoading, data, error, fetchData }
}
