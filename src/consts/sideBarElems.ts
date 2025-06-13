//this array will be used to display side bar items for candidate!!
//Этот массив будет использоваться для отображения пунктов боковой панели для кандидата.
export const candidateSidebarItems = [
    {
        label: 'Dashboard',
        icon: '/icons/sideBar/home.png',
        href: '/'
    },
    {
        label: 'Job Opportunities',
        icon: '/icons/sideBar/caseMinimalistic.png',
        href: '/jobs',
        children: []
    },
    {
        label: 'Interview Calendar',
        icon: '/icons/sideBar/calendar.png',
        href: '/calendar'
    },
    {
        label: 'Messages',
        icon: '/icons/sideBar/letter.png',
        href: '/messages'
    },
    {
        label: 'Profile',
        icon: '/icons/sideBar/user.png',
        href: '/profile',
        children: [
            { label: 'My Profile', href: '/profile/my' },
            { label: 'My Values Match', href: '/profile/values' },
            { label: 'Account Settings', href: '/profile/settings' }
        ]
    }
];
//this one for recruiter
export const recruiterSideBarItems=[
    {
        label: 'Dashboard',
        icon: '/icons/sideBar/home.png',
        href: '/'
    },
    {
        label: 'Job Management',
        icon: '/icons/sideBar/caseMinimalistic.png',
        href: '/jobs',
        children: [
            { label: 'Create Job Post', href: '/jobs/newJob' },
            { label: 'Manage Postings', href: '/jobs/managePosting' },
            { label: 'Compare Candidates', href: '/jobs/compareCandidates'}
        ]
    },
    {
        label: 'Candidates',
        icon: '/icons/sideBar/people.svg',
        href: '/calendar'
    },
    {
        label: 'Messages',
        icon: '/icons/sideBar/letter.png',
        href: '/messages'
    },
    {
        label: 'Settings',
        icon: '/icons/sideBar/user.png',
        href: '/settings',
    },
    {
        label: 'Analytics & Insights',
        icon: '/icons/sideBar/graphUp.svg',
        href: '/analytics',
    }
]