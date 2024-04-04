'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

import techResearch from '@/images/tech-research.jpg'

const schedule = [
  {
    date: 'April 4',
    dateTime: '2022-04-04',
    summary:
      'The first day of the conference is focused on dark patterns for ecommerce.',
    timeSlots: [
      {
        name: 'Steven McHail',
        description: 'Not so one-time payments',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Jaquelin Isch',
        description: 'The finer print',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Dianne Guilianelli',
        description: 'Post-purchase blackmail',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      // {
      //   name: 'Ronni Cantadore',
      //   description: 'Buy or die',
      //   start: '1:00PM',
      //   end: '2:00PM',
      // },
      // {
      //   name: 'Erhart Cockrin',
      //   description: 'In-person cancellation',
      //   start: '2:00PM',
      //   end: '3:00PM',
      // },
      // {
      //   name: 'Parker Johnson',
      //   description: 'The pay/cancel switcheroo',
      //   start: '3:00PM',
      //   end: '4:00PM',
      // },
    ],
  },
  // {
  //   date: 'April 5',
  //   dateTime: '2022-04-05',
  //   summary:
  //     'Next we spend the day talking about deceiving people with technology.',
  //   timeSlots: [
  //     {
  //       name: 'Damaris Kimura',
  //       description: 'The invisible card reader',
  //       start: '9:00AM',
  //       end: '10:00AM',
  //     },
  //     {
  //       name: 'Ibrahim Frasch',
  //       description: 'Stealing fingerprints',
  //       start: '10:00AM',
  //       end: '11:00AM',
  //     },
  //     {
  //       name: 'Cathlene Burrage',
  //       description: 'Voting machines',
  //       start: '11:00AM',
  //       end: '12:00PM',
  //     },
  //     {
  //       name: 'Lunch',
  //       description: null,
  //       start: '12:00PM',
  //       end: '1:00PM',
  //     },
  // {
  //   name: 'Rinaldo Beynon',
  //   description: 'Blackhat SEO that works',
  //   start: '1:00PM',
  //   end: '2:00PM',
  // },
  // {
  //   name: 'Waylon Hyden',
  //   description: 'Turning your audience into a botnet',
  //   start: '2:00PM',
  //   end: '3:00PM',
  // },
  // {
  //   name: 'Giordano Sagucio',
  //   description: 'Fly phishing',
  //   start: '3:00PM',
  //   end: '4:00PM',
  // },
  //   ],
  // },
  // {
  //   date: 'April 6',
  //   dateTime: '2022-04-06',
  //   summary:
  //     'We close out the event previewing new techniques that are still in development.',
  //   timeSlots: [
  //     {
  //       name: 'Andrew Greene',
  //       description: 'Neuralink dark patterns',
  //       start: '9:00AM',
  //       end: '10:00AM',
  //     },
  //     {
  //       name: 'Heather Terry',
  //       description: 'DALL-E for passports',
  //       start: '10:00AM',
  //       end: '11:00AM',
  //     },
  //     {
  //       name: 'Piers Wilkins',
  //       description: 'Quantum password cracking',
  //       start: '11:00AM',
  //       end: '12:00PM',
  //     },
  //     {
  //       name: 'Lunch',
  //       description: null,
  //       start: '12:00PM',
  //       end: '1:00PM',
  //     },
  //     {
  //       name: 'Gordon Sanderson',
  //       description: 'SkyNet is coming',
  //       start: '1:00PM',
  //       end: '2:00PM',
  //     },
  //     {
  //       name: 'Kimberly Parsons',
  //       description: 'Dark patterns for the metaverse',
  //       start: '2:00PM',
  //       end: '3:00PM',
  //     },
  //     {
  //       name: 'Richard Astley',
  //       description: 'Knowing the game and playing it',
  //       start: '3:00PM',
  //       end: '4:00PM',
  //     },
  //   ],
  // },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      style={{ maxWidth: '960px' }}
      className="mx-auto grid max-w-4xl grid-cols-1 gap-y-6 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative flex-none sm:w-auto sm:pr-0',
                  'w-full',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-4xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="">
      <Image
        className="relative inset-0 w-40 object-cover transition duration-300 group-hover:scale-110"
        src={techResearch}
        alt=""
        priority
        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Possible outcomes of the DNA data storage
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The exploration of synthetic DNA for data storage embodies the
            intersection of technological innovation and environmental
            consciousness. While challenges remain in realizing its full
            potential, DNA storage offers a compelling vision of a future where
            data is stored not in sprawling data centers, but in the very fabric
            of life itself, aligning the digital age with the principles of
            sustainability and ecological harmony.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
