import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/css/style.css'
import '../../style/css/tailwindcss.css'
import product2 from '../../images/products/product2.jpg'
import product3 from "../../images/products/product3.jpg"
import product4 from "../../images/products/sofa-1.png"
import product5 from "../../images/products/sofa-2.png"
import product6 from "../../images/category-1.jpg" 
import product7 from "../../images/category-3.jpg"
import product8 from "../../images/category-4.jpg"
import product9 from "../../images/category-3.jpg" 
import product10 from "../../images/category-1.jpg"
import product11 from "../../images/products/product9.jpg"
import method from "../../images/payment-method.png" 

const Home = () => {
    return (
        <div>

    <>
        <div className="header_top py-2 px-1">

        <div className="container lg:w-10/12 grid grid-cols-[50%_0%_50%] lg:grid-cols-[25%_50%_25%] items-center">
                {/* <!-- logo --> */}
                <div className="header_logo font-bold text-2xl first-letter:text-4xl underline">
                    <Link to="index.html">Sho<span className="text-4xl">P</span> <span className="text-secondary text-4xl">BD</span></Link>
                </div>

                {/* <!-- search --> */}
                <div className="header_search w-full flex invisible opacity-0 lg:visible lg:opacity-100">
                    <input className="w-full h-10 py-2 px-4 border border-secondary border-r-0 rounded-md outline-none focus:border-secondary" type="search" name="" id="" placeholder="Search..."/>
                    <button className="w-60 bg-secondary border border-secondary rounded-r-md text-light font-medium -ml-3">Search Now</button>

                </div>


                {/* <!-- icon --> */}
                <div className="header_icon flex justify-end space-x-4">

                    {/* <!-- User Wish List --> */}
                    <Link to="#" className="relative text-center">
                        <div className="text-primary text-lg lg:text-2xl font-semibold">
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className="text-xs leading-3">Wish List</div>
                        <div className="h-5 w-5 absolute right-0 -top-1 bg-secondary2 rounded-full text-light flex items-center justify-center p-2 text-xs font-medium">10</div>
                    </Link>
           

                    {/* <!-- User Cart --> */}
                    <div className="relative group">
                        
                        <Link to="#" className="relative text-center">
                            <div className="text-primary text-lg lg:text-2xl font-semibold">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <div className="h-5 w-5 absolute left-5 -top-1 bg-secondary2 rounded-full text-light flex items-center justify-center p-2 text-xs font-medium">05</div>
    
                        </Link>
                    {/* <!-- User Cart Dropdown --> */}
                            <div className="bg-light p-4 absolute top-full -right-12 sm:right-0 w-[300px] shadow border-b-4 border-secondary2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300 z-10">
                                <h4 className="text-lg my-3 border-b border-[#ddd] pb-3">2 Items Added</h4>

                                 {/* <!-- Item One --> */}
                                    <div className="flex space-x-3 pb-3 ">
                                        <div className="w-20">
                                            <img className="w-full" src={product2} alt=""/>
                                        </div>
                                        <div className="w-40">
                                            <h4>Men's Casual Shoes</h4>
                                            <span>X1</span>
                                            <span>$50</span>
                                        </div>
                                        <div>
                                            <span><Link to="#">X</Link></span>
                                        </div>
                                    </div>
                                 {/* <!-- Item One --> */}
                                    <div className="flex space-x-3 pb-3 ">
                                        <div className="w-20">
                                            <img className="w-full" src={product3} alt=""/>
                                        </div>
                                        <div className="w-40">
                                            <h4>Men's Casual Shoes</h4>
                                            <span>X1</span>
                                            <span>$50</span>
                                        </div>
                                        <div>
                                            <span><Link to="#">X</Link></span>
                                        </div>
                                    </div>
                      
                                  <div className="flex justify-between">
                                      <Link to="#" className="bg-secondary py-2 px-6 text-light font-medium rounded uppercase text-sm">View Cart</Link>
                                      <Link to="#" className="bg-secondary py-2 px-6 text-light font-medium rounded uppercase text-sm">Checkout</Link>
                                                   
                                </div>
                            </div>
                    {/* <!-- User Cart /Dropdown --> */}
                    </div>

           
                    {/* <!--User Account  --> */}
                    <div className="relative group">

                        <Link to="#" className="text-center">
                            <div className="text-primary text-lg lg:text-2xl font-semibold">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="text-xs leading-3">Account</div>
    
                        </Link>
                            {/* <!-- Account Dropdown --> */}
                            <div className="bg-light p-4 absolute top-full right-0 w-[230px] shadow border-b-4 border-secondary2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300 z-10">
                              <h4 className="text-sm my-3 text-center">Welcome to ShopNowBD</h4>
                                <div className="flex justify-between">
                                    <Link to="register.html" className="bg-secondary py-2 px-6 text-light font-medium rounded uppercase text-sm">Join</Link>
                                    <Link to="login.html" className="bg-secondary py-2 px-6 text-light font-medium rounded uppercase text-sm">Sign In</Link>
                                                 
                                 </div>
                                 <ul className="space-y-2 pt-4">
                                    <li><Link className="hover:text-secondary duration-200" href="#">My Account</Link></li>
                                    <li><Link className="hover:text-secondary duration-200" href="#">My Order</Link></li>
                                    <li><Link className="hover:text-secondary duration-200" href="#">My Wish List</Link></li>
                                    <li><Link className="hover:text-secondary duration-200" href="#">My Cart</Link></li>
                                    <li><Link className="hover:text-secondary duration-200" href="login.html">Logout</Link></li>
                                 </ul>
                                </div>
                            {/* <!-- Account Dropdown --> */}


                    </div>

                </div>

            </div>
         </div>



         {/* <!------------ Main  Header ----------> */}
        <nav className="bg-primary">

            <div className="container lg:w-10/12 grid grid-cols-2 md:grid-cols-[25%_50%_25%] items-center">

                {/* <!-- Categorys --> */}
                    <div className="all_categories bg-secondary inline-block w-max py-3 px-5 text-light font-medium tracking-wide cursor-pointer relative group">
                        <span><i className="fa-solid fa-bars text-xl"></i><Link className="ml-3" href="#"></Link>All Categories</span>   
                        
                        <ul className="absolute left-0 top-full bg-light w-max shadow text-primary divide-y divide-[#ddd] px-4 invisible opacity-0 group-hover:opacity-100 group-hover:visible  duration-300 transition">
                            <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Men's Shart</Link></li>
                            <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Men's Chlothing</Link></li>
                            <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Men's Shoes</Link></li>
                            <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Women's Clothing</Link></li>
                            <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Women's Shoes</Link></li>
                            <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Sharee</Link></li>
                        </ul>
                                                
                
                    </div>

                    {/* <!-- Header Menu --> */}
                    <div className=" flex justify-end md:flex-none md:justify-start">

                        <div className="toggle_bar pr-4 md:pr-0 md:pl-10 lg:pl-0 text-light text-lg relative group cursor-pointer"><i className="fa-solid fa-bars lg:hidden"></i>

                            <ul className="header_main_menu bg-light lg:bg-primary w-[180px] lg:w-full">  

                                <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Home</Link></li>
                                <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">About Us</Link></li>
                                <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Services</Link></li>
                                <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Shop</Link></li>
                                <li className="py-2"><Link className="hover:text-secondary duration-200" href="#">Contact</Link></li>
                            </ul>
                        </div>
                        
                    </div>

                    {/* <!-- Header Phone --> */}
                <div className="hidden md:block">
                    <div className="flex justify-end text-light items-center">
                        <ul className="flex space-x-2">
                            <li><Link className="h-8 w-8 leading-8 bg-primary text-light inline-block text-center rounded-full hover:bg-secondary2 duration-200" href="https://www.facebook.com/shahnurmrahat" target="_blank"><i className="fa-brands fa-facebook"></i></Link></li>
                            <li><Link className="h-8 w-8 leading-8 bg-primary text-light inline-block text-center rounded-full hover:bg-secondary2 duration-200" href="https://www.linkedin.com/in/mohammadrahat/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link></li>
                            <li><Link className="h-8 w-8 leading-8 bg-primary text-light inline-block text-center rounded-full hover:bg-secondary2 duration-200" href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                        </ul>
                    </div>
                </div>



                </div>
            </nav>



    </>
    {/* <!------------  Banner Section ------------------ --> */}
    <section className="" style={{ background: 'url(./images/banner-1.jpg)' }} > 
        <div className="bg-no-repeat bg-center bg-cover container w-11/12 lg:w-10/12 grid lg:grid-cols-2 items-center h-[400px] md:h-[480px] lg:h-[560px]">

            <div className="banner_title">
                <h1 className="text-primary text-[34px] md:text-[46px] lg:text-[50px] xl:text-[60px] leading-[40px] md:leading-[55px] font-bold">Best Collection for Home Decoration</h1>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae illo veritatis dignissimos nihil accusamus exercitationem, atque molestias aliquid tempora.</p>
                <Link to="single_product.html" className="default_btn">Shop Now</Link>
            </div>


        </div>
    </section>
    {/* <!------------  Banner Section ------------------ --> */}


    {/* <!--  Shipping  --> */}
    <section className="py-[50px] md:py-[80px]">
        <div className="container w-11/12 lg:w-10/12 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">

                <div className="flex space-x-5 p-5 border border-[#ddd] hover:border-secondary duration-200 items-center justify-center rounded">
                    <span className="text-4xl text-secondary">
                        <i className="fa-solid fa-car"></i>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg text-primary">Free Shipping</h3>
                        <span>Order Over $200</span>
                    </div>
                </div>
                <div className="flex space-x-5 p-5 border border-[#ddd] hover:border-secondary duration-200 items-center justify-center rounded">
                    <span className="text-4xl text-secondary">
                        <i className="fa-solid fa-car"></i>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg text-primary">Free Shipping</h3>
                        <span>Order Over $200</span>
                    </div>
                </div>
                <div className="flex space-x-5 p-5 border border-[#ddd] hover:border-secondary duration-200 items-center justify-center rounded">
                    <span className="text-4xl text-secondary">
                        <i className="fa-solid fa-car"></i>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg text-primary">Free Shipping</h3>
                        <span>Order Over $200</span>
                    </div>
                </div>
                <div className="flex space-x-5 p-5 border border-[#ddd] hover:border-secondary duration-200 items-center justify-center rounded">
                    <span className="text-4xl text-secondary">
                        <i className="fa-solid fa-car"></i>
                    </span>
                    <div>
                        <h3 className="font-semibold text-lg text-primary">Free Shipping</h3>
                        <span>Order Over $200</span>
                    </div>
                </div>


        </div>
    </section>
    {/* <!--  Shipping  --> */}


    {/* <!--  Offerring Section --> */}

    <section className="pb-[40px]">
        <div className="container w-11/12 lg:w-10/12 grid lg:grid-cols-2 lg:gap-4">
        <div className="offer_wraper sm:flex items-center justify-between bg-lightGray py-6 px-4 sm:px-10 group rounded">
                <div className="pr-5">
                    <span className="text-lg text-secondary2">45% Offer Now</span>
                    <h3 className="text-2xl font-semibold text-primary">Free Shipping</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, dignissimos!</p>
                    <Link to="#" className="default_btn">Shop Now</Link>
                </div>
                <div className="w-56 lg:ml-auto mt-5 sm:mt-0">
                    <img className="group-hover:scale-110 duration-300" src={product4} alt=""/>
                </div>
                    </div>

            <div className="offer_wraper sm:flex items-center justify-between bg-lightGray py-6 px-4 sm:px-10 group rounded">
                <div className="pr-5">
                    <span className="text-lg text-secondary2">45% Offer Now</span>
                    <h3 className="text-2xl font-semibold text-primary">Free Shipping</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, dignissimos!</p>
                    <Link to="#" className="default_btn">Shop Now</Link>
                </div>
                <div className="w-56 lg:ml-auto mt-5 sm:mt-0">
                    <img className="group-hover:scale-110 duration-300" src={product5} alt=""/>
                </div>
                    </div>
                </div>
    </section>
    {/* <!--  Offerring Section --> */}


    {/* <!--  Shop By Category  --> */}
    <section className="py-[50px] md:py-[80px]">
        <div className="container w-11/12 lg:w-10/12 mb-6">
            <h1 className="text-2xl md:text-4xl font-semibold">SHOP BY CATEGORY</h1>
        </div>
        <div className="container w-11/12 lg:w-10/12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* <!-- Category Item --> */}
            <div className="main_div relative group">
                <Link to="single_product.html">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/40  rounded"></div>
                    <img className="w-full rounded" src={product6} alt=""/>
    
                    <div className="absolute top-[4%] left-[4%] md:top-[44%] md:left-[36%]">
                        <h3 className="font-medium text-light text-2xl tracking-wide">Beedroom</h3>
                    </div>
    
                    <div className="w-full bg-light rounded-b border border-lightGray hover:text-secondary2 absolute left-0 -bottom-4 text-center p-4 group invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-0 duration-300">
                        <Link to="#">View More Details</Link>
                    </div>
                </Link>

            </div>
            {/* <!-- Category Item --> */}
            <div className="main_div relative group">
                <Link to="single_product.html">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/40  rounded"></div>
                    <img className="w-full rounded" src={product7} alt=""/>
    
                    <div className="absolute top-[4%] left-[4%] md:top-[44%] md:left-[36%]">
                        <h3 className="font-medium text-light text-2xl tracking-wide">Beedroom</h3>
                    </div>
    
                    <div className="w-full bg-light rounded-b border border-lightGray hover:text-secondary2 absolute left-0 -bottom-4 text-center p-4 group invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-0 duration-300">
                        <Link to="#">View More Details</Link>
                    </div>
                </Link>

            </div>
            {/* <!-- Category Item --> */}
            <div className="main_div relative group">
                <Link to="#">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/40  rounded"></div>
                    <img className="w-full rounded" src={product8} alt=""/>
    
                    <div className="absolute top-[4%] left-[4%] md:top-[44%] md:left-[36%]">
                        <h3 className="font-medium text-light text-2xl tracking-wide">Beedroom</h3>
                    </div>
    
                    <div className="w-full bg-light rounded-b border border-lightGray hover:text-secondary2 absolute left-0 -bottom-4 text-center p-4 group invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-0 duration-300">
                        <Link to="#">View More Details</Link>
                    </div>
                </Link>

            </div>
            {/* <!-- Category Item --> */}
            <div className="main_div relative group">
                <Link to="single_product.html">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/40  rounded"></div>
                            <img className="w-full rounded" src={ product9} alt=""/>
    
                    <div className="absolute top-[4%] left-[4%] md:top-[44%] md:left-[36%]">
                        <h3 className="font-medium text-light text-2xl tracking-wide">Beedroom</h3>
                    </div>
    
                    <div className="w-full bg-light rounded-b border border-lightGray hover:text-secondary2 absolute left-0 -bottom-4 text-center p-4 group invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-0 duration-300">
                        <Link to="#">View More Details</Link>
                    </div>
                </Link>

            </div>
            {/* <!-- Category Item --> */}
            <div className="main_div relative group">
                <Link to="#">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/40  rounded"></div>
                    <img className="w-full rounded" src={product10} alt=""/>
    
                    <div className="absolute top-[4%] left-[4%] md:top-[44%] md:left-[36%]">
                        <h3 className="font-medium text-light text-2xl tracking-wide">Beedroom</h3>
                    </div>
    
                    <div className="w-full bg-light rounded-b border border-lightGray hover:text-secondary2 absolute left-0 -bottom-4 text-center p-4 group invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-0 duration-300">
                        <Link to="#">View More Details</Link>
                    </div>
                </Link>

            </div>
            {/* <!-- Category Item --> */}
            <div className="main_div relative group">
                <Link to="#">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/40  rounded"></div>
                    <img className="w-full rounded" src={product8} alt=""/>
    
                    <div className="absolute top-[4%] left-[4%] md:top-[44%] md:left-[36%]">
                        <h3 className="font-medium text-light text-2xl tracking-wide">Beedroom</h3>
                    </div>
    
                    <div className="w-full bg-light rounded-b border border-lightGray hover:text-secondary2 absolute left-0 -bottom-4 text-center p-4 group invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-0 duration-300">
                        <Link to="#">View More Details</Link>
                    </div>
                </Link>

            </div>


        </div>
    </section>
    {/* <!--  Shop By Category  --> */}


    {/* <!--  Shop Products --> */}

    <section>
        <div className="container w-11/12 lg:w-10/12 mb-6">
            <h1 className="text-2xl md:text-4xl font-semibold">TOP NEW ARRIVAL</h1>
        </div>

        <div className="container w-11/12 lg:w-10/12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">

            {/* <!-- Products Item -->/ */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                  <img src={product2} alt=""/>
                    <div className="w-12 h-8 bg-secondary2 text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>50%</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart B/n --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                  <img src={product3} alt=""/>

                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                  <img src={product4} alt=""/>
                    <div className="w-12 h-8 bg-secondary2 text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>15%</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item -->/ */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                  <img src={product3} alt="mrahat"/>

                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                  <img src={product11} alt="mrahat"/>
                    <div className="w-12 h-8 bg-secondary2 text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>HOT</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                  <img src={product2} alt=""/>
                    <div className="w-12 h-8 bg-secondary text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>NEW</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="#">
                <div className="relative">
                  <img src={product2} alt=""/>
                    <div className="w-12 h-8 bg-secondary2 text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>50%</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="#">
                <div className="relative">
                  <img src={product2} alt=""/>
                    <div className="w-12 h-8 bg-secondary2 text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>50%</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            <div></div>

        </div>
    </section>

    {/* <!--  Shop Products --> */}



    {/* <!--  Product Add SEction --> */}
    <section className="py-[50px] md:py-[80px]">
        <div className="container w-11/12 lg:w-10/12 grid md:grid-cols-2 rounded border border-lightGray"style={{ background: 'url(./images/banner-1.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="p-[10px] md:p-[30px] bg-light rounded-ee-full">
                <h3 className="uppercase">Online Exclusive</h3>
                <h1 className="text-6xl font-bold text-secondary2 my-3">15% <span>Off</span></h1>
                <h4 className="uppercase text-xl">Accents, Chairs, Benches & Ottomans</h4>
                <Link to="#" className="default_btn">Shop Now</Link>
            </div>
            <div></div>
        </div>
    </section>
    {/* <!--  Product Add SEction --> */}


    {/* <!--  Shop Products 2 RECOMENDED FOR YOU --> */}

    <section className="py-[50px] md:py-[80px]">
        <div className="container w-11/12 lg:w-10/12 mb-6">
            <h1 className="text-2xl md:text-4xl font-semibold">RECOMENDED FOR YOUL</h1>
        </div>

        <div className="container w-11/12 lg:w-10/12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                                <img src={product2 } alt=""/>

                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="#">
                <div className="relative">
                                <img src={ product3} alt="mrahat"/>
                    <div className="w-12 h-8 bg-secondary2 text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>HOT</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="#">
                <div className="relative">
                  <img src={product4} alt=""/>

                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */} 
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>

            {/* <!-- Products Item --> */}
            <div className="p_main_items rounded group shadow">
            {/* <!-- P Top  --> */}
            <Link to="single_product.html">
                <div className="relative">
                                <img src={ product3} alt=""/>
                    <div className="w-12 h-8 bg-secondary text-light font-medium rounded absolute top-3 left-3 flex items-center justify-center ">
                        <span>25%</span>
                    </div>
                    <div className="absolute right-3 top-3 h-8 w-8 bg-light rounded-full flex items-center justify-center">
                        <Link to="#">
                            <span><i className="fa-regular fa-heart"></i></span>
                        </Link>
                    </div>

                    <div className="absolute left-0 bottom-0 w-full bg-primary rounded-b text-light text-lg text-center p-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200">
                        <Link to="#">
                            <span className="text-sm md:text-lg"><i className="fa-solid fa-eye"></i> Quick View</span>
                        </Link>
                    </div>
                </div>
            </Link>
            {/* <!-- P Bottom Content --> */}
                <div className="p_contents p-3">
                    <h2 className="text-lg text-primary font-medium">PELAGIA LOUNGE</h2>
                    <p className="text-[15px] my-2">Outdoor Modular Lounge</p>
                    <h3 className="text-xl text-secondary2 font-semibold">$449.00</h3>
                   <div className="flex my-2">
                        <ul className="mr-2 flex space-x-2">
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                            <li className="text-secondary2"><i className="fa-solid fa-star"></i></li>
                        </ul>
                        <div>
                            ( 50 ) 
                        </div>
                   </div>
                </div>

                {/* <!-- Add To Cart Btn --> */}
                <div className="add_to_cart_btn">
                    <Link to="#">
                        <h2><span className="mr-3"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</h2>
                    </Link>   
                </div>

            </div>




        </div>
    </section>

{/* 
Footer Area  */}
    <footer className="border-t border-secondary">
        <div className="footer_top py-10 bg-lightGray">
            <div className="container w-11/12 lg:w-10/12 grid md:grid-cols-[30%_20%_20%_30%] gap-10 overflow-hidden">
                <div>
                    <div className="header_logo font-bold text-2xl first-letter:text-4xl underline">
                        <Link to="index.html">Sho<span className="text-4xl">P</span> <span className="text-secondary text-4xl">BD</span></Link>
                    </div>
                    <p>Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or web designs.</p>
                    <div className="mt-7 flex">
                        <input className="w-full h-10 py-2 px-4 border border-secondary rounded-md outline-none focus:border-secondary" type="email" placeholder="Your Email Address"/>
                        <button className="default_btn mt-0 -m-2 h-10" type="submit">Subscribe</button>
                    </div>
                </div>


                <div>
                    <h2 className="text-lg font-medium text-primary mb-5">MY ACCOUNT</h2>
                    <ul className="space-y-2">
                        <li><Link className="hover:text-secondary duration-200" href="#">Order</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Wish List</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Track Order</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Manage Account</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Return Order</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-medium text-primary mb-5">INFORMATION</h2>
                    <ul className="space-y-2">
                        <li><Link className="hover:text-secondary duration-200" href="#">About us</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Privacy Policy</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Terms & Conditions</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Contact Us</Link></li>
                        <li><Link className="hover:text-secondary duration-200" href="#">Return Order</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-medium text-primary mb-5">CONTACT</h2>
                    <ul className="space-y-2">
                        <li><span className="font-medium">Location:</span> Barishal, Patuakhali 8600</li>
                        <li><span className="font-medium">Mobile:</span> +8801715-867227 </li>
                        <li><span className="font-medium">Email:</span> officialmrahat@gmail.com </li>
                    </ul>
                    <ul className="mt-5 flex space-x-2">
                        <li><Link className="h-8 w-8 leading-8 bg-primary text-light inline-block text-center rounded-full hover:bg-secondary2 duration-200" href="https://www.facebook.com/shahnurmrahat" target="_blank"><i className="fa-brands fa-facebook"></i></Link></li>
                        <li><Link className="h-8 w-8 leading-8 bg-primary text-light inline-block text-center rounded-full hover:bg-secondary2 duration-200" href="https://www.linkedin.com/in/mohammadrahat/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link></li>
                        <li><Link className="h-8 w-8 leading-8 bg-primary text-light inline-block text-center rounded-full hover:bg-secondary2 duration-200" href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    </ul>
                </div>

            </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer_bottom bg-primary py-3">
            <div className="container w-11/12 lg:w-10/12 grid md:grid-cols-2 items-center">
                <div className="text-light text-sm md:text-sm text-center md:text-start mb-3 md:mb-0">
                    <p>©2023 - Develop & Design - Mohammad Rahat</p>
                </div>
                <div className="md:ml-auto">
                            <img className="w-72" src={method } alt=""/>
                </div>
            </div>
        </div>



    </footer>
    {/* <!-- Footer Area --> */}


    <script src="./js/main.js" type="module"></script>

        </div>
    );
};

export default Home;