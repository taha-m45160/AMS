import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './requestmeeting.css'

const requestmeeting = () => {
  const {state} = useLocation();
  const selectTime = () => {
    console.log('timeSelected');
}
    return (

        <div className = "container">
    <div className="box-1">
        <h1>Academics Management System </h1>
    </div>

    <div className = "Heading1"> 
        <h2> Request Meeting </h2>
    </div>   

    <div className = "Heading2"> 
        <h2> Select the times you are free: </h2>
    </div>    


    <div style="height:280px; width: 700px;">
        <div className="days">
        <div className="day">
          <div className="datelabel"><strong>Monday</strong><br/>April 23</div>
          <div className="timeslot">5:00pm</div>
          <div className="timeslot">5:30pm</div>
          <div className="timeslot">6:00pm</div>
        </div>
        <div className="day">
          <div className="datelabel"><strong>Tuesday</strong><br/>April 24</div>
          <div className="timeslot">5:00pm</div>
          <div className="timeslot">5:30pm</div>
          <div className="timeslot">6:00pm</div>
        </div>  
        <div className="day">
          <div className="datelabel"><strong>Wednesday</strong><br/>April 25</div>
          <div className="timeslot">5:00pm</div>
          <div className="timeslot">5:30pm</div>
          <div className="timeslot">6:00pm</div>
        </div>
        <div className="day">
          <div className="datelabel"><strong>Thursday</strong><br/>April 26</div>
          <div className="timeslot">5:00pm</div>
          <div className="timeslot">5:30pm</div>
          <div className="timeslot">6:00pm</div>
        </div>
        <div className="day">
          <div className="datelabel"><strong>Friday</strong><br/>April 27</div>
          <div className="timeslot">5:00pm</div>
          <div className="timeslot">5:30pm</div>
          <div className="timeslot">6:00pm</div>
        </div>
        </div>
      </div>

      <div className = "Heading3">
          <h3> Day and Time selected: April 25, Wednesday, 5:30pm </h3>
      </div>

      <div className = "SendReq">
        <h3> Send Request </h3>
        </div>

</div>

    )
}