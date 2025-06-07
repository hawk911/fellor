"use client";
import React, { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";

// Импорт иконок (в зависимости от сборщика — можно импортировать так или через <img>)
import ArrowLeftIcon from "../../public/icons/arrows/arrowLeft.svg";
import ArrowRightIcon from "../../public/icons/arrows/arrowRight.svg";
import Pagination from "@/app/components/RecruiterComponents/ManagePostings/JobTable/Pagination/Pagination";
import TableComponent from "@/app/components/RecruiterComponents/ManagePostings/JobTable/TableComponent/TableComponent";
import TableFilters from "@/app/components/RecruiterComponents/ManagePostings/JobTable/TableFilters/TableFilters";


const jobs = [
    { title: "Senior Software Engineer", dept: "Engineering", status: "Live", precision: "±5%", time: "12 days", pipeline: "5/28" },
    { title: "Senior Software Engineer", dept: "Engineering", status: "Ready to post", precision: "Strict", time: "10 days", pipeline: "5/28" },
    { title: "Product Designer", dept: "Design", status: "Live", precision: "±5%", time: "2 days", pipeline: "5/28" },
    { title: "Senior Software Engineer", dept: "Engineering", status: "Live", precision: "Strict", time: "2 days", pipeline: "5/28" },
    { title: "Product Designer", dept: "Design", status: "Archived", precision: "Strict", time: "2 days", pipeline: "5/28" },
    { title: "QA Engineer", dept: "Quality Assurance", status: "Live", precision: "±10%", time: "5 days", pipeline: "3/15" },
    { title: "UX Researcher", dept: "Design", status: "Ready to post", precision: "±5%", time: "7 days", pipeline: "1/10" },
];
export default function JobTable() {
    const [page, setPage] = useState(1);
    const rowsPerPage = 3;
    const [filters, setFilters] = useState({ status: "", dept: "",search:"" });
    const filteredJobs = jobs.filter(job =>
        (filters.status ? job.status === filters.status : true) &&
        (filters.dept ? job.dept === filters.dept : true)
    );

    const pageCount = Math.ceil(filteredJobs.length / rowsPerPage);
    const currentRows = filteredJobs.slice((page - 1) * rowsPerPage, page * rowsPerPage);
    return (
        <>
            <TableFilters  />
            <TableComponent currentRows={currentRows}/>
               <Pagination page={page} setPage={setPage} pageCount={pageCount}  />
        </>
    );
}
