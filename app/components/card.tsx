import React from "react";

type StudentProps = {
    student: {
        name: string;
        rollNo: string;
        center: string;
        day: string;
        campus: string;
        batch: string;
        quarter:string;
        image?: string; 
         logo?: string; 
    };
};

const Card: React.FC<StudentProps> = ({ student }) => {
    return (
             <div className="card">
            <div className="image-box" style={{ backgroundImage: `url(${student.image})` }}>
                {student.logo && (
                    <div className="logo" style={{ backgroundImage: `url(${student.logo})` }}></div>
                )}
            </div>
            <div className="card-content">
    <h3>
        <span className="text-blue"><b>Name:</b></span> {student.name}
    </h3>
    <h3>
        <span className="text-blue"><b>Roll No:</b></span> {student.rollNo}
    </h3>
    <h3>
        <span className="text-blue"><b>Day:</b></span> {student.day}
    </h3>
    <h3>
        <span className="text-blue"><b>Center:</b></span> {student.center}
    </h3>
    <h3>
        <span className="text-blue"><b>Campus:</b></span> {student.campus}
    </h3>
    <h3>
        <span className="text-blue"><b>Batch:</b></span> {student.batch}    
    
    
        <span className="text-blue"><b>Quarter:</b></span> {student.quarter}
    </h3>
</div>

</div>

    
    );
};

export default Card;
