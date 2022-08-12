import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
//import Home from '../pages';
import Home from '../pages/pokemonfinder';
import Mypokemon from '../pages/mypokemons';

function App() {
return (
	<Router>
	{/* <Navbar /> */}
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<Mypokemon/>} />
		{/* <Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-up' element={<SignUp/>} /> */}
	</Routes>
	</Router>
);
}

export default App;
