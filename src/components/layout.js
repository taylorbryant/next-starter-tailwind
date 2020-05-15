import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'

function Layout (props) {
  return (
    <div className='flex flex-col min-h-screen'>
      {/*  <Header /> */}
      <main className='flex-1 w-full p-4 mx-auto max-w-7xl md:px-8 md:py-16'>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
