import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import RepeatAndMedicalCount from "@/components/RepeatAndMedicalCount";
import EventCalender from "@/components/EventCalender";


const AdminPage =() =>{
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
           {/*LEFT*/}
            <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                {/*USER CARDS*/}
                <div className='flex justify-between gap-4 flex-wrap'>
                    <UserCard type='student'/>
                    <UserCard type='lecture'/>
                </div>

                {/*MIDDLE CHARTS*/}
                <div className='flex gap-4 flex-col lg:flex-row'>
                    {/*GENDER COUNT CHART*/}
                   <div className='w-full lg:w-1/3 h-[450px]'>
                       <CountChart/>
                   </div>

                    {/*ATTENDANCE CHART*/}
                    <div className='flex lg:w-2/3 h-[450px]'>
                        <AttendanceChart/>
                    </div>
                </div>

                {/*BOTTOM CHARTS*/}
                <div className='w-full h-[500px]'>
                        <RepeatAndMedicalCount/>
                </div>

            </div>

            {/*RIGHT*/}
            <div className='w-full lg:w-1/3 '>
                <div className='flex flex-col gap-4'>
                    <EventCalender/>
                </div>
            </div>
        </div>
    )
}
export default AdminPage;
