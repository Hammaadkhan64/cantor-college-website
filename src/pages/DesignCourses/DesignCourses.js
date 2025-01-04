import React, { useState } from 'react';
import './DesignCourses.css';

const DesignCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const designCourses = [
    {
      CourseTitle: "Graphic Design",
      CourseType: "Undergraduate",
      CourseSummary: "Develop your own creative and innovative approach to graphic design by challenging and exploring contemporary practices through a series of exciting and diverse projects.",
      CourseAwardName: "BA (Honours)",
      UcasCode: "W210",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Art and Design",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Interior Architecture and Design",
      CourseType: "Undergraduate",
      CourseSummary: "Develop your own creative and sustainable approach to interior architecture and design by challenging and exploring contemporary practices through a series of exciting and diverse projects.",
      CourseAwardName: "BA (Honours)",
      UcasCode: "W250",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Art and Design",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Jewellery, Materials and Design",
      CourseType: "Undergraduate",
      CourseSummary: "Develop your own creative and innovative approach to jewellery design, challenging and exploring contemporary practices through new technologies and craft techniques.",
      CourseAwardName: "BA (Honours)",
      UcasCode: "W721",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Art and Design",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Game Design and Development",
      CourseType: "Undergraduate",
      CourseSummary: "Study a course with a distinctive, practice-based approach to games design – gaining a diverse skill set and useful experience within the field.",
      CourseAwardName: "BA (Honours)",
      UcasCode: "A112",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Art and Design",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Product Design",
      CourseType: "Undergraduate",
      CourseSummary: "Develop a highly creative approach to producing innovative 'future-facing' products by exploring and challenging design through a series of exciting and diverse projects.",
      CourseAwardName: "BSc (Honours)",
      UcasCode: "D009",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Art and Design",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Product Design",
      CourseType: "Undergraduate",
      CourseSummary: "Develop a creative and innovative approach to product design and service innovation by challenging and exploring contemporary practices through a series of exciting and diverse projects.",
      CourseAwardName: "BA (Honours)",
      UcasCode: "W240",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Art and Design",
      NoLongerRecruiting: false,
    },
    {
      CourseTitle: "Digital Media Production",
      CourseType: "Undergraduate",
      CourseSummary: "Design and produce new media products in film, animation, interactive media, web, apps, VR, cross-media and games.",
      CourseAwardName: "BA (Honours)",
      UcasCode: "W212",
      UcasPoints: 112,
      YearOfEntry: "2025/26",
      ModeOfAttendance: "Full-time",
      StudyLength: "3 / 4 years",
      HasFoundationYear: false,
      CourseSubject: "Art and Design",
      NoLongerRecruiting: false,
    },
  ];

  const handleCourseClick = (index) => {
    setSelectedCourse(selectedCourse === index ? null : index);
  };

  return (
    <div className="design-courses-container">
      <h1>Design Courses</h1>

      <div className="intro-content">
        <p>
          The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
        </p>
        <p>
          The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
        </p>
        <p>
          You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
        </p>
      </div>

      <h2>Design Course List:</h2>
      {designCourses.length === 0 ? (
        <p>No design courses available at the moment.</p>
      ) : (
        <ul>
          {designCourses.map((course, index) => (
            <li key={index} className="course-item">
              <div className="course-header" onClick={() => handleCourseClick(index)}>
                <h3>{course.CourseTitle} <span className="course-type">({course.CourseType})</span></h3>
              </div>
              {selectedCourse === index && (
                <div className="course-details">
                  <p><strong>Course Summary:</strong> {course.CourseSummary}</p>
                  <p><strong>Award Name:</strong> {course.CourseAwardName}</p>
                  <p><strong>UCAS Code:</strong> {course.UcasCode}</p>
                  <p><strong>UCAS Points:</strong> {course.UcasPoints}</p>
                  <p><strong>Year of Entry:</strong> {course.YearOfEntry}</p>
                  <p><strong>Mode of Attendance:</strong> {course.ModeOfAttendance}</p>
                  <p><strong>Study Length:</strong> {course.StudyLength}</p>
                  <p><strong>Foundation Year:</strong> {course.HasFoundationYear ? 'Yes' : 'No'}</p>
                  <p><strong>Course Subject:</strong> {course.CourseSubject}</p>
                  <p><strong>No Longer Recruiting:</strong> {course.NoLongerRecruiting ? 'Yes' : 'No'}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DesignCourses;