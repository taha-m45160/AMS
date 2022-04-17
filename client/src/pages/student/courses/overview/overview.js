import "./overview.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../../admin/Navbar/Navbar";
// import Navbar from '../../testnav/testnav'
import Homebar from "../../courses/courseHome/courseHome";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CourseOverview() {
    const ccode = sessionStorage.getItem("course")

    const getTitle = () => {
        // try {
        //     const title = await axios.get(`/student/courses/${ccode}/title`)
        //     return title
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <h1 style={{'color':'white'}}>
                Advanced Programming
            </h1>
        );
    }

    const getDesc = () => {
        // try {
        //     const desc = await axios.get(`/student/courses/${ccode}/desc`)
        //     return desc
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <div className="desc">
                This course introduces students to the threats as well as defenses for securing networks. Students successfully completing this class will be able to evaluate works in academic and commercial security, and will have rudimentary skills in security research. Topics covered include network security, authentication, security protocol design and analysis, security modeling, trusted computing, key management, program safety, intrusion detection, DDoS detection and mitigation, architecture/operating systems security, security policy, web security, and other emerging topics.
            </div>
        );
    }

    const getInstr = () => {
        // try {
        //     const instr = await axios.get(`/student/courses/${ccode}/instructor`)
        //     return instr
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <div className="instructor">
                Dr. Junaid Haroon
            </div>
        );  
    }

    const getGradeBreakup = () => {
        // try {
        //     const gb = await axios.get(`/student/courses/${ccode}/gb`)
        //     return gb
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <div className="gb">
                Assignments 35% <br></br>
                Quizzes 18% <br></br>
                CP 2% <br></br>
                Midterm 20% <br></br>
                Final 25%
            </div>
        );
    }

    const displayOverview = () => {
        return (
            <div className="course-info">
                <Card sx={{ maxWidth: 600, marginLeft: '41.5%', marginTop: '7%', transform: 'scale(1.2)'}}>
                    <Typography gutterBottom variant="h1" component="div" style={{ 'text-align': 'center', 'font-size':'25px', 'background-color':'#0F245A', 'padding':'1%'}}>
                        {getTitle()}
                    </Typography>

                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {getInstr()}
                        </Typography>
                        <hr></hr>
                        <Typography variant="body1" color="text.secondary">
                            {getDesc()}
                        </Typography>
                        <hr></hr>
                        <Typography variant="body1" color="text.primary">
                            {getGradeBreakup()}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="course-overview">
            <Navbar />
            <Homebar />

            <div>
                {displayOverview()}
            </div>
        </div>
    );
}