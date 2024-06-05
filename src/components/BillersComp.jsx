const BillersComp = () => {
// button function
    const handleClick = () => {
        alert('Button clicked');
    }
    return ( 
        <div>
            <div className=" flex items-center justify-between py-[14px] px-[1px] ml-6 font-bold">
      <h1>Billers</h1>
      </div>
      <div className=" flex items-center justify-between  px-[10px] ml-4 font-bold">
        <button onClick={handleClick} className="border-2  border-[#356D00] inline-block rounded mt-0 mb-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">
          Add Biller
        </button>
      </div>




            
            <div className="border  ml-6">
      
          <div className="  overflow-x-auto sm:-mx-6 lg:-mx-8  min-w-full py-2 sm:px-6 lg:px-8">
            <table className=" min-w-full text-center text-sm font-light">
                
              <thead>
                <tr className="font-bold">
                  <th className="">Name</th>
                  <th className="whitespace-nowrap px-6 py-4">Contact information</th>
                  <th className="whitespace-nowrap px-6 py-4">Status</th>
                  <th className="whitespace-nowrap px-6 py-4">Actions</th>
                </tr>
                
              </thead>

              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 ">Billers 1</td>
                  <td className="whitespace-nowrap px-6 py-4">Contact info 1</td>
                  <td className="whitespace-nowrap px-6 py-4">Active</td>
                  <td className="whitespace-nowrap px-6 py-4"><button onClick={handleClick} className=" border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Edit</button> <button onClick={handleClick} className="border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Delete</button></td>
                </tr>
                
              </tbody>

              <tbody>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 ">Bilers 2</td>
                  <td className="whitespace-nowrap px-6 py-4">Contact info 2</td>
                  <td className="whitespace-nowrap px-6 py-4">Inactive</td>
                  <td className="whitespace-nowrap px-6 py-4"><button onClick={handleClick} className="border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Edit</button> <button onClick={handleClick} className="border-2  border-[#356D00] inline-block rounded  pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">Delete</button></td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      
 


            











        </div>
     );
}
 
export default BillersComp;