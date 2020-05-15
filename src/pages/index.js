import Layout from '../components/layout'
import { useState } from 'react'

function Home () {
  const [Input, setInput] = useState()
  return (
    <Layout>
      <h1 className='mb-12 text-2xl font-bold text-gray-900 leading-7 sm:text-3xl sm:leading-9 sm:truncate'>
        HTML 2 React
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <div className='mx-auto overflow-hidden bg-white rounded-lg shadow max-w-7xl sm:px-6 lg:px-16'>
            <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
              <h2 className='text-2xl font-bold text-gray-900 leading-7 sm:text-3xl sm:leading-9 sm:truncate'>
                Input
              </h2>
            </div>
            <div className='max-w-full px-4 sm:p-6'>
              <label className='block'>
                <textarea
                  onChange={e => setInput(e.target.value)}
                  className='block w-full mt-1 form-textarea'
                  rows='11'
                  placeholder='Enter some long form content.'
                  value={Input}
                ></textarea>
              </label>
            </div>
            <div className='px-4 py-4 border-t border-gray-200 sm:px-6'>
              <span className='relative z-0 flex justify-center shadow-sm'>
                <button
                  onClick={() => setInput('')}
                  type='button'
                  className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
                >
                  Reset
                </button>
                <button
                  type='button'
                  className='relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
                >
                  Convert
                </button>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className='mx-auto overflow-hidden bg-white rounded-lg shadow max-w-7xl sm:px-6 lg:px-16'>
            <div className='px-4 py-5 border-b border-gray-200 sm:px-6'>
              <h2 className='text-2xl font-bold text-gray-900 leading-7 sm:text-3xl sm:leading-9 sm:truncate'>
                Output
              </h2>
            </div>
            <div className='max-w-full px-4 sm:p-6'>
              <label className='block'>
                <textarea
                  className='block w-full mt-1 form-textarea'
                  rows='11'
                  placeholder='Enter some long form content.'
                  value={Input}
                ></textarea>
              </label>
            </div>
            <div className='px-4 py-4 border-t border-gray-200 sm:px-6'>
              <span className='relative z-0 flex justify-center shadow-sm'>
                <button
                  onClick={() => setInput('')}
                  type='button'
                  className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
                >
                  Reset
                </button>
                <button
                  type='button'
                  className='relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
                >
                  Convert
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
