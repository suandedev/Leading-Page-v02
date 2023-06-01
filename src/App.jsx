import React, { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState("light");
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-gray-100 transition-all duration-500 relative'>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='fixed top-1 cursor-pointer z-20'>
        Click me
      </button>
      <div className='pt-10 lg:px-36 px-10 flex items-center justify-between relative'>
          {/* logo */}
          <div className='flex flex-col lg:flex-row lg:justify-start lg:items-center lg:space-x-2 transition-all hover:cursor-pointer hover:animate-bounce duration-400'>
            <img className='w-14' src={"../public/emojione_e-mail.png"} alt="logo" />
            <span className='text-lg lg:text-2xl font-bold text-purple-700'>SendPay</span>
          </div>
          {/* menu */}
          <div className={'hidden lg:flex lg:items-center md:items-center flex-col absolute right-10 top-24 lg:flex-row lg:top-0 lg:relative' && (menu) ? " flex" : " hidden"}>
            <ul className='flex flex-col md:items-center space-y-2 mx-auto lg:space-x-8 lg:space-y-0 lg:flex-row lg:items-center'>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>send money</li>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>receive money</li>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>language</li>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>how it works</li>
            </ul>
            <ul className='flex flex-col space-y-2 pt-4 mx-auto lg:items-center lg:space-x-4 lg:pl-10 lg:space-y-0 lg:flex-row md:items-center'>
              <li className='text-gray-700 dark:text-gray-200 font-semibold rounded-lg border border-purple-600 px-4 py-2 transition-all duration-300 hover:bg-purple-600 hover:text-gray-100 cursor-pointer'>sign in</li>
              <li className='text-gray-200 dark:text-gray-200 font-semibold rounded-lg border border-purple-600 px-4 py-2 bg-purple-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer'>register</li>
            </ul>
          </div>
          {/* menu icon */}
          <button className='w-10 lg:hidden' onClick={() => setMenu(!menu)}><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg></button>
      </div>
      <div className='lg:pt-[9rem] flex lg:flex-row lg:px-36 px-10 pt-24 lg:justify-between flex-col-reverse justify-center'>
        <section>
          <h1 className='text-xl font-bold text-center pt-8 mx-auto lg:mx-0 lg:text-left lg:text-[4rem] lg:leading-[5rem] lg:font-bold capitalize text-gray-700'>sending money is easier than before</h1>
          <p className='lg:text-lg lg:pt-10 text-center lg:text-left pt-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, suscipit delectus reprehenderit facilis cum earum dolorem iste vitae dignissimos!</p>
          <div className='lg:space-x-2 lg:space-y-0 space-y-2 lg:pt-4 flex lg:flex-row flex-col pt-9 item-center'>
            <button className='px-6 py-2 rounded-lg w-fit mx-auto bg-purple-700 lg:mx-0 lg:text-left lg:px-4 lg:py-3 text-gray-100 border border-purple-700 hover:scale-105 transition-all duration-300 hover:text-gray-700'>Register</button>
            <button className='px-6 py-2 rounded-lg w-fit mx-auto bg-purple-700 lg:mx-0 lg:px-4 lg:py-3 text-gray-100 border border-purple-700 hover:scale-105 transition-all duration-300 hover:text-gray-700'>Learn More</button>
          </div>
        </section>
        <img className='object-cover lg:w-full w-[20rem] block mx-auto' src={"../public/undraw_Mobile_application_mr4r 1.png"} alt="phone" />
      </div>
    </div>
  );
}