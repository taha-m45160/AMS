import "./courses.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../../components/Navbar/Navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function Courses() {
    const navigate = useNavigate();

    const displayCourses = () => {
        // try {
        //     const enrolledCourses = await axios.get('http://localhost:8000/student/courses')
        // } catch (err) {
        //     console.log(err)
        // }

        const enrolledCourses = [
            { code: 'CS-300', title: 'Advanced Programming' },
            { code: 'CS-582', title: 'Distributed Systems' },
            { code: 'CS-535', title: 'Machine Learning' },
            { code: 'CS-473', title: 'Network Security' }
        ]
        const courseComponents = []

        const toCourse = (id, title) => {
            sessionStorage.setItem("ccode", id)
            sessionStorage.setItem("ctitle", title)
            navigate(`/student/courses/${id}/overview`)
        }

        enrolledCourses.map((course) => {
            courseComponents.push(
                <Item>
                    <Card sx={{ width: '100%', height: '100%', border: 1 }}>
                        <CardActionArea sx={{ width: '100%', height: '100%' }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography gutterBottom variant="h4" component="div">
                                    {course.code}
                                </Typography>

                                <Typography variant="body1" color="text.secondary">
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
                    // width: '75%',
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

            {/* <h1>Courses</h1> */}

            <div style={{ width: '100%'}}>
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