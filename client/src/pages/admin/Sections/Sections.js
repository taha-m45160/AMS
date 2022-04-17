import "./Sections.css";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import React from 'react'
import Homebar from '../Homebar/Homebar'


export default function Sections() {
    const {state} = useLocation();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const [sections, setSections] = React.useState(state.sections)
    const [sectionID, setSectionID] = React.useState('')
    const [year, setYear] = React.useState(new Date().getFullYear()) // try to string
    const [term, setTerm] = React.useState('Fall')

      const handleSubmit = async (ev) => {
        ev.preventDefault();
        try{
            const section = {
              course_ID: state.course_ID,
              ID: sectionID,
              term: term,
              year: year
            }
            console.log(section)
            const res = await axios.post("http://localhost:8000/admin/createSection", section)
            setSections([...sections, res.data.section])
        } catch(err){
          console.log(err);
        }
      }

      const goToEnroll = async (ev, id, term, year) => {
        ev.preventDefault()
        const section = {
          course_ID: state.course_ID,
          course_title: state.course_title,
          ID: id,
          term: term,
          year: year
        }
        const res = await axios.post("http://localhost:8000/admin/getEnrolled", section)
        navigate('/admin/enroll', {state:{
          section: section,
          students: res.data.students,
          teachers: res.data.teachers
        }})
      }

      const changeSectionID = (ev) => {
        ev.preventDefault()
        setSectionID(ev.target.value)
      }
      const changeYear = (ev) => {
        ev.preventDefault()
        setYear(ev.target.value)
      }
      const changeTerm = (ev, t) => {
        ev.preventDefault()
        setTerm(t)
      }
  
    return (
      <div>
        <Navbar></Navbar>
        <Homebar></Homebar>
        <div className="col d-flex justify-content-center" style={{'marginLeft':'350px'}}>
        <div className="card text-center m-2" style={{'width':'95%'}}>
          <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
            Create Section
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="pass-form">
              <br />
            <div className="fieldWrap">
              <input
                type='number'
                className='sec_id'
                onChange={changeSectionID}
                value={sectionID}
                placeholder="enter section id"
                required
              />
              <br /> <br />
              <label htmlFor="year">Year:</label>
              <select className="year form-select form-select-lg ms-3" value={year} onChange={changeYear}
              style={{'width':'15%', display:'inline-flex'}}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
              </select>

              <label htmlFor="Term" className="ms-5">Select term:</label>
              <div className="Term btn-group ms-3" role="group">
                {term === 'Spring' && <div>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeTerm(ev, 'Fall')}}>Fall</button>
                <button type="button" className="btn btn-primary fw-bold"onClick={(ev) => {changeTerm(ev, 'Spring')}}>Spring</button>
                </div>}
                {term === 'Fall' && <div>
                <button type="button" className="btn btn-primary fw-bold" style={{color: '#0F245A' }}onClick={(ev) => {changeTerm(ev, 'Fall')}}>Fall</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeTerm(ev, 'Spring')}}>Spring</button>
                </div>}
              </div>
              <br />
            </div>
            <br /> <br />
            <button type="submit" className="createSection" >
              Create Section
            </button>
          </form>
        </div>
      </div>
      </div >
      <br /> <br />
      <div className="col d-flex justify-content-center" style={{'marginLeft':'350px'}}>
        <div className="card text-center m-2" style={{'width':'95%'}}>
            <div className="Sections display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
              {state.course_ID}: {state.course_title} - Sections
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{'textAlign':'center'}}>Section ID</th>
                  <th scope="col" style={{'textAlign':'center'}}>Term</th>
                  <th scope="col" style={{'textAlign':'center'}}>Year</th>
                </tr>
              </thead>
              <tbody>
              {sections.map((section, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><a className="toSectionPage text-primary" onClick={(ev) => {goToEnroll(ev, section.ID, section.term, section.year)}}>{section.ID} </a></td>
                  <td>{section.term}</td>
                  <td>{section.year}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
      </div>
      </div>
    );
  }