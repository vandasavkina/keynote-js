import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">TechResearch - </span>Data Storage in
            Synthetic DNA.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Navigating the Crossroads of Technological Innovation and
              Environmental Sustainability.
            </p>
            <p>
              In the quest for sustainable and innovative data storage
              solutions, synthetic DNA emerges as a frontier technology with the
              potential to revolutionize the field of electronics and
              computation. This article delves into the intricacies of DNA-based
              data storage, exploring its implications for environmental
              sustainability, the challenges inherent in coding and decoding
              information in DNA, and projections for its future development.
            </p>
            <p>
              Insights from interviews with coders at a leading academy
              underscore the urgency of addressing the environmental impacts of
              current computational practices and the potential of synthetic DNA
              to mitigate these concerns.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            More
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Presentation', 'TechResearch'],
              //['People Attending', '2,091'],
              ['Venue', 'Apple Developer Academy'],
              ['Location', 'Naples'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
