"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
    {
        name: 'Mon',
        present: 40,
        absent: 20,
    },
    {
        name: 'Tue',
        present: 20,
        absent: 240,
    },
    {
        name: 'Wen',
        present: 460,
        absent: 240,
    },
    {
        name: 'Thu',
        present: 200,
        absent: 20,
    },
    {
        name: 'Fri',
        present: 40,
        absent: 240,
    },

];

const AttendanceChart = () => {
    return(
        <div className='bg-white rounded-lg w-full h-full p-4 '>
            {/*TITLE*/}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src='/moreDark.png' alt='student' width={20} height={20} />
            </div>
            {/*CHART*/}
            <div className='w-full h-[95%]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                        <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                        <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                        <Tooltip contentStyle={{borderRadius:"10px" ,borderColor:"lightgrey"}} />
                        <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}  />
                        <Bar dataKey="present" fill="#8884d8"  legendType='circle' radius={[10,10,0,0]}/>
                        <Bar dataKey="absent" fill="#82ca9d" legendType='circle' radius={[10,10,0,0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default AttendanceChart;
