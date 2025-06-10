import React from 'react';
import CreateJobForm from "@/app/components/RecruiterComponents/CreateJobForm/CreateJobForm";
import CoreValueKeyWords from "@/app/components/RecruiterComponents/CreateJobForm/CoreValueKeyWord/CoreValueKeyWords";

const Page = () => {
    return (
        <div>
            <CreateJobForm/>
            <CoreValueKeyWords/>
        </div>
    );
};

export default Page;