import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
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
    <main>
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
              <CardFooter className='flex flex-row  justify-between items-start'>
                <div>
                  <div className='text-sm text-muted-foreground'>
                    {wine.stock} in stock
                  </div>
                  <div className='text-sm font-semibold'>${wine.price}</div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                  <Button
                    variant='outline'
                    className='border-green-400 text-green-400 font-semibold'
                  >
                    Comprar
                  </Button>
                  <Button
                    variant='outline'
                    className='border-blue-400 text-blue-400 font-semibold'
                  >
                    Vender
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section>
        
      </section>
    </main>
  )
}

export default page
