import FormField from "./shared/FormField";



const handleClick = () => {
    alert("Button clicked!");
    

}

const Features = () => {
    return ( 
        <div className=" ">
      <div className="flex items-center justify-between py-[10px] px-[14px] font-bold ">
      <h1 >
        Features
      </h1>
      </div> 
      
      <div className=" flex justify-between max-w-full   ">
    
      <div className="border mr-4 ml-4  ">
      <div className=" ml-4 flex items-center justify-between py-[10px] px-[10px] font-bold">
          <h2>Balance Check</h2> 
        </div>
        {/* <div className="mb-4    ">
            <label htmlFor="number" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Account Number
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete="current-password"
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div> */}
            <FormField label= "Account Number" type= "text" />
            <FormField label= "PIN number " type = "password"/>

            


        
            
          <div className="flex">
          <div className="mt-4  ml-5  justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Check Balance</button>
        </div>
          <div className="mt-4 flex   justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Refresh</button>
        </div>
        </div>

        <div className="mb-4    ">
            <label htmlFor="password" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Account Balance
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
            </div>
      <div className="border mr-4 ml-4 ">
      <div className=" flex items-center justify-between ml-4 py-[10px] px-[10px] font-bold">
          <h1>Real-Time Debit and Credit</h1> 
        </div>
        <div className="mb-4    ">
            <label htmlFor="number" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Account Number
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete="current-password"
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
        <div className="mb-4    ">
            <label htmlFor="password" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              PIN
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
        <div className="mb-4    ">
            <label htmlFor="number" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Amount
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete="current-password"
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>

              <div className="flex">
          <div className="mt-4  ml-5  justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Debit</button>
        </div>
          <div className="mt-4 flex   justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Credit</button>
        </div>
          <div className="mt-4 flex   justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Refresh</button>
        </div>
        </div>

        <div className="mb-4    ">
            <label htmlFor="number" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Account Balance
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>


            </div>



      <div className="border mr-4 ml-4 ">
      <div className=" flex items-center justify-between ml-4 py-[10px] px-[10px] font-bold">
          <h1>e-Mandate</h1> 
        </div>
        <div className="mb-4    ">
            <label htmlFor="number" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
           Account Number
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
        <div className="mb-4    ">
            <label htmlFor="password" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
           PIN
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
        <div className="mb-4    ">
            <label htmlFor="number" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
             Amount
            </label>
            <input
              type=""
              name="number"
              id="number"
              autoComplete=""
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>

              <div>
              <div className="mt-4 flex ml-4   justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Set up e-Mandate</button>
        </div>
              </div>

              <div className="flex ">
          <div className="  ml-5  justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Edit</button>
        </div>
          <div className=" flex   justify-between py-[10px] px-[10px] ">
        <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Cancel</button>
        </div>
          
        </div>

        <div className="mb-4    ">
            <label htmlFor="message" className=" ml-5 text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              e-Mandate Details
            </label>
            <textarea
              type=""
              name="message"
              id="message"
              autoComplete="current-password"
              className="mt-1 ml-8 mr-8 w-60 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>





            </div>
            </div>
            </div>
     );
}
 
export default Features;