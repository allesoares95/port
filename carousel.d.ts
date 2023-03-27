import { ReactNode } from 'react'

declare module 'react-elastic-carousel' {
  import type { ReactElasticCarouselProps as Props } from 'react-elastic-carousel/dist'
  export interface ReactElasticCarouselProps extends Props {
    children: ReactNode[]
  }
}
