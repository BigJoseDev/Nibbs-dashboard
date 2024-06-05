const handleClick = () => {
  alert("Button clicked!");

}

const Settings = () => {
  
  return (
    <div className=" ">
      <div className="flex items-center justify-between ml-5 py-[10px] px-[18px] font-bold ">
      <h1 >
        Settings
      </h1>
      </div> 
      
      <div className="  flex ml-10 mr-10 justify-between max-w-full  ">
    
      <div className="border ">
      <div className=" flex items-center justify-between py-[10px] px-[10px] font-bold ml-5">
          <h2>API Credentials</h2> 
        </div>
        <div className="mb-4    ">
            <label htmlFor="subject" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Mandate Creation Api
            </label>
            <input
              type=""
              name="subject"
              id="subject"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
        <div className="mb-4    ">
            <label htmlFor="subject" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Direct Debit API
            </label>
            <input
              type=""
              name="subject"
              id="subject"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
          
          <div className="mt-4 flex ml-6  justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Save</button>
        </div>

          </div>
      <div className="border ">
      <div className=" flex items-center justify-between py-[10px] px-[10px] font-bold ml-5">
          <h2>Scheduler Settings</h2> 
        </div>
        <div className="mb-4    ">
            <label htmlFor="subject" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Biller Details
            </label>
            <input
              type=""
              name="subject"
              id="subject"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
        <div className="mb-4    ">
            <label htmlFor="subject" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Mandate Duration
            </label>
            <input
              type=""
              name="subject"
              id="subject"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
          
          <div className="mt-4 flex ml-6  justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Save</button>
        </div>

          </div>
        
    
      


        </div>
        
        <div className="border mt-10 mr-4 ml-10 ">
      <div className=" flex items-center justify-between ml-5 py-[10px] px-[10px] font-bold">
          <h2>User Account Settings</h2> 
        </div>
          
          <div className="mb-4    ">
            <label htmlFor="password" className=" text-sm font-medium text-gray-700 ml-5 flex items-center justify-between py-[10px] px-[10px] ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              className="mt-1 ml-8  w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
          
          <div className="mb-4    ">
            <label htmlFor="Contact" className=" text-sm font-medium text-gray-700 ml-5 flex items-center justify-between py-[10px] px-[10px] ">
              Contact Information
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete="contact"
              className="mt-1 ml-8 w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
          
          
      
          <div className="mt-4 ml-6 flex  justify-between py-[10px] px-[10px]">
          <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Save</button>
          </div>
        </div>

        
    </div>
  )
}

export default Settings