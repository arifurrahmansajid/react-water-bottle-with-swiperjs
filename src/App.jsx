import Blogs from  "../src/Components/Bolgs/Blogs";
import Header from "../src/Components/header"
import HeroSlider  from "../src/Components/HeroSlider/HeroSlider"
import AboutUs  from "../src/Components/Aboutus"
import ContactUs from "../src/Components/ContactUs "
import Footer from "../src/Components/Footer"
import MySlider from "../src/Components/MySlider"
import { useState } from "react";


function App() {
  const [bookMark, setBookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);
  console.log(readTime);
  const handelBookMark = (blog) => {
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark);
 
  };
  const handelMarkTime = (time,id) => {
    const readingTime = readTime + time;
    setReadTime(readingTime);
    removeBookMark(id);
    //console.log(id)

  };

  const removeBookMark = (id) => {
    const remaining = bookMark.filter((mark) => mark.id !== id);
    setBookMark(remaining);
  }

  return (
<>
<div className="max-w-7xl mx-auto">
  <Header></Header>
  <HeroSlider></HeroSlider>
  <AboutUs></AboutUs>      
<div className="flex text-center mt-12">
    
   
      
    <div className=" w-[70%]">
          <Blogs
            handelMarkTime={handelMarkTime}
            handelBookMark={handelBookMark}
          ></Blogs>
        </div>
        <div className=" w-[30%]">
          <h2>Reading Time: {readTime}</h2>
          <h2>BookMark Time: {bookMark.length}</h2>
          {bookMark.map((mark) => (
            <p key={mark.id} className="bg-red-600 p-2 shadow m-2 text-white">{mark.title}</p>
          ))}
        </div>
    
      </div>
      <div className="mt-4 mb-4">
      <MySlider></MySlider>
      </div>
      <div className="mt-4 mb-4">
      <ContactUs></ContactUs>
      </div>
  
  <Footer></Footer>
</div>
  </>
  );
}

export default App;
      