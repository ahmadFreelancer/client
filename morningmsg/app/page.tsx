import Image from 'next/image'
import Footer from '@/components/Footer'
import Message from '@/components/Message'

export default function Home() {
  return (
    <main>
      <Image
        className='img1'
        src="/images/cloud1.webp"
        height='299'
        width='299'
        alt="cloud"
      />
      <Image
        className='img2'
        src="/images/cloud2.webp"
        height='160'
        width='320'
        alt="cloudy"
      />

      <Message />

      <Footer />

    </main>
  )
}
