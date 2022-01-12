import React from "react";
import { Link } from "react-router-dom";
  import ImageOne from "../images/egg.jpg";
  import ImageTwo from "../images/egg-2.jpg";
  import Girl from "../images/girl.jpg";
  import Girl2 from "../images/girl2.jpg";
  import Boy2 from "../images/boy2.jpg";
  import Boy from "../images/boy.jpg";
const TourCard = () => {
  return (
   <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
    <div className="wrapper bg-gray-400 antialiased text-gray-900">
<div> 
    <img src={Girl} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>      
 <div className="relative px-4 -mt-6  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
 
  <div className="mt-1">
    $1800
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>



  <div className="wrapper bg-gray-400 antialiased text-gray-900">
  <div>
    <img src={Boy2} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-6  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
 
  <div className="mt-1">
    $1800
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>


  <div className="wrapper bg-gray-400 antialiased text-gray-900">
<div> 
    <img src={Girl2} className="w-full object-cover object-center rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-6  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
 
  <div className="mt-1">
    $1800
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>

  <div className="wrapper bg-gray-400 antialiased text-gray-900">
<div>
    
    <img src={Boy} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-12  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
 
  <div className="mt-1">
    $1800
    <span className="text-gray-600 text-sm">   /wk</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>
  
</div>

  );
};

export default TourCard;
