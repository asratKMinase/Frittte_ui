import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/admin/add-product";
import AdminDashboard from "./components/admin/admin-dashboard";
import CrdeiteCardRegister from "./components/creditCards/create-creditCrad";
import CrediteCardDashboard from "./components/creditCards/creditCrad-dashboard";
import CrediteCardDelete from "./components/creditCards/delete-crediteCard";
import Payment from "./components/creditCards/make-payment";
import AccountRegister from "./components/customers/create-an-account";
import CreateOrder from "./components/customers/create-an-order";
import CustomerDashboard from "./components/customers/customer-dashboard";
import CustomerLogin from "./components/customers/CustomerLogin";
import AccountDelete from "./components/customers/delete-an-account";
import AccountUpdate from "./components/customers/update-an-account";
import ViewMyOrders from "./components/customers/view-my-orders";
import UpdateOrder from "./components/customers/update-order";
import ViewAllFood from "./components/food/view-all-food";
import Welcome from "./WelcomePage";
import UpdateProduct from "./components/admin/update-product";
import DeleteProduct from "./components/admin/delete-product";
import "./App.css"

import "./App.css"


export const userContext = createContext();


function App() {


  const [user, setUser] = useState({username: "Guest" })

  return (
    <>
     <BrowserRouter>
          <userContext.Provider value={[user, setUser]}>
              <Routes>
                 <Route path="/admindashboard" element={<AdminDashboard />} />
                 <Route path="" element={<Welcome />} />
                 <Route path="/" element={<Welcome />} />
                 <Route path="/register" element={<AccountRegister />} />
                 <Route path="/customerdashboard" element={<CustomerDashboard/>} />
                 <Route path="/addanaccount" element={<AccountRegister/>}/>
                 <Route path="/updateanaccount" element={<AccountUpdate/>}/>
                 <Route path="/deleteanaccount" element={<AccountDelete/>}/>
                 <Route path="/creditcarddashboard" element={<CrediteCardDashboard/>} />
                 <Route path="/addcreditecard" element={<CrdeiteCardRegister/>}/>
                 <Route path="/deletecreditecard" element={<CrediteCardDelete/>} />
                 <Route path="/addcreditcard" element={<CrdeiteCardRegister/>}/>
                 <Route path="/deletecreditcard" element={<CrediteCardDelete/>}/>
                 <Route path="/Food-Items" element={<ViewAllFood/>}/>
                 <Route path="/make-payment" element={<Payment/>}/>
                 <Route path="/LogIn" element={<CustomerLogin/>}/>
                 <Route path="/create-an-order" element={<CreateOrder/>}/>
                 <Route path="/view-my-orders" element={<ViewMyOrders/>}/>
                 <Route path="/addproduct" element={<AddProduct/>}/>
                 <Route path="/update-an-order" element={<UpdateOrder/>}/>
                 <Route path="/update-product" element={<UpdateProduct/>}/>
                 <Route path="/delete-product" element={<DeleteProduct/>}/>

               </Routes>
          </userContext.Provider>
      </BrowserRouter>

     </>
  );
}

export default App;
