import { Card } from "@/components/ui/card";
import React from "react";
import ReactApexChart from 'react-apexcharts';
const DashChart = () => {
    const dates = [/* Your array of dates */]; // Define or replace this with actual data

    const data = { series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Your Profile Views',
        align: 'left'
      },
      grid: {
        row: {
          
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
}
    return (
            <Card id="chart " className="shadow-md border-gray-200 p-6 w-full">
                <ReactApexChart options={data.options} series={data.series} type="area"  />
            </Card>
    );
};
export default DashChart;