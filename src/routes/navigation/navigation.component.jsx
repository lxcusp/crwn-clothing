import { Link, Outlet } from 'react-router-dom'
import { Fragment } from 'react'
// The whole reason of using a fragment is because of reaction rules, 
// where a component must have a parent, a top level parent containing component.
// A fragment is useful if you don't actually want to render some specific HTML element.
// For example, if I just want a div that represents the actual navigation and then I want 
// the components that represent my pages down below. I don't need a wrapping div. I can just use a fragment.
// So with this fragment, once it actually finally renders, nothing's going to render on the page.
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'


const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation