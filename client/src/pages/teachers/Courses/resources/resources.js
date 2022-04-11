import "./resources.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../../../components/Navbar/Navbar";
import SideBar from "../../../../components/Sidebar Teacher/SidebarT"

// TODO:
// SORT OUT FOLDERS AND FILES ISSUE

export default function TeacherResources() {
    const ccode = sessionStorage.getItem("ccode")
    const ctitle = sessionStorage.getItem("ctitle")

    const getResources = () => {
        // try {
        //     const res = await axios.get(`http://localhost:8000/students/courses/${ccode}/resources`)
        // } catch (err) {
        //     console.log(err)
        // }

        const res = [{category:'haskell1', attachment:'.mp4', modified:'17 Jan'}, {category:'CS300outline', attachment:'.pdf', modified:'19 Mar'}]
        const resArr = []

        res.map((r) => {
            resArr.push(
                <tr>
                    <th>{r.category}</th>
                    <th>{r.modified}</th>
                </tr>
            )
        })

        return resArr
    }

    return (
        <div className="resources">
            <Navbar />
            <SideBar />

            <h1 className="course-title">
                CS-300: Advanced Programming
                {/* {ccode}: {ctitle} */}
            </h1>


            {/* <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    New
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Folder</a>
                    <a class="dropdown-item" href="#">File</a>
                    <a class="dropdown-item" href="#">Upload</a>
                </div>
            </div> */}

            <br></br>

            <div className="table">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Modified</th>
                    </tr>

                    {getResources().map((r) => {
                        return r
                    })}
                </table>
            </div>
        </div>
    );
}