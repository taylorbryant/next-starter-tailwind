import Layout from '../components/layout'

function Home () {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center'>
        <img
          src='team-of-critters.svg'
          alt='A lots of little creatures'
          className='w-full max-w-xl'
        />

        <h2 className='p-3 my-8 text-lg font-bold bg-yellow-400 md:text-2xl'>
          Hi! Welcome to your first Next.js site.
        </h2>
      </div>
    </Layout>
  )
}

export default Home
