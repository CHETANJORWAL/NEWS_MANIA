import React, { Component } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Newscomponent from './components/Newscomponent'


export class App extends Component {
  render() {
    return (
      <div>
        
        <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Newscomponent  key={1} country="in"  category="general"/>}></Route>
          <Route path='/ENTERTAINMENT' element={<Newscomponent key={2} country="in" category="entertainment"/>}></Route>
          <Route path='/Health' element={<Newscomponent key={3}  country="in" category="health"/>}></Route>
          <Route path='/Science' element={<Newscomponent key={4} country="in" category="science"/>}></Route>
          <Route path='/SPORTS' element={<Newscomponent key={5} country="in" category="sports"/>}></Route>
          <Route path='/TECHNOLOGY' element={<Newscomponent key={6} country="in" category="technology"/>}></Route>
          <Route path='/Business' element={<Newscomponent key={7} country="in" category="business"/>}></Route>

        </Routes>
        </BrowserRouter>
        {/* businessentertainmentgeneralhealthsciencesportstechnology */}
      </div>
    )
  }
}

export default App








