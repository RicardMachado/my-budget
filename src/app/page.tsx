import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OrçaFácil',
}

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="flex justify-center text-2xl font-semibold">
        Aqui seja a Home Page
      </h1>
      <Button variant="default" asChild className="absolute right-8 top-8">
        <Link href={'/auth/sign-in'}>Login na Plataforma</Link>
      </Button>
    </div>
  )
}
