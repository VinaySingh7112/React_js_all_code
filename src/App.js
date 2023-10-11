import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { useState, createContext } from 'react';
// import Lifecycle from './components/Lifecycle';
// import Hooks from './components/Hooks';
// import HookLogin from './components/HookLogin';
// import UseEffect from './components/UseEffect';
// import  Idacontrolled from './components/Idacontrolled';
// import CurdFunction from './components/CurdFunction';
// import Funcform from './components/Funcform';
// import TableSearch from './components/TableSearch';
// import Home from './components/Todo_app/HomeTodo';
// import About from './components/Todo_app/AboutTodo';
// import Contact from './components/Todo_app/ContactTodo';
// import Inp2 from './components/Inp2';

// import Todolist from './components/Todolist';
// import Localstorge from './components/Localstorge';



// import Clickcard from './components/Clickcard';
// import Controlled1 from './components/Controlled1';
// import Controlled from './components/Controlled';


// import Home from "./components/Home"
// import Reactbootstrap from "./components/Reactbootstrap"
// import Nav from "./components/Nav"
// import About from "./components/About"
// import Navbar1 from './components/routing/Navbar1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Nav1 from './components/Todo_app/Nav';
// import AApp from './components/AApp';
// import View from './components/View';
// import Items from './components/Items';
// import Prodect from './components/Todo_app/Prodect';
// import HomePa from './components/Useparams/HomePa';
// import AboutPa from './components/Useparams/AboutPa1';
// import About from './components/Useparams/About';
// import ContactPa from './components/Useparams/ContactPa';
// import NavPa from './components/Useparams/NavPa';
// import Inp from './components/Inp';
// import Carousel1 from "./components/Carousel"
// import Section from './components/Section';
// import Bootstrap from './components/bootstrap';
// import BasicExample from './components/Card';
// import { Card } from 'react-bootstrap';
// import Adddata from './components/Adddata';
// import Array from './components/Array';
// import Looping from './components/Looping';
// import Home1 from './components/Home1';
// import Home2 from './components/Home2';
// import Home3 from './components/Home3';
// import He from "./components/Ne";
// import Hee from "./components/Hee";
// import Incriment from './components/Incriment';
// import Firstcontext from './components/Context/Firstcontext';
import AAAap from './components/USEContext/AAAap';
import MMobile from './components/USEContext/MMobile';
import FFirst from './components/USEContext/FFirst';

// import { First } from 'react-bootstrap/esm/PageItem';
// import Fhel from './components/Fhel';
// import time from '.components/time'


// export let Data = createContext();
function App() {
   // const [name,setname]=useState("")

   // let fun =(a)=>{
   //     setname(a)
   // }
   // let data ={name:"Singh",age:23}
   // let obj ={name:"vinay" ,age:23,fun}
   return (
      <>

         {/* <Firstcontext data={data} fun={fun} name={name}/> */}
         {/* <Data.Provider value={obj} >
             <Firstcontext/>
        </Data.Provider> */}


         <BrowserRouter>

            <Routes>
               <Route path='/' element={<MMobile />} />
               <Route path='/first/:cat/:ind' element={<FFirst />} />
               <Route path='/' element={<MMobile />} />
   
               {/* <Route path="/" element={<Home />} /> */}
               {/* <Route path="/about" element={<About />}>
                  <Route path="/about" element={<Inabout />} />
                  <Route path="/about/first" element={<Addcard />} />
                  <Route path="/about/second" element={<Func3 />} />
               </Route> */}
               {/* <Route path="/item" element={<Myitems />} /> */}
               <Route path="/view" element={<View />} />
               <Route path="/view/:id/:name" element={<View />} />
               <Route path="/Contact" element={<Contact />} />
            </Routes>


            {/* <AAAap/> */}
            {/* <div className='routring__'>
        <Navbar1/>
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/contact' element={<Contact />}/> 
         </Routes>
        </div> */}
            {/* <Inp2/> */}
            {/* <AApp/> */}

            {/* <div className='Todolist w-100' style={{backgroundImage:`url('home_pic.jpg')`,backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'right', height: '315vh'}}>
            <Nav1  />
            
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} >
                  <Route path='/about/first' element={<Controlled/>}></Route>
                  <Route path='/about/second' element={<Funcform/>}></Route>
                  <Route path='/about/prodect' element={<Prodect/>}></Route>
                  <Route path=':id' element={<Prodect/>}></Route>
               </Route>
               <Route path='/items' element={<Items/>} />
               <Route path='/view' element={<View/>} />
               <Route path='/contact' element={<Contact />} />
            </Routes>
         </div> */}


            {/* 
      <div className='Todolist w-100' style={{backgroundImage:`url('home_pic.jpg')`,backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'right', height: '315vh'}}>
            <NavPa/>
            
            <Routes>
               <Route path='/' element={<HomePa />} />
               <Route path='/about' element={<About/>} >
                  <Route path='/about/' element={< Incriment/>}></Route>
                  <Route path='/about/first' element={<Controlled/>}></Route>
                  <Route path='/about/second' element={<Funcform/>}></Route>
                  <Route path='/about/prodect' element={<Prodect/>}></Route>
                  
               </Route>
               <Route path='/items' element={<Items/>} />
               <Route path='/view/:id/:name' element={<View/>} />
               <Route path='/view' element={<View/>} />
               <Route path='/contact' element={<ContactPa />} />
            </Routes>
         </div> */}


            {/* <CurdFunction/> */}
            {/* <Funcform/> */}
            {/* <TableSearch/> */}
            {/* <Idacontrolled/> */}
            {/* <UseEffect/> */}
            {/* <Todolist/> */}
            {/* <Localstorge/> */}
            {/* <Adddata/> */}
            {/* <Controlled1/> */}
            {/* <Controlled/> */}
            {/* <Lifecycle/> */}
            {/* <Hooks/> */}
            {/* <HookLogin/> */}

            {/* <div className=' m-4 p-4'>
        <Home2/>
        <Home3/>
     </div> */}
            {/* <Looping/> */}
            {/* <Clickcard/> */}
            {/* <Array/> */}
            {/* <He/> */}

            {/* <Card/> */}
            {/* <He/> */}
            {/* <He/> */}
            {/* <Hee/> */}
            {/* <Fhel/> */}

            {/* <Incriment/> */}

            {/* <BasicExample hello="React-Bootstrap11" data={true}/>
     <BasicExample hello="React-Bootstrap11" data={false}/>
     <div className='text-center w-100'>
     <Carousel1/>
     </div>
     <Carousel1 data={false}/>
     <Reactbootstrap data="Card Title11"/>
     <time/>
     <About/>

      <Navbar name={45} link={57}/> */}
            {/* <div className="App">
      <Carousel1/>
      <Reactbootstrap/>
      <h1>hello bro</h1>
      <p style={{color:"yellow"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id tenetur non rem assumenda et recusandae! Laudantium itaque, dolorum beatae dolor inventore odit? Quod cum enim deleniti magni obcaecati? Error, hic!</p>
      <Home/>
   
      <About/>
      <About/>
      <div className='d-flex'>
          <Nav/>
          <Nav/>
          <Nav/>
          <Section/>
      </div>
      <div className=''>
           <Bootstrap/>
      </div>

     
      </div> */}
         </BrowserRouter>
      </>

   );
}

export default App;

