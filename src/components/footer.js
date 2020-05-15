function Footer () {
  return (
    <footer className='bg-blue-500'>
      <ul className='flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8'>
        <li>
          Created by{' '}
          <a
            href='https://twitter.com/marc_van_sax'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold'
          >
            Amadeus Mader
          </a>
        </li>

        <li>
          <a
            href='https://github.com/mozart409/html2react'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold'
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
