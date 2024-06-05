import { TEChart } from "tw-elements-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

const handleClick = () => {
    alert('Button clicked');
}
const Reports = () => {
  return (
    <div>
        <div className=" flex items-center justify-between py-[14px] px-[1px] ml-6 font-bold">
      <h1 className="font-bold">Reports</h1>
      </div>
      <div className=" flex items-center justify-between  px-[10px] ml-4 font-bold">
        <button onClick={handleClick} className="border-2  border-[#356D00] inline-block rounded mt-0 mb-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-black  hover:shadow font-medium px-2">
          Generate Report
        </button>
      </div>

      <div className="ml-6 mr-6 flex justify-between max-w-full">
        <div className=" border-4 border-[#356D00] w-80">
        <div className=" flex items-center justify-between py-[10px] px-[10px] font-bold">
          <h2>Revenue By Biller</h2> 
        </div>
          <TEChart
            type="bar"
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "Revenue",
                  data: [30, 15, 62, 65, 61, 65, 40],
                  backgroundColor: ["#356D00"],
                },
              ],
            }}
            options={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || "";
                      label = `${label}: ${context.formattedValue} users`;
                      return label;
                    },
                  },
                },
              },
            }}
            darkOptions={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || "";
                      label = `${label}: ${context.formattedValue} users`;
                      return label;
                    },
                  },
                },
                legend: {
                  labels: { color: "" },
                },
              },
            }}
          />
        </div>
        <div className=" border-4 border-[#356D00] w-80">
        <div className=" flex items-center justify-between py-[10px] px-[10px] font-bold">
          <h2>Transaction By Biller</h2> 
        </div>
          <TEChart
            type="bar"
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "Transactions",
                  data: [30, 15, 62, 65, 61, 65, 40],
                  backgroundColor: ["#356D00"],
                },
              ],
            }}
            options={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || "";
                      label = `${label}: ${context.formattedValue} users`;
                      return label;
                    },
                  },
                },
              },
            }}
            darkOptions={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || "";
                      label = `${label}: ${context.formattedValue} users`;
                      return label;
                    },
                  },
                },
                legend: {
                  labels: { color: "#fff" },
                },
              },
            }}
          />
        </div>
        <div className=" border-4 border-[#356D00] w-80">
        <div className=" flex items-center justify-between py-[10px] px-[10px] font-bold">
          <h2>Mandate By Biller</h2> 
        </div>
          <TEChart
            type="bar"
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "Mandates",
                  data: [30, 15, 62, 65, 61, 65, 40],
                  backgroundColor: ["#356D00"],
                },
              ],
            }}
            options={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || "";
                      label = `${label}: ${context.formattedValue} users`;
                      return label;
                    },
                  },
                },
              },
            }}
            darkOptions={{
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || "";
                      label = `${label}: ${context.formattedValue} users`;
                      return label;
                    },
                  },
                },
                legend: {
                  labels: { color: "#fff" },
                },
              },
            }}
          />
        </div>
      </div>

            <div className=" mt-6 ml-6 mr-6 flex justify-between ">
      <div className="border-4 border-[#356D00]">
        <div className=" flex items-center justify-between py-[10px] px-[10px] font-bold">
          <h2>Revenue By Date Range</h2>
        </div>

        <LineChart
          width={480}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 30,
            bottom: 5,
            justifyItems: "center",
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>

      <div className="border-4 border-[#356D00]">
        <div className=" flex items-center justify-between py-[15px] px-[40px] font-bold">
          <h2>Transaction By Date Range</h2>
        </div>

        <LineChart
          width={480}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 30,
            bottom: 5,
            justifyItems: "center",
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

      </div>



</div>

<div className='mt-6 ml-6 mr-6 max-w-full border-4 w-90 border-[#356D00]  '>
        <div className='basis-[70%]  bg-white  cursor-pointer rounded-[4px]   '>
            <div className=' flex items-center justify-between py-[15px] px-[40px] font-bold'>
            <h2>Mandates By Range</h2>
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
};

export default Reports;
