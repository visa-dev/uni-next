"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";


const data = [
    {
        name: 'Total',
        count: 100,
        fill: 'white',
    },
    {
        name: 'Boys',
        count: 70,
        fill: '#9fcdf8',
    },
    {
        name: 'Girls',
        count: 30,
        fill: '#FAE27C',
    },
];



const CountChart = () => {
    return(
        <div className='bg-white rounded-xl w-full h-full p-4 '>
            {/*TITLE*/}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src='/moreDark.png' alt='student' width={20} height={20} />
            </div>
            {/*CHART*/}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src='/maleFemale.png' alt='' width={50} height={50}  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/*BOTTOM*/}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-boyIndicatorColor rounded-full'></div>
                        <h1 className='font-bold '>1,234</h1>
                        <h2 className='text-xs text-gray-300'>Boys (66%)</h2>

                </div>

                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-girlIndicatorColor rounded-full'></div>
                    <h1 className='font-bold '>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Girls (36%)</h2>
                </div>
            </div>

        </div>
    )
}

export default CountChart;
