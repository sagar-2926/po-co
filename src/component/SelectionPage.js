import React, {useState} from 'react'

const SelectionPage = () => {

    const [sem, setSem] = useState("3rd Semmester");

  return (
    <div >
        <div className='header'>

        </div>

        <h3 className='heading'>COs and POs Mapping</h3>

        <div className='select'>
          <div className='box'>
          <h3 className='select-head'>Select the Department</h3>
            <select className='select-box' name="cars" id="cars">
                <option value="Information Technology">Information Technology</option>
                <option value="Computer Science Engineering">Computer Science Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Electronics Telecommunication">Electronics Telecommunication</option>
                <option value="Aeronautical Engineering">Aeronautical Engineering</option>
                <option value="Biotech Engineering">Biotech Engineering</option>
            </select>
          </div>
          <div className='box'>
          <h3 className='select-head'>Select the Academic Semester</h3>
            <select className='select-box' name="cars" id="cars">
                <option  value="1st">1st Semester</option>
                <option  value="2nd">2nd Semester</option>
                <option  value="3rd">3rd Semester</option>
                <option  value="4th">4th Semester</option>
                <option  value="4th">5th Semester</option>
                <option  value="4th">6th Semester</option>
                <option  value="4th">7th Semester</option>
                <option  value="4th">8th Semester</option>
            </select>
          </div>
          <div className='box'>
          <h3 className='select-head'>Select the Subject</h3>
            <select className='select-box' name="cars" id="cars">
                <option value="sub">Applied Mathematics 3</option>
                <option value="sub">Programming Logic and Design using C</option>
                <option value="sub">Ethics in IT</option>
                <option value="sub">Digital Electronic and Fundamentals of Micro-Processor</option>
                <option value="sub">Data Communication</option>
                <option value="sub">Environmental Engineering</option>
            </select>
          </div>
          {sem === "3rd Semester" && (
            <div className='box'>
                <h3 className='select-head'>Select the Subject</h3>
                <select className='select-box' name="cars" id="cars">
                    <option value="sub">Applied Mathematics 3</option>
                    <option value="sub">Programming Logic and Design using C</option>
                    <option value="sub">Ethics in IT</option>
                    <option value="sub">Digital Electronic and Fundamentals of Micro-Processor</option>
                    <option value="sub">Data Communication</option>
                    <option value="sub">Environmental Engineering</option>
                </select>
                </div>
          )}
        </div>

        <div className='btn-container'>
            <button className='btn-submit'>Submit</button>
        </div>
    </div>
  )
}

export default SelectionPage