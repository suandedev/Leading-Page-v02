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
    <div className='min-h-screen bg-gray-100 dark:bg-slate-700 dark:text-gray-100 transition-all duration-500 relative'>
      <div className='pt-10 lg:px-36 px-10 flex items-center justify-between relative'>
          {/* logo */}
          <div className='flex flex-col lg:flex-row lg:justify-start lg:items-center lg:space-x-2 transition-all hover:cursor-pointer hover:animate-bounce duration-400'>
            <img className='w-14' src={"/static/images/emojione_e-mail.png"} alt="logo" />
            <span className='text-lg lg:text-2xl font-bold text-purple-700'>SendPay</span>
          </div>
          {/* menu */}
          <div className={`flex lg:items-center md:items-center flex-col absolute right-10 top-24 lg:flex-row lg:top-0 lg:relative ${(menu) ? ' flex ' : ' hidden '} `}>
            <ul className='flex flex-col md:items-center space-y-2 mx-auto lg:space-x-8 lg:space-y-0 lg:flex-row lg:items-center'>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>send money</li>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>receive money</li>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>language</li>
              <li className='text-gray-700 dark:text-gray-200 font-semibold hover:text-purple-600 transition-all duration-300 cursor-pointer hover:scale-105'>how it works</li>
            </ul>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`lg:ml-4 mt-4 lg:mt-0 px-4 py-1 rounded-lg lg:rounded-xl ${(theme === "light") ? ' bg-slate-700 text-gray-200 ' : ' bg-gray-200 text-gray-700 '}`}>
              {(theme === "light") ? "light" : "dark" }
            </button>
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
          <h1 className='text-xl font-bold text-center pt-8 mx-auto lg:mx-0 lg:text-left lg:text-[4rem] lg:leading-[5rem] lg:font-bold capitalize text-gray-700 dark:text-gray-100'>sending money is easier than before</h1>
          <p className='lg:text-lg lg:pt-10 text-center lg:text-left pt-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellendus, suscipit delectus reprehenderit facilis cum earum dolorem iste vitae dignissimos!</p>
          <div className='lg:space-x-2 lg:space-y-0 space-y-2 lg:pt-4 flex lg:flex-row flex-col pt-9 item-center'>
            <button className='px-6 py-2 rounded-lg w-fit mx-auto bg-purple-700 lg:mx-0 lg:text-left lg:px-4 lg:py-3 text-gray-100 border border-purple-700 hover:scale-105 transition-all duration-300 hover:text-gray-700'>Register</button>
            <button className='px-6 py-2 rounded-lg w-fit mx-auto bg-purple-700 lg:mx-0 lg:px-4 lg:py-3 text-gray-100 border border-purple-700 hover:scale-105 transition-all duration-300 hover:text-gray-700'>Learn More</button>
          </div>
        </section>
        <img className='object-cover lg:w-full w-[20rem] block mx-auto' src={"/static/images/undraw_Mobile_application_mr4r 1.png"} alt="phone" />
      </div>
      <div className='min-h-screen lg:min-h-0 lg:px-36 px-10 pt-16 lg:pt-32'>
        <h1 className='lg:text-[3rem] text-xl text-center lg:font-bold font-semibold text-gray-700 dark:text-gray-100'>How It Works</h1>
        <p className='text-center lg:pt-8 pt-4 text-gray-700 dark:text-gray-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae mollitia tempora ullam, facere voluptatum soluta!</p>
        <section className='flex lg:pt- lg:flex-row flex-col lg:space-x-10 space-x-0 lg:space-y-0 space-y-10 lg:pt-[3rem] pt-[2rem]'>
          <figure className='rounded-xl lg:p-0'>
            <img className='block w-32 object-center mx-auto' src="/static/images/Ellipse 1.png" alt="eklipe 1" />
            <div className='pt-4 lg:pt-8'>
              <h2 className='text-lg text-center lg:text-xl font-semibold capitalize text-gray-700 dark:text-gray-200'>in-pop transfer</h2>
              <p className='text-xs text-center lg:text-lg text-gray-600 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem!</p>
            </div>
          </figure>
          <figure className='rounded-xl lg:p-0'>
            <img className='block w-32 object-center mx-auto' src="/static/images/Ellipse 2.png" alt="eklipe 1" />
            <div className='pt-4 lg:pt-8'>
              <h2 className='text-lg text-center lg:text-xl font-semibold capitalize text-gray-700 dark:text-gray-200'>in-pop transfer</h2>
              <p className='text-xs text-center lg:text-lg text-gray-600 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem!</p>
            </div>
          </figure>
          <figure className='rounded-xl lg:p-0'>
            <img className='block w-32 object-center mx-auto' src="/static/images/Ellipse 3.png" alt="eklipe 1" />
            <div className='pt-4 lg:pt-8'>
              <h2 className='text-lg text-center lg:text-xl font-semibold capitalize text-gray-700 dark:text-gray-200'>in-pop transfer</h2>
              <p className='text-xs text-center lg:text-lg text-gray-600 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatem!</p>
            </div>
          </figure>
        </section>
      </div>
      <div className="lg:px-36 px-10 lg:pt-32 flex lg:flex-row flex-col items-center justify-center lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
        <img src={"/static/images/Group 15.png"} alt="bg" className='w-full object-cover' />
        <div className=''>
          <h1 className='lg:text-[3rem] text-xl text-center lg:text-left lg:font-bold font-semibold text-gray-700 dark:text-gray-100'>How It Works</h1>
          <p className='lg:pt-8 text-gray-600 dark:text-gray-100 lg:text-lg text-sm pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, distinctio fugiat. Magni quo omnis minus.</p>
          <a href="#" className='text-purple-700 font-semibold lg:pt-8 inline-block pt-4'>Ream More <svg className='w-5 lg:w-7' xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg></a>
        </div>
      </div>
      <div className="lg:px-36 px-10 p-16 lg:pt-32 flex flex-col items-center justify-center lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
        <h1 className='lg:text-[3rem] text-xl text-center lg:font-bold font-semibold text-gray-700 dark:text-gray-100'>We are giving Services</h1>
        <p className='text-center lg:text-lg lg:pt-8 pt-1 text-gray-700 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, explicabo.</p>
        <section className='grid gap-2 grid-cols-1 lg:gap-4 lg:grid-cols-2 lg:pt-4'>
          <figure className='rounded-xl lg:p-0 flex lg:space-x-4 space-x-2 items-center justify-center'>
            <img className='block w-16 h-16  object-center mx-auto' src="/static/images/Ellipse 3.png" alt="eklipe 1" />
            <div className='pt-4 lg:pt-8'>
              <h2 className='text-lg text-left lg:text-xl font-semibold capitalize text-gray-700 dark:text-gray-200'>bank Transfer</h2>
              <p className='text-xs text-left lg:text-lg text-gray-600 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </figure>
          <figure className='rounded-xl lg:p-0 flex lg:space-x-4 space-x-2 items-center justify-center'>
            <img className='block w-16 h-16  object-center mx-auto' src="/static/images/emojione-v1_mobile-phone.png" alt="eklipe 1" />
            <div className='pt-4 lg:pt-8'>
              <h2 className='text-lg text-left lg:text-xl font-semibold capitalize text-gray-700 dark:text-gray-200'>Mobile Recharge</h2>
              <p className='text-xs text-left lg:text-lg text-gray-600 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </figure>
          <figure className='rounded-xl lg:p-0 flex lg:space-x-4 space-x-2 items-center justify-center'>
            <img className='block w-16 h-16  object-center mx-auto' src="/static/images/emojione_alarm-clock.png" alt="eklipe 1" />
            <div className='pt-4 lg:pt-8'>
              <h2 className='text-lg text-left lg:text-xl font-semibold capitalize text-gray-700 dark:text-gray-200'>Fast Transer</h2>
              <p className='text-xs text-left lg:text-lg text-gray-600 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </figure>
          <figure className='rounded-xl lg:p-0 flex lg:space-x-4 space-x-2 items-center justify-center'>
            <img className='block w-16 h-16  object-center mx-auto' src="/static/images/Group.png" alt="eklipe 1" />
            <div className='pt-4 lg:pt-8'>
              <h2 className='text-lg text-left lg:text-xl font-semibold capitalize text-gray-700 dark:text-gray-200'>Easy and Fast</h2>
              <p className='text-xs text-left lg:text-lg text-gray-600 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </figure>
        </section>
      </div>
      <div className="lg:px-36 px-10 p-16 lg:pt-32 flex flex-col items-center justify-center lg:space-x-4 space-x-0 space-y-4 lg:space-y-0">
        
      </div>
    </div>
  );
}