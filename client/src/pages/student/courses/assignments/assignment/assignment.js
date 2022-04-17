import React from 'react'
import Navbar from "../../../Navbar/Navbar";
import { Link, useNavigate } from 'react-router-dom';
import Homebar from '../../../Homebar/Homebar';
import axios from 'axios';
import AttachmentIcon from '@mui/icons-material/Attachment';

export default function Assignment() {
    const [text, setText] = React.useState('')
    const [files, setFiles] = React.useState([])

    const getInfo = () => {
        // try {
        //     const res = await axios.get("localhost:8000/", {
        //         params: {
        //             product: sessionStorage.getItem("assignid")
        //         }
        //     })
        // } catch (err) {
        //     console.log(err)
        // }

        const res = {
            title: 'Assignment 1: Software Security',
            due: '18th April',
            status: 'In-Progress',
            instructions: 'Only one member has to make the submission.\nPlease zip the file as RollNo_Assignment1.',
            file: 'file.pdf'
        }

        return (
            <div>
                <h2>{res.title}</h2>
                <br></br>
                <h4> <b>Due:</b> {res.due}</h4>
                <h4> <b>Status:</b> {res.status}</h4>
                <h4> <b>Instructions:</b> {res.instructions}</h4>
                <br></br>
                <AttachmentIcon />
                <a href={res.file} download style={{ 'textDecoration': 'none', 'fontSize': '14px' }}> Download Attachment</a> {/* download attachment received as res.file */}
            </div>
        );

    }

    const submitAssignment = () => {
        // try {
        //     const res = axios.post(
        //         "localhost:8000",
        //         {
        //             submittedText: text,
        //             submittedFile: file
        //         }
        //     )
        // } catch (dispatchErr) {
        //     console.log(dispatchErr)
        // }

        console.log(files, text)
    }

    return (
        <div>
            <Navbar />
            <Homebar />

            <div className='assign' style={{ 'width': '66%', 'margin-left': '30%', 'margin-top': '3%' }}>
                <div className='info'>
                    {
                        getInfo()
                    }
                </div>
                <hr></hr>
                <div className='submission'>
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Submission Text</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(ev) => setText(ev.target.value)}></textarea>
                        </div>
                    </form>
                    <div class="mb-3">
                        {/* <label for="formFileMultiple" class="form-label">Assignment</label> */}
                        <input class="form-control" type="file" id="formFileMultiple" multiple onChange={(ev) => setFiles(ev.target.value)} />
                    </div>

                    <button type="button" class="btn btn-secondary btn-lg btn-block" style={{'background-color':'#0F245A'}} onClick={() => submitAssignment()}> Submit </button>
                </div>
            </div>
        </div>
    );
}