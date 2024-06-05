const handleClick = () => {
    alert("Button clicked!");
    
}


const Transactions = () => {
    return ( 
        <div className=" mr-4 ml-10 ">
      <div className=" flex items-center justify-between py-[10px] px-[10px] font-bold">
          <h1>Transactions</h1> 
        </div>
          
          <div className="mb-4    ">
            <label htmlFor="date" className=" text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Date Range:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="current-password"
              className="mt-1 ml-2  w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
          
          <div className="mb-4    ">
            <label htmlFor="Contact" className=" text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Billers:
            </label>
            <input
              type=""
              name="number"
              id="number"
              placeholder="All Billers"
              autoComplete="contact"
              className="mt-1 ml-2 w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
          <div className="mb-4    ">
            <label htmlFor="Contact" className=" text-sm font-medium text-gray-700 flex items-center justify-between py-[10px] px-[10px] ">
              Mandates:
            </label>
            <input
              type=""
              name="number"
              id="number"
              placeholder="All Mandates"
              autoComplete="contact"
              className="mt-1 ml-2 w-96 border-2 border-[#356D00]   shadow-sm sm:text-sm flex items-center justify-between py-[10px] px-[10px]  "
            />
              </div>
          
          
      
          <div className="mt-4 flex  justify-between py-[10px] px-[10px]">
          <button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Search</button>
          </div>

          <div className="border mt-8 ml-2">
          
          <div className="  overflow-x-auto sm:-mx-6 lg:-mx-8  min-w-full py-2 sm:px-6 lg:px-8">
            <table className=" min-w-full text-center text-sm font-light">
                
              <thead>
                <tr className="font-bold">
                  <th className="">Biller</th>
                  <th className="whitespace-nowrap px-6 py-4">Mandate</th>
                  <th className="whitespace-nowrap px-6 py-4">Amount</th>
                  <th className="whitespace-nowrap px-6 py-4">Status</th>
                  <th className="whitespace-nowrap px-6 py-4">Actions</th>
                </tr>
                
              </thead>

              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 ">Biller 1 </td>
                  <td className="whitespace-nowrap px-6 py-4">Mandate 1</td>
                  <td className="whitespace-nowrap px-6 py-4">Amount 1 </td>
                  <td className="whitespace-nowrap px-6 py-4">Successful</td>
                  <td className="whitespace-nowrap px-6 py-4"><button onClick={handleClick} className="border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Resubmit</button> </td>
                </tr>
                
              </tbody>

              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 ">Biler 2</td>
                  <td className="whitespace-nowrap px-6 py-4">Mandate 2</td>
                  <td className="whitespace-nowrap px-6 py-4">Amount 2</td>
                  <td className="whitespace-nowrap px-6 py-4">Failed</td>
                  <td className="whitespace-nowrap px-6 py-4"><button onClick={handleClick} className="border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Resubmit</button> </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      
        </div>

    
);
}
 
export default Transactions;