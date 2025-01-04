import React, { useState } from 'react';
import './ComputingCourses.css';


const ComputingCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleCourseClick = (index) => {
    setSelectedCourse(selectedCourse === index ? null : index);
  };
  const courses = [
    {
      CourseTitle: "Computing",
      CourseType: "Undergraduate",
      CourseSummary: "Learn how to code, configure and integrate applications, databases and systems architectures which form the pillars of modern technology in today's world.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "G504",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 Years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Computer Networks",
      CourseType: "Undergraduate",
      CourseSummary: "This course includes general computing skills in programming, cyber security, information systems, management and professionalism in a technical environment.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "G420",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Cyber Security with Forensics",
      CourseType: "Undergraduate",
      CourseSummary: "Prepare for a career in cyber security by designing security systems, identifying evidence of cybercrimes and acting as detectives in a digital world.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "F4G4",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 Years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },{
      CourseTitle: "Computer Science for Games",
      CourseType: "Undergraduate",
      CourseSummary: "Create the software powering the next generation of blockbuster games.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "G611",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 Years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Software Engineering",
      CourseType: "Undergraduate",
      CourseSummary: "Gain experience in the whole software development process and prepare for a career in software engineering.",
      CourseAwardName: "BEng (Honours)",
      UcasCode: "G600",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },{
      CourseTitle: "Computer Science",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a solid foundation in the core areas of computer science, including programming, algorithms, data structures and software development.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "G400",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 Years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Computing with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in computing&nbsp;&ndash; with an initial foundation year to prepare for the course.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "A020",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },{
      CourseTitle: "Cyber Security with Forensics with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in cyber security with forensics, with an initial foundation year to prepare for the course.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "A023",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 Years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },
    {
      CourseTitle: "Software Engineering with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in software engineering, with an initial foundation year to prepare for the course.",
      CourseAwardName: "BEng (Honours)",
      UcasCode: "A017",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },{
      CourseTitle: "Cyber Security with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in cyber security &ndash; with an initial foundation year to prepare for the course.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "A093",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 Years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },
    {
      CourseTitle: "Information Technology with Business Studies with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in information technology with business studies, with an initial foundation year to prepare for the course.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "A019",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },{
      CourseTitle: "Computer Science with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in computer science, with an initial foundation year to prepare for the course.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "A022",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 Years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },
    {
      CourseTitle: "Computer Science for Games with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in computer science for games, with an initial foundation year to prepare for the course.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "A092",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },{
      CourseTitle: "Business and Digital Technology with Foundation Year",
      CourseType: "Undergraduate",
      CourseSummary: "Gain a degree in business and digital communications technology with an initial foundation year to prepare for the course.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "A018",
      UcasPoints: 80,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "4/5 Years",
      HasFoundationYear: true,
      CourseSubject: "Computing",
      NoLongerRecruiting: true,
    },
    {
      CourseTitle: "Computing",
      CourseType: "Postgraduate",
      CourseSummary: "A course enhanced by real-life project experience for non-computing graduates wanting to pursue a career in the IT industry.",
      CourseAwardName: "MSc",
      UcasCode: "",
      UcasPoints: "",
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Part-time",
      StudyLength: "3 years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },{
      CourseTitle: "Computing and Informatics",
      CourseType: "Postgraduate",
      CourseSummary: "Conduct a period of intensive, supervised study where you critically investigate and evaluate an approved topic and make an original contribution to knowledge.",
      CourseAwardName: "MPhil",
      UcasCode: "",
      UcasPoints: "",
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Part-time",
      StudyLength: "3 Years",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Cyber Security",
      CourseType: "Postgraduate",
      CourseSummary: "Develop your skills and academic knowledge in the growing field of cyber security through academic teaching, industry input and practical skills development. Currently applications for this course are only open to home students.",
      CourseAwardName: "MSc",
      UcasCode: "",
      UcasPoints: "",
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "1 year",
      HasFoundationYear: false,
      CourseSubject: "Computing",
      NoLongerRecruiting: false,
    },
  ];

  return (
    <div className="computing-courses-container">
      <h1>Computing Courses at Cantor College</h1>
      <p>
        The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering, and Cyber Security with Forensics, amongst others.
      </p>
      <p>
        The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking, and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics, and programming.
      </p>
      <p>
        The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc or PhD.
      </p>

      <h2>Computing Course List:</h2>
      {courses.length === 0 ? (
        <p>No computing courses available.</p>
      ) : (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              <div className="course-title" onClick={() => handleCourseClick(index)}>
               <strong>{course.CourseTitle}</strong><em> ({course.CourseType})</em>
              </div>
              <em>{course.CourseType}</em><br />
              {selectedCourse === index && (
            <div className="course-details">
            <p>{course.CourseSummary}</p>
            <p><strong>Award Name:</strong> {course.CourseAwardName}</p>
            <p><strong>UCAS Code:</strong> {course.UcasCode}</p>
            <p><strong>UCAS Points:</strong> {course.UcasPoints}</p>
            <p><strong>Year of Entry:</strong> {course.YearOfEntry}</p>
            <p><strong>Mode of Attendance:</strong> {course.ModeOfAttendance}</p>
            <p><strong>Study Length:</strong> {course.StudyLength}</p>
            <p><strong>Foundation Year:</strong> {course.HasFoundationYear ? 'Yes' : 'No'}</p>
            <p><strong>Course Subject:</strong> {course.CourseSubject}</p>
            <p><strong>No Longer Recruiting:</strong> {course.NoLongerRecruiting ? 'Yes' : 'No'}</p>
            </div>)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComputingCourses;