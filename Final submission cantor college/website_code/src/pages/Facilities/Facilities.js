import React from 'react';
import './Facilities.css';

const Facilities = () => {
  return (
    <div className="facilities-container">
      <h1>Facilities</h1>
      <p>
        The College is located in the attractive and pleasantly refurbished building. 
        The building houses computing laboratories and lecture/tutorial rooms. 
        It has its own catering facilities and student work areas. There is also a car park to the back of the building.
      </p>
      <p>
        Our building has a space of 9500m², houses over 240 staff, and provides teaching space for more than 1600 students.
      </p>
      <h2>Facilities include:</h2>
      <ul>
        <li>
          Wi-fi technology
          <img src="/images/ACES-032-Computing-Playstation-Lab.jpg" alt="Wi-fi technology" className="facility-image" />
        </li>
        <li>
          Pool teaching rooms, including classrooms to teach from 25 - 80 students
        </li>
        <li>
          Specialist faculty facilities
          <img src="/images/IMG_1087.jpeg" alt="Specialist faculty facilities" className="facility-image" />
        </li>
        <li>
          A double height lecture theatre at first and second floor level
          <img src="/images/CantorLectureTheatre5.JPG" alt="Lecture theatre" className="facility-image" />
        </li>
        <li>
          Dramatic three-storey glass open atrium
          <img src="/images/Cantor atrium 3.jpg" alt="Glass atrium" className="facility-image" />
        </li>
        <li>
          Meeting rooms
          <img src="/images/download.jpeg" alt="Meeting rooms" className="facility-image" />
        </li>
        <li>
          Office accommodation
        </li>
        <li>
          Specialist IT facilities
          <img src="/images/ACES-036-Computing-Playstation-Lab-2.jpg" alt="Specialist IT facilities" className="facility-image" />
        </li>
        <li>
          Reception desk area
        </li>
        <li>
          Catering outlet
        </li>
        <li>
          Parking for disabled badge holders
        </li>
        <li>
          Cycle racks
        </li>
        <li>
          Gallery
          <img src="/images/IMG_0170.jpeg" alt="Gallery" className="facility-image" />
        </li>
      </ul>
    </div>
  );
};

export default Facilities;