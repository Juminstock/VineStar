'use client'
import { ReactNode } from 'react'
import { UseInkProvider } from 'useink'
import { ShibuyaTestnet } from 'useink/chains'

function Providers ({ children }: { children: ReactNode }) {
  return (
    <UseInkProvider
      config={{
        dappName: 'Flipper',
        chains: [ShibuyaTestnet]
      }}
    >
      {children}
    </UseInkProvider>
  )
}

export { Providers }
