import React, { useState } from 'react'
import Container from '../Container'
import Nav from '../Nav'
import avatar from '../../images/avatar.jpg'
import ProductType from '../NavProduct/components/ProductType'
import NavTop from '../NavTop'

const NavProductManager = () => {
    const [activeMenu , setActiveMenu] = useState(5)
  return (
    <div class="navFull">
        <Nav checkActiveMenu={() => setActiveMenu(activeMenu)} activeMenu={activeMenu}></Nav>
        <div class="nav__Left">
          <NavTop nameNav="Products" avatar={avatar}></NavTop>
          <div class="nav__Product">
            <Container>
              <div class="row">
                <div class="col-md-12">
                  <ProductType></ProductType>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
  )
}

export default NavProductManager