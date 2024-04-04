import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

const sponsors = [
  { name: 'Transistor', logo: logoTransistor },
  { name: 'Tuple', logo: logoTuple },
  { name: 'StaticKit', logo: logoStaticKit },
  { name: 'Mirage', logo: logoMirage },
  { name: 'Laravel', logo: logoLaravel },
  { name: 'Statamic', logo: logoStatamic },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
          Stay positive, be curious.
        </h2>
        <p className="mt-4 space-y-6 font-display text-2xl tracking-tight text-blue-900">
          In the serene future, our homes and workplaces are adorned with an
          extraordinary kind of ornamentation, a fusion of technology and nature
          that transcends traditional boundaries. Actually we can take
          inspiration from the Larix sibirica, commonly known as the Siberian
          larch, which is a species of tree in the pine family with a remarkable
          legacy rooted in longevity and resilience. Its ability to thrive in
          the harsh Siberian climate is a testament to its enduring nature,
          often reaching an impressive age that spans millennia. The most unique
          aspect of the Siberian larch is its root system - some specimens are
          known to have singular roots that date back around two thousand years.
          These ancient roots give life to generations of trees, making each
          stand a historical monument of nature&apos;s endurance. This marvel,
          once the realm of speculative science, has blossomed into reality: the
          storage of digital data in the DNA of plants. Just as each plant in
          our gardens and living spaces holds a unique genetic blueprint, they
          now also safeguard our digital heritage, from cherished photos to
          critical scientific data.
        </p>
        <p className="mt-4 space-y-6 font-display text-2xl tracking-tight text-blue-900">
          This innovation represents not merely a technological leap but a
          profound shift in our relationship with the natural world. Envision a
          future where the simple act of nurturing a plant in your living room
          contributes to the preservation of human knowledge and history. These
          living libraries grow alongside us, their leaves and flowers not only
          beautifying our spaces but also holding within them the sum of our
          collective experiences. As these genetically enhanced plants
          photosynthesize, they not only produce oxygen but also securely store
          exabytes of information, making every leaf and stem a testament to
          human ingenuity.
        </p>
        <p className="mt-4 space-y-6 font-display text-2xl tracking-tight text-blue-900">
          In this envisioned future, technology does not stand apart from nature
          but intertwines with it, offering a path where digital progress and
          environmental preservation are not mutually exclusive but mutually
          beneficial. This groundbreaking approach to data storage in the DNA of
          plants symbolizes a hopeful direction for humanity, where
          technological advancements nurture and are nurtured by the natural
          world, creating a legacy of knowledge and beauty for generations to
          come.
        </p>
        {/* <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div> */}
      </Container>
    </section>
  )
}
