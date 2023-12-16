import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'

const wines = [
  {
    image:
      'https://casagrajales.com.co/wp-content/uploads/2020/11/VINO-ABOCADO-CASA-GRAJALES.jpg',
    name: 'Vino tinto',
    description: 'Vino tinto de la mejor calidad',
    price: 200,
    stock: 10
  },
  {
    image:
      'https://casagrajales.com.co/wp-content/uploads/2020/11/VINO-ABOCADO-CASA-GRAJALES.jpg',
    name: 'Vino tinto',
    description: 'Vino tinto de la mejor calidad',
    price: 200,
    stock: 10
  },
  {
    image:
      'https://casagrajales.com.co/wp-content/uploads/2020/11/VINO-ABOCADO-CASA-GRAJALES.jpg',
    name: 'Vino tinto',
    description: 'Vino tinto de la mejor calidad',
    price: 200,
    stock: 10
  },
  {
    image:
      'https://casagrajales.com.co/wp-content/uploads/2020/11/VINO-ABOCADO-CASA-GRAJALES.jpg',
    name: 'Vino tinto',
    description: 'Vino tinto de la mejor calidad',
    price: 200,
    stock: 10
  },
  {
    image:
      'https://casagrajales.com.co/wp-content/uploads/2020/11/VINO-ABOCADO-CASA-GRAJALES.jpg',
    name: 'Vino tinto',
    description: 'Vino tinto de la mejor calidad',
    price: 200,
    stock: 10
  },
  {
    image:
      'https://casagrajales.com.co/wp-content/uploads/2020/11/VINO-ABOCADO-CASA-GRAJALES.jpg',
    name: 'Vino tinto',
    description: 'Vino tinto de la mejor calidad',
    price: 200,
    stock: 10
  }
]

function page () {
  return (
    <section className='w-full pt-40 px-20 flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-4xl font-bold'>Panel de usuario</h1>
      <div className='userDashboard w-full justify-center items-center'>
        {wines.map((wine, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{wine.name}</CardTitle>
              <CardDescription>{wine.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image width={300} height={500} src={wine.image} alt='wine' />
            </CardContent>
            <CardFooter className='flex flex-col gap-2 justify-center items-start'>
              <div className='text-sm text-muted-foreground'>
                {wine.stock} in stock
              </div>
              <div className='text-sm font-semibold'>${wine.price}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default page
