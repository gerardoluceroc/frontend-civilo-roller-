import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import { HomePage } from "./pages/HomePage";
import { ClientRequestPage } from "./pages/ClientRequestPage";





function App() {
  return (

    <>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/client/request" element={<ClientRequestPage/>}/>
    </Routes>


  
    
    </>

  );
}

export default App;
