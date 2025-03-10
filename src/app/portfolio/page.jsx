"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Travel Agency Website',
    desc: 'Experience Hassle-Free Travel with Riya Travel – Your Gateway to the World!',
    img: '/riya-travel.jpeg',
    tags: ['Wordpress', 'Woo-commerce'],
    category: 'Web Development',
    github: 'https://riyatravelbh.com',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Digital Marketing Website',
    desc: 'Together, we help our clients achieve tangible, measurable results.',
    img: '/adsagori.jpeg',
    tags: ['Wordpress'],
    category: 'Web Development',
    github: '',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Anime Blog Website',
    desc: 'Anime Based Blog',
    img: '/animeuniverspot.jpeg',
    tags: ['Wordpress','anime blog','anime lover'],
    category: 'Web Development',
    github: 'http://animeuniversespot.com/',
  },
  {
    id: 4,
    color: 'from-violet-300 to-purple-300',
    title: 'Textitle Ecommerce Website',
    desc: 'Together, we help our clients achieve tangible, measurable results.',
    img: '/khas.jpeg',
    tags: ['Shopify', 'Ecommerce'],
    category: 'Web Development',
    github: 'https://www.khasstores.com/',
  },
  {
    id: 5,
    color: 'from-red-300 to-blue-300',
    title: 'Cafe Website',
    desc: 'Experience Hassle-Free Travel with Riya Travel – Your Gateway to the World!',
    img: '/sunnyside.jpeg',
    tags: ['ReactJS', 'Tailwind'],
    category: 'Web Development',
    github: 'https://sunnysidecafe.vercel.app/',
  },
  {
    id: 6,
    color: 'from-blue-300 to-violet-300',
    title: 'Fashion Design Website',
    desc: 'Together, we help our clients achieve tangible, measurable results.',
    img: '/tsavur.jpeg',
    tags: ['Shopify', 'Wordpress', 'Ecommerce', 'Payment Integration'],
    category: 'Web Development',
    github: 'https://braaishack.vercel.app/',
  },
  {
    id: 7,
    color: 'from-red-300 to-blue-300',
    title: 'Shopping Ecommerce Website',
    desc: 'Experience Hassle-Free Travel with Riya Travel – Your Gateway to the World!',
    img: '/tudd.jpeg',
    tags: ['Wordpress', 'Woo-commerce', 'Payment Integration'],
    category: 'Web Development',
    github: 'www.tudd.in',
  },
  {
    id: 8,
    color: 'from-blue-300 to-violet-300',
    title: 'Spicy Website',
    desc: 'Together, we help our clients achieve tangible, measurable results.',
    img: '/malloftaste.jpeg',
    tags: ['Shopify'],
    category: 'Web Development',
    github: 'www.malloftastes.com',
  },
  {
    id: 9,
    color: 'from-violet-300 to-purple-300',
    title: 'Shopify Ecommerce Website',
    desc: 'This is shopify ecommerce website',
    img: '/bunaai.jpeg',
    tags: ['Shopify','Ecommerce','Payment Integration'],
    category: 'Web Development',
    github: 'http://animeuniversespot.com/',
  },
  {
    id: 10,
    color: 'from-violet-300 to-purple-300',
    title: 'Builder Website',
    desc: 'Gather is style, Include in style.',
    img: '/danetti.jpeg',
    tags: ['NextJS', 'Tailwind', 'NodeJS', 'PostgressSQL'],
    category: 'Web Development',
    github: 'https://www.danetti.com/',
  },
  {
    id: 11,
    color: 'from-red-300 to-blue-300',
    title: 'Entrepreneurs Website',
    desc: 'Experience Hassle-Free Travel with Riya Travel – Your Gateway to the World!',
    img: '/eom.jpeg',
    tags: ['ReactJS', 'Tailwind','NextJS'],
    category: 'Web Development',
    github: 'https://entrepreneurs-of-madras-eom.vercel.app/',
  },
]

const Portfoliopage = () => {
  return (
    <motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 0 }}>
      <div className='min-h-screen py-16 px-4 md:px-8 lg:px-16'>
        <h1 className='text-4xl md:text-6xl xl:text-8xl text-center font-bold mb-12'>My Achievements</h1>

        <div className=' mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {items.map((item) => (
            <motion.div
              key={item.id}
              className={`rounded-lg p-6 bg-gradient-to-r ${item.color} shadow-lg`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className='relative w-full h-56 md:h-64 lg:h-72 mb-4'>
                <Image src={item.img} alt={item.title} fill className='object-fill object-center rounded-lg' />
              </div>
              <h2 className='text-xl md:text-2xl font-semibold'>{item.title}</h2>
              <p className='text-sm md:text-base mt-2 text-gray-100'>{item.desc}</p>
              <div className='flex flex-wrap gap-2 mt-4'>
                {item.tags.map((tag, index) => (
                  <span key={index} className='text-xs px-3 py-1 bg-white/20 rounded-full'>{tag}</span>
                ))}
              </div>
              <div className='mt-6'>
                <Link target='_blank' href={item.github} className='text-white underline'>View Project</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='h-screen w-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-4xl md:text-6xl xl:text-8xl'>
          Do you have a Project?
        </h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px]'
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>
                Mobile Developer & Frontend Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href='/contact'
            className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
          >
            Hire Me
          </Link>
        </div>
        </div>
    </motion.div>
  )
}

export default Portfoliopage;