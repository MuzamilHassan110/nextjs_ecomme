import React from 'react'
import Image from 'next/image'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { TrashIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const CartProduct = ({item, index}) => {
  return (
                     <div key={index}>
                        <div className='flex justify-between border rounded-md p-4 my-2 bg-white hover:shadow-lg'>
                            <Link href="/product/p1" className='flex items-center'>
                                <Image src={console.log(item.image)} className='w-20 h-auto' width={200} height={200} />
                                <p className='font-semibold text-xl ml-2'>{item.title}</p>
                            </Link>
                            <div className='flex items-center gap-5'>
                                <div className='flex items-center gap-3'>
                                    <button onClick={handleDecrement} className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                        <MinusIcon className='w-6 h-6' />
                                    </button>
                                    <p className='font-semibold text-xl'>0</p>
                                    <button onClick={handleIncrement} className='p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed'>
                                        <PlusIcon className='w-6 h-6' />
                                    </button>
                                </div>
                                <p>x <span className='text-xl font-semibold'>999</span></p>
                                <button className='text-orange-500 hover:text-red-600'>
                                    <XCircleIcon className='w-6 h-6' />
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col items-end border-t py-4 mt-8'>
                            <p className='text-xl'>
                                Total <span className='font-bold text-green-500'>5000</span>
                            </p>
                            <button className='mt-4 py-2 px-6 bg-orange-500 text-white hover:bg-red-600 rounded-md'>
                                Checkout
                            </button>
                        </div>
                    </div>
  )
}
