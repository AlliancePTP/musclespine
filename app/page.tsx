import Image from 'next/image'
import { Main } from '@/components/main'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Main />
    </main>
  )
}
