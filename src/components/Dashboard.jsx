
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaRegCalendarMinus } from "react-icons/fa";

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },

]





const Dashboard = () => {
    return ( 
        <div className="">
            <h1 className='border  py-2 font-bold'> NIBSS DIRECT DEBIT MANDATE INSTRUCTIONS HANDLED BRILLIANTLY </h1>
        <div className="  mt-[40px] pb-[15px] pt-[30px] px-[25px] 
            flex items-center justify-evenly ">

        <div className="h-[100px] rounded-[8px]  bg-white border-2  border-[#356D00] flex items-center max-w-96   justify-between px-[120px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">

            <div>
                
            <h1 className="text-[20px] leading-[24px] font-bold text-[]">Total Bllers  </h1>
                <h2 className="text-[#39343d] text-[15px] leading-[25px] font-bold">100</h2>

                
                
                
                
               </div>
               
            </div>


        <div className="h-[100px] rounded-[8px] border-2 bg-white  border-[#356D00] flex items-center max-w-full   justify-between px-[120px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">

            <div>
                
            <h1 className="text-[20px] leading-[24px] font-bold text-[]">Total Billlers</h1>
                <h2 className="text-[#39343d] text-[15px] leading-[25px] font-bold">500</h2>
                
                
                
                
               </div>
            </div>
        </div>
        
        
        <div className=" mt-[0px] pb-[15px] pt-[30px] px-[25px] 
            flex items-center justify-evenly" >


        <div className="h-[100px] rounded-[8px] border-2 bg-white  border-[#356D00] flex items-center max-w-full   justify-between px-[120px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">

        <div>
    
        <h1 className="text-[20px] leading-[24px] font-bold text-[]">Total Billers</h1>
                <h2 className="text-[#39343d] text-[15px] leading-[25px] font-bold">1000</h2>
    
    
    
   </div>
</div>

    <div className="h-[100px] rounded-[8px] border-2 bg-white  border-[#356D00] flex items-center max-w-full
    justify-between px-[120px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease">



    <div>
    
    <h1 className="text-[20px] leading-[24px] font-bold text-[]">Total Billers</h1>
    <h2 className="text-[#39343d] text-[15px] leading-[25px] font-bold">$100</h2>
    
    
    
    
            </div>
    </div>
    </div>

        <div className='mt-6 ml-6 mr-6 max-w-full border-2 w-90 border-[#356D00]  '>
        <div className='basis-[70%]  bg-white  cursor-pointer rounded-[4px]   '>
            <div className=' flex items-center justify-between py-[15px] px-[40px] font-bold'>
            <h2>Revenue Trend</h2>
            </div>
            
        <LineChart
          width={1000 }
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 30,
            bottom: 5,
            justifyItems:'center',
            
            
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        </div>
        
        </div>
        <div className='mt-6 ml-6 mr-6 max-w-full border-2 border-[#356D00]'>
        <div className='basis-[70%]  bg-white  cursor-pointer rounded-[4px]  '>
            <div className=' flex items-center justify-between py-[15px] px-[40px] font-bold'>
            <h2>Transaction Trend</h2>
            </div>
            
        <LineChart
          width={1000 }
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 30,
            bottom: 5,
            justifyItems:'center',
            
            
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        </div>
        

        
        </div>
        
        
        
    </div>

    

        
     );
}
 



export default Dashboard;