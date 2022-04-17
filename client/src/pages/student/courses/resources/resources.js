import "./resources.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../student/Navbar/Navbar'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'title',
        headerName: 'Title',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 250,
        valueGetter: (params) =>
            `${params.row.title || ''}`,
    },
    { field: 'createdby', headerName: 'Created By', width: 130 },
    {
        field: 'modified',
        headerName: 'Last Modified',
        type: 'number',
        width: 120,
    },
    { field: 'size', headerName: 'File Size', type: 'number', width: 120},
];

export default function Resources() {
    const ccode = sessionStorage.getItem("ccode")
    const ctitle = sessionStorage.getItem("ctitle")

    const getResources = () => {
        // try {
        //     const res = await axios.get(`http://localhost:8000/students/courses/resources`)
        // } catch (err) {
        //     console.log(err)
        // }

        const res = [
            { id: 1, title: 'Lecture2.pdf', createdby: 'Jon', modified: 35, size: 10 },
            { id: 2, title: 'Course_Outline.docx', createdby: 'Brad', modified: 35, size: 10 }, 
            { id: 3, title: 'OfficeHours.xlsx', createdby: 'Jon', modified: 35, size: 10 },
            { id: 4, title: 'OfficeHours.xlsx', createdby: 'Jon', modified: 35, size: 10 }
        ]

        return res
    }

    return (
        <div className="resources">
            <Navbar />

            <h1 className="course-title">
                CS-300: Advanced Programming
                {/* {ccode}: {ctitle} */}
            </h1>

            <div style={{ height: 267, width: '100%' }}>
                <DataGrid
                    rows={getResources()}
                    columns={columns}
                    pageSize={3}
                    rowsPerPageOptions={[3]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}