import "./Courses.css";
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from "./../Navbar/Navbar";
import Homebar from "./../Homebar/Homebar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Home from '../../student/Homepage/Homepage'


export default function Courses() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const toCourse = async (id, title) => {
        sessionStorage.setItem("ccode", id)
        sessionStorage.setItem("ctitle", title)
        const res = await axios.post('https://academic-management-system.herokuapp.com/students/getCourseDetails', {ccode: id})
        console.log(res)
        navigate(`/student/course/overview`, {state:{
            data: res.data
        }})
    }

    const displayCourses = () => {
        const courseComponents = []
        
        state.courses.map((course) => {
            courseComponents.push(
                <Item>

                    <Card sx={{ width: '100%', height: '100%', border: 1 }}>
                        <CardActionArea sx={{ width: '100%', height: '100%' }} onClick={() => toCourse(course.ID, course.title)}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h2" component="div">
                                    {course.ID}
                                </Typography>

                                <Typography variant="h3" color="text.secondary">
                                    {course.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Item>
            )
        })
        return courseComponents
    }

    function Item(props) {
        const { sx, ...other } = props;
        return (
            <Box
                sx={{
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    p: 0,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    width: '100%',
                    ...sx,
                }}
                {...other}
            />
        );
    }

    Item.propTypes = {
        sx: PropTypes.oneOfType([
            PropTypes.arrayOf(
                PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
            ),
            PropTypes.func,
            PropTypes.object,
        ]),
    };

    return (
        <div className="courses">
            <Navbar />
            <Homebar />

            <div className="c1">
                <Box
                    sx={{
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 1,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                >
                    {
                        displayCourses().map((comp) => {
                            return comp
                        })
                    }
                </Box>
            </div>
        </div>
    );
}