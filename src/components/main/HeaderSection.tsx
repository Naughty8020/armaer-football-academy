'use client'

import { useState, useEffect } from 'react'
import { ProgramsItem } from '@/lib/programs'

export function usePrograms() {
  const [programs, setPrograms] = useState<ProgramsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/programs')
      .then(res => res.json())
      .then((data: ProgramsItem[]) => {
        setPrograms(data)
        setLoading(false)

      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return { programs, loading }
}