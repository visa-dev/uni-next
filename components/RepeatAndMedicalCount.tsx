"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";

const data = [
    {
        name: '1 Year',
        repeat: 40,
        medical: 2,
        pass : 10
    },
    {
        name: '2 Year',
        repeat: 400,
        medical: 240,
        pass : 100
    },
    {
        name: '3 Year',
        repeat: 4,
        medical: 24,
        pass : 45
    },
    {
        name: '4 Year',
        repeat: 20,
        medical: 240,
        pass : 67
    },

];

const RepeatAndMedicalCount =()=>{

    return (
        <div className='bg-white rounded-xl w-full h-full p-4 '>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Repeat & Medical</h1>
                <Image src='/moreDark.png' alt='...' width={20} height={20} />
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <LineChart
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
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                    <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20} />
                    <Tooltip contentStyle={{borderRadius:"10px" ,borderColor:"lightgrey"}} />
                    <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}}  />
                    <Line type="monotone" dataKey="repeat" stroke="#f02c19" strokeWidth={3} />
                    <Line type="monotone" dataKey="medical" stroke="#82ca9d" strokeWidth={3} />
                    <Line type="monotone" dataKey="pass" stroke="#8884d8" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RepeatAndMedicalCount;
