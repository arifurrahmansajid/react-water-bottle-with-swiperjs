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
        
        <div className="flex flex-col lg:flex-row gap-6 mt-12 px-4">
          {/* Main Content (70%) */}
          <div className="w-full lg:w-[70%]">
            <Blogs
              handelMarkTime={handelMarkTime}
              handelBookMark={handelBookMark}
            ></Blogs>
          </div>
          
          {/* Sidebar (30%) */}
          <div className="w-full lg:w-[30%] bg-white rounded-xl shadow-lg p-6 h-fit sticky top-6">
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                  <p className="text-sm text-blue-600 font-medium">Reading Time</p>
                  <p className="text-2xl font-bold text-blue-800 mt-1">
                    {readTime} min
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                  <p className="text-sm text-green-600 font-medium">Saved Items</p>
                  <p className="text-2xl font-bold text-green-800 mt-1">
                    {bookMark.length}
                  </p>
                </div>
              </div>
              
              {/* Saved Items List */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  Your Saved Bottles
                </h3>
                
                {bookMark.length > 0 ? (
                  <div className="space-y-2">
                    {bookMark.map((mark) => (
                      <div
                        key={mark.id}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors border-l-4 border-primary"
                      >
                        <span className="font-medium text-gray-700 truncate">
                          {mark.title}
                        </span>
                        <button
                          onClick={() => removeBookMark(mark.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    No saved bottles yet
                  </p>
                )}
              </div>
              
              {/* Checkout Button */}
              <button className="w-full py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 mb-8 px-4">
          <MySlider></MySlider>
        </div>
        
        <div className="mt-8 mb-8 px-4">
          <ContactUs></ContactUs>
        </div>
        
        <Footer></Footer>
      </div>
  </>
  );
}

export default App;
      