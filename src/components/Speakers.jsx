'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'

const days = [
  {
    name: 'DNA Storage',
    date: 'Phases',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Encoding',
        role: 'In DNA data storage encoding, information is first converted into binary format (0 and 1), then mapped into DNA bases (A, C, T, G) in segments. Metadata are added for error correction and decoding guidance, respectively, culminating in DNA sequences ready for synthesis, transforming binary data into DNA for storage.',
        image: stevenMchailImage,
      },
      {
        name: 'Synthesis',
        role: 'The process of making DNA data storage physical involves chemical synthesis, traditionally through the phosphoramidite method, or more recently, enzymatic routes for eco-friendliness. Both techniques produce identical DNA strands, with growing market participation aiming to expand environmentally sustainable options.',
        image: jaquelinIschImage,
      },
      {
        name: 'Storage',
        role: "Preserving DNA's integrity involves storing it through freeze-drying in inert-atmosphere chambers to prevent degradation. Technological research explore encapsulating DNA in particles or embedding it in silicon wafers, offering robust alternatives for securing data longevity, spanning from decades to millennia.",
        image: dianneGuilianelliImage,
      },
      {
        name: 'Sequencing',
        role: 'After storing data in DNA, retrieving it requires accessing the preserved DNA and determining its base sequence. The prevalent approach for this is DNA sequencing, utilizing current sequencing technologies to decode the stored information accurately.',
        image: ronniCantadoreImage,
      },
      {
        name: 'Decoding',
        role: 'To retrieve information stored in DNA, the decoding algorithm converts the DNA sequence back into binary data, mapping As, Cs, Ts, and Gs to 0s and 1s. This process includes arranging DNA strands in the correct order and performing error checking and correction, ensuring accurate data recovery.',
        image: erhartCockrinImage,
      },
      // {
      //   name: 'Parker Johnson',
      //   role: 'UI Designer at MomCorp',
      //   image: parkerJohnsonImage,
      // },
    ],
  },
  {
    name: 'DNA Storage',
    date: 'Challenges',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Encoding Efficiency',
        role: 'Converting digital data into sequences of DNA bases requires sophisticated algorithms to ensure data integrity and accessibility',
        image: damarisKimuraImage,
      },
      {
        name: 'Synthesis & Sequencing Cost',
        role: 'Currently, synthesizing and sequencing DNA are expensive processes, limiting the scalability of DNA data storage',
        image: ibrahimFraschImage,
      },
      {
        name: 'Error Rates',
        role: 'The potential for errors in DNA synthesis and sequencing necessitates the development of advanced error-correction methods.',
        image: cathleneBurrageImage,
      },
      {
        name: 'Storage and Retrieval Speed',
        role: 'Compared to conventional storage media, DNA storage currently exhibits slower read and write speeds, posing a challenge for applications requiring rapid data access',
        image: rinaldoBeynonImage,
      },
      // {
      //   name: 'Waylon Hyden',
      //   role: 'DevOps at RDA Corporation',
      //   image: waylonHydenImage,
      // },
      // {
      //   name: 'Giordano Sagucio',
      //   role: 'Game Developer at Soylent Corp',
      //   image: giordanoSagucioImage,
      // },
    ],
  },
  // {
  //   name: 'Interviews',
  //   date: 'April 6',
  //   dateTime: '2022-04-06',
  //   speakers: [
  //     {
  //       name: 'Andrew Greene',
  //       role: 'Frontend Developer at Ultratech',
  //       image: andrewGreeneImage,
  //     },
  //     {
  //       name: 'Heather Terry',
  //       role: 'Backend Developer at Xanatos Enterprises',
  //       image: heatherTerryImage,
  //     },
  //     {
  //       name: 'Piers Wilkins',
  //       role: 'Full stack Developer at BiffCo',
  //       image: piersWilkinsImage,
  //     },
  //     {
  //       name: 'Gordon Sanderson',
  //       role: 'Mobile Developer at Cobra Industries',
  //       image: gordonSandersonImage,
  //     },
  //     {
  //       name: 'Kimberly Parsons',
  //       role: 'Game Developer at Tyrell Corporation',
  //       image: kimberlyParsonsImage,
  //     },
  //     {
  //       name: 'Richard Astley',
  //       role: 'CEO at Roll Out',
  //       image: richardAstley,
  //     },
  //   ],
  // },
  // {
  //   name: 'Interviews',
  //   date: 'April 7',
  //   dateTime: '2022-04-06',
  //   speakers: [
  //     {
  //       name: 'Andrew Greene',
  //       role: 'Frontend Developer at Ultratech',
  //       image: andrewGreeneImage,
  //     },
  //     {
  //       name: 'Heather Terry',
  //       role: 'Backend Developer at Xanatos Enterprises',
  //       image: heatherTerryImage,
  //     },
  //     {
  //       name: 'Piers Wilkins',
  //       role: 'Full stack Developer at BiffCo',
  //       image: piersWilkinsImage,
  //     },
  //     {
  //       name: 'Gordon Sanderson',
  //       role: 'Mobile Developer at Cobra Industries',
  //       image: gordonSandersonImage,
  //     },
  //     {
  //       name: 'Kimberly Parsons',
  //       role: 'Game Developer at Tyrell Corporation',
  //       image: kimberlyParsonsImage,
  //     },
  //     {
  //       name: 'Richard Astley',
  //       role: 'CEO at Roll Out',
  //       image: richardAstley,
  //     },
  //   ],
  // },
  // {
  //   name: 'Interviews',
  //   date: 'April 8',
  //   dateTime: '2022-04-06',
  //   speakers: [
  //     {
  //       name: 'Andrew Greene',
  //       role: 'Frontend Developer at Ultratech',
  //       image: andrewGreeneImage,
  //     },
  //     {
  //       name: 'Heather Terry',
  //       role: 'Backend Developer at Xanatos Enterprises',
  //       image: heatherTerryImage,
  //     },
  //     {
  //       name: 'Piers Wilkins',
  //       role: 'Full stack Developer at BiffCo',
  //       image: piersWilkinsImage,
  //     },
  //     {
  //       name: 'Gordon Sanderson',
  //       role: 'Mobile Developer at Cobra Industries',
  //       image: gordonSandersonImage,
  //     },
  //     {
  //       name: 'Kimberly Parsons',
  //       role: 'Game Developer at Tyrell Corporation',
  //       image: kimberlyParsonsImage,
  //     },
  //     {
  //       name: 'Richard Astley',
  //       role: 'CEO at Roll Out',
  //       image: richardAstley,
  // },
  // ],
  // },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Process and Challenges
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Synthetic DNA storage involves encoding binary data into sequences
            of DNA bases (adenine, cytosine, guanine, and thymine), which can
            then be synthesized and stored. The transition to DNA-based data
            storage comes along with technical challenges. Let's take a closer
            look at these points:
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}
