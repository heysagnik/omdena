"use client";
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Works', href: '#' },
  { name: 'About Us', href: '#' },
  
]

const people =[
  
  {
    name: 'Eeman ',
    role: 'Chapter Lead',
    twitterUrl: 'https://twitter.com/',
    linkedinUrl: 'https://www.linkedin.com/in/',
    imageUrl:
      '/Emam.png',
  },
  
  {
    name: 'Vaasu       ',
    role: "Chapter Lead",
    twitterUrl: 'https://twitter.com/lesliecdubs',
    linkedinUrl: 'https://www.linkedin.com/in/lesliealexander1/',
    imageUrl:
      '/Vaasu.png',
  },


]

const works = [
  
  {
    title: 'Open-Source Water Management and Forecasting Project in Algeria and Bhopal       ',
    imageUrl:
      '/image-2.png',
    link: '#',
    progress: 'WIP',
  },
  {
    title: 'Building an AI-Based Road Inspection System for Efficient Maintenance and Repair in India',
    imageUrl:
      '/image-1.png',
    link: '#',
    progress: 'COMPLETED',

  },
  {
    title: 'Monitoring the Water Quality Bhopal Region using Satellite Imagery and GIS Techniques',
    imageUrl:
      '/image-3.png',
    link: '#',
    progress: 'COMPLETED',

  },
]
export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-200">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">Omdena VIT Bhopal Local Chapter</span>
              <Image
                className="h-8 w-auto"
                src="/logo.svg"
                alt=""
                width='220'
                height="60"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="logo.svg"
                  alt=""
                  height="60"
                  width="220"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          /> */}
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Already Solved 2 Global challenges {' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Harnessing ML to solve Global challenges
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             Omdena VIT BHOPAL Local Chapter
            </p>
            
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          {/* <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />  */}
        </div>
      </div>
      <div>
      <div className="bg-white py-24 sm:py-32" id='about'>
              
      <div className="text-center" >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
          The mission of Omdena’s VIT Bhopal University is to run open-source AI projects to 
           solve challenges faced by the local community.
          </p>
            
          <span className="inline-flex rounded-md shadow-sm mt-8"/>
          
        <ul role="list" className="grid gap-x-8 gap-y-12 col-span-1 sm:grid-cols-4 sm:gap-y-16 xl:col-span-16 justify-items-center">
          <li/>
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex gap-x-4">
                <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="" />
                <div className='items-start'>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <div className="flex gap-x-2 mt-1">
                  <a href={person.linkedinUrl}><img className="h-7" src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="" /></a>
                 </div>
                </div>
              </div>
            </li>
          ))}
          <li/>
        </ul>
      </div>
    </div>
      </div>
      
      <div>
      <div className="bg-white py-10" id='works'>
        
      <div className=" px-8 py-10 mx-2  bg-slate-400 rounded-2xl sm:mx-10 sm:p-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
              Works
      </h1>

      <ul role="list" className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
         
          {works.map((project) => (
            <li key={project.title}>
               <div className="p-8 space-y-3 border-2 border-gray-500 bg-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
               <img className="w-100 object-cover rounded-md" src={project.imageUrl} alt="" />
                <p className="text-black ">
               {project.title}
                </p>
                <div className="flex justify-between">
                  <span className={`text-sm mt-3.5 font-medium py-0.5 px-4 rounded-3xl text-black align-middle ${project.progress === 'COMPLETED' ? 'bg-green-400' : 'bg-yellow-400'}`}>{project.progress}</span>
                <a href={project.link} className="inline-flex ">
                      <img src="https://www.svgrepo.com/download/429499/arrow-circle-direction-9.svg" alt="" className="h-8 py-1 sm:h-10" />
                </a>  
                </div>
            </div>
            </li>
          ))}
          <li/>
        </ul>
          
        </div>
        
      </div>
      


    </div>
    </div>
  )
}
