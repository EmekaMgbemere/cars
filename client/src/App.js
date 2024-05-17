import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CentralAdmin from "../src/components/Admin/CentralAdmin";
import CentralAdminLeft from "../src/components/Admin/CentralAdminLeft";
import CentralAdminRight from "../src/components/Admin/CentralAdminRight";
import CentralAdminTop from "../src/components/Admin/CentralAdminTop";
import Login from "../src/components/Admin/Login";
import Apipage from "../src/components/Body/Apipage";
import Bestselling from "../src/components/Body/Bestselling";
import Hero from "../src/components/Body/Hero";
import Home from "../src/components/Body/Home";
import ProductCategory from "../src/components/Body/ProductCategory";
import Fresh from "./components/Body/Fresh";
import NoPage from "../src/components/Body/NoPage";
import Trending from "../src/components/Body/Trending";
import Nav from "../src/components/Nav/Nav";
import ShopAdminLeft from "../src/components/Shop/ShopAdminLeft/ShopAdminLeft";
import ShopAdminRight from "../src/components/Shop/ShopAdminRight/ShopAdminRight";
import Shopadmin from "../src/components/Shop/Shopadmin";
import Shopadmindashboard from "../src/components/Shop/Shopadmindashboard";
import Shopdisplay from "../src/components/Shop/Shopdisplay";
import { CreatedApi, MockData, Responsiveness, contextObject } from '../src/components/Body/Apipage';
import CentralAdminForm from './components/Admin/CentralAdminForm';
import Footer from './components/Footer/Footer';
import Blog from './components/Menu/Blog';
import CustomerTestimonials from './components/Body/CustomerTestimonials';
import FeaturedBrands from './components/Body/FeaturedBrands';
import Shops from './components/Body/Shops';
import SpecialOffers from './components/Body/SpecialOffers';
import Users from './components/Menu/Users';
import Test from './components/Body/Test';

import './App.css';

import './Scss.scss'

function App() {


  const mockData = useContext(MockData);

  const createdApi = useContext(CreatedApi);

  const apiresp = useContext(Responsiveness);


  return (
    <div className="App">
        <BrowserRouter>
              <contextObject.Responsiveness.Provider value={apiresp} >
                  <contextObject.MockData.Provider value={mockData} >
                      <contextObject.CreatedApi.Provider value={createdApi} >
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/centraladminform" element={<CentralAdminForm />} />
                                <Route path="/centraladmin" element={<CentralAdmin />} />
                                <Route path="/centraladminleft" element={<CentralAdminLeft />} />
                                <Route path="/centraladminright" element={<CentralAdminRight />} />
                                <Route path="/centraladmintop" element={<CentralAdminTop />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/apipage" element={<Apipage />} />
                                <Route path="/bestselling" element={<Bestselling />} />
                                <Route path="/hero" element={<Hero />} />
                                <Route path="/fresh" element={<Fresh />} />
                                <Route path="/trending" element={<Trending />} />
                                <Route path="/nav" element={<Nav />} />
                                <Route path="/shopadminleft" element={<ShopAdminLeft />} />
                                <Route path="/shopadminright" element={<ShopAdminRight />} />
                                <Route path="/shopadmin" element={<Shopadmin />} />
                                <Route path="/shopadmindashboard" element={<Shopadmindashboard />} />
                                <Route path="/shopdisplay" element={<Shopdisplay />} />
                                <Route path="/footer" element={<Footer />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/customertestimonials" element={<CustomerTestimonials />} />
                                <Route path="/featuredbrands" element={<FeaturedBrands />} />
                                <Route path="/shops" element={<Shops />} />
                                <Route path="/specialoffers" element={<SpecialOffers />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="/test" element={<Test />} />
                                <Route path="/productcategory" element={<ProductCategory />} />
                                <Route path="/nopage" element={<NoPage />} />
                        </Routes>
                    </contextObject.CreatedApi.Provider>
                  </contextObject.MockData.Provider>
              </contextObject.Responsiveness.Provider>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
