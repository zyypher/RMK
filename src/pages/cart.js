import Header from '../components/headers/Header'
import Footer from '../components/footers/Footer'
import CartHome from '../components/modules/Carthome/CartHome'
import Newsletter from '../components/modules/newsletter/Newsletter'
const Cart = () => {
  return (
    <>

      <Header/>
      <CartHome/>
      <Newsletter title="Get free Pro memberships for your high school class"/>
      <Footer/>
    </>
  )
}

export default Cart