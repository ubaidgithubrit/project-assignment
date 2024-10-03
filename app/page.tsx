"use client"; 

import Card from "./components/card"; 
import "./globals.css"; 

export default function Home() {
    const students = [
        { name: 'Ubaid Malik' , rollNo: '00111', day:'monday', center: 'Governer House Karachi',campus:'Main',batch:'1          ',quarter:'Q2', image: '', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5wPL1APETRp_RjOryubE4F38kobYEkRNLg&s' },
        { name: 'Hassan', rollNo: '00222', day: 'tuesday', center: 'Governer House Karachi',campus:'Main',batch:'1            ',quarter:'Q2',image: '' , logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5wPL1APETRp_RjOryubE4F38kobYEkRNLg&s'},
        { name: 'Omar', rollNo: '00333', day: 'wednesday', center: 'Governer House Karachi',campus:'Main',batch:'1               ',quarter:'Q2',image:'', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5wPL1APETRp_RjOryubE4F38kobYEkRNLg&s' },
    ];

    return (
        <div className="container"> {}
            {students.map((student) => (
                <Card key={student.rollNo} student={student} />
            ))}
        </div>
    );
}
