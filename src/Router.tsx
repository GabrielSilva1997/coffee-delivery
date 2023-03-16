import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './Pages/Checkout'
import { Home } from './Pages/Home'
import { Sucess } from './Pages/Sucess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  )
}
