import Link from 'next/link'
import Image from 'next/image'
import banner from '../../public/next-pwa.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src={banner}
        alt="Next.js + PWA"
        width={500}
        height={500}
        priority
      />

      <section>
        <Link href={'https://next13-with-pwa-renovatt.vercel.app/'}>Next.js 13 + PWA</Link>
      </section>
    </main>
  )
}
