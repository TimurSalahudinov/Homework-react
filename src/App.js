import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';
import MySection from './components/Section';



const App = () => {
  const users = [{name: "Timur", lastName:"Salahudinov", age: 29, id: 1},  
  {name: "Nursultan", lastName:"Djetybaev", age: 18, id: 2}, 
  {name: "Kalybek", lastName:"Askhatov", age: 27, id: 3}, 
  ]
  return (
    <div>
  <MyNavbar/>
  <MyFooter />
  <MySection users = {users}/>
    </div>
  );
};

export default App;