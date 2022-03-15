import React  from "react";
import {BiChevronDown, BiMenu, BiSearch} from "react-icons/bi"

function NavSm(){
   return ( 
   <>
   <div className="text-white flex justify-between items-center ">
       <div>
           <h3 className="font-bold text-xl">
               It all STARTS here..
           </h3>
           <span className="text-gray-400 text-xs flex items-center  hover:text-white">
            Chandigarh <BiChevronDown></BiChevronDown>
        </span>
       </div>
       <div className="w-8 h-8 ">
           <BiSearch className="w-full h-full"></BiSearch>
       </div>
   </div>
   </> );
}

function NavMd(){
    return (
    <>
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                <BiSearch></BiSearch>
                <input type = "search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"></input>
       </div>

    </>);
 }

function NavLg(){
    return (
    <>
    <div className="container flex mx-auto px-2 items-center justify-between">
    <div className="flex items-center w-1/2 gap-3">
       <div className="w-50 h-10 mt-3 text-white font-bold">
           BingeWatch
       </div>
       <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                <BiSearch></BiSearch>
                <input type = "search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies, Events, Plays, Sports and Activities"></input>
       </div>
    </div>
    <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Chandigarh <BiChevronDown></BiChevronDown>
        </span>
        <button className="bg-red-600 text-white px-1 py-1 text-sm rounded">
            Sign In
        </button>
        <div className="w-8 h-8 text-white ">
            <BiMenu className="w-full h-full"></BiMenu>
        </div>
    </div>
    </div>

    </>
    );
 }

const Navbar = () =>{
  return  (<>
     <nav className = "dark bg-darkBackground-700 px-4 py-3">
     <div className="md:hidden">
         {/* FOR SMALL OBJECTS */}
         <NavSm></NavSm>
     </div>
     <div className="hidden md:flex lg:hidden">
        {/* FOR MEDIUM OBJECTS */}
        <NavMd></NavMd>
     </div>
     <div className="hidden w:full lg:flex">
        {/* FOR LARGE OBJECTS */}
        <NavLg></NavLg>
     </div>
     </nav>

  </>);
}

export default Navbar