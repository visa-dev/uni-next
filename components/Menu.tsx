import Link from "next/link";
import Image from "next/image";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "lecture", "student"],
            },
            {
                icon: "/lecture.png",
                label: "Lecture",
                href: "/list/lecture",
                visible: ["admin", "lecture"],
            },
            {
                icon: "/student.png",
                label: "Students",
                href: "/list/students",
                visible: ["admin", "lecture"],
            },
            {
                icon: "/subject.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "lecture"],
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "lecture"],
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "lecture", "student",],
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "lecture", "student",],
            },
            {
                icon: "/result.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "lecture", "student"],
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "lecture", "student",],
            },
            {
                icon: "/calendar.png",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "lecture", "student",],
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "lecture", "student",],
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/list/announcements",
                visible: ["admin", "lecture", "student",],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "lecture", "student",],
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "lecture", "student",],
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "lecture", "student",],
            },
        ],
    },
];


const Menu = () => {
    return (
        <div className=''>
            {menuItems.map((item) => (
                <div className='flex flex-col gap-2' key={item.title}>
                    <span className='hidden lg:block text-gray-400 font-light my-4'>{item?.title}</span>
                    {item.items.map((link) => (
                        <Link href={link.href} key={link.href} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
                            <Image src={link?.icon} alt={link?.label} width={20} height={20} />
                            <span className='hidden lg:block'>{link.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu;
