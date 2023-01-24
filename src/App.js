import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import {LandingPage} from './components/LandingPage/LandingPage.jsx';
import Detail  from './components/detail/AnimalDetail/AnimalDetail.jsx';
import { Home } from './components/Home/Home.jsx';
import { Navigation } from "./components/routes/Navigation"
function App() {

  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  
  const modifyModalState =(isOpen)=>{
      console.log("🚀 ~ file: cashierModalHelper.js:8 ~ HandleClose ~ isOpen", isOpen)
    dispatch(setOpenModal(isOpen))
    
  }
  return (
    // <Route path="/" element={<Dashboard />}>
    
    <Navigation/>
  
  
    // <BrowserRouter>
    // <Routes>
    // <Route exact path = '/detail/:id' element={<Detail/>}/>
    //   <Route exact path = '/home' element={<Home/>}/>
    //   <Route exact path = '/' element = {<LandingPage/>}/>
    //   </Routes>
    // </BrowserRouter>
      
  );
}

export default App;
