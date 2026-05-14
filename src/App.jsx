// import React from 'react'
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Collection from './pages/Collection';
// import Placeoderd from './pages/Placeoderd';
// import Cart from './pages/Cart';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Singup from './components/Singup';

// const App = () => {
//   return (
//     <div className='px-4 sm:px-[3vw] md:px-[7vw] lg:px-[9vw]'>
      
//      <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/product' element={<Products />} />
//         <Route path='/collection' element={<Collection />} />
//         <Route path='/placeoderd' element={<Placeoderd />} />
//         <Route path='/cart' element={<Cart />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Singup />}/>
//       </Routes>
//     </div>
//   )
// }

// export default App;


import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div>
       <Todo />
    </div>
  )
}

export default App