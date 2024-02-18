import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';
import NavBar from '@/app/components/navbar/navbar';

const crossify_project_data = {
  title: 'Crossify',
  category: 'Event and Club driven social media',
  skills: [
    'React.js',
    'Express.js',
    'Node.js',
    'MongoDB',
    'Tailwind',
    'Material-UI',
    'Redux',
    'REST-APIs',
    'OAuth',
    'Google Maps Api',
    'Socket.io',
    'Chart.js',
    'Passport',
    'SMTP server',
    'Cloudinary',
  ],
  live_link: 'https://crossify.vercel.app/',
  github_link: 'https://github.com/hackershil/crossify',
  image_url: '/image/crossify-smooth.gif',
  overview: [
    "During college, I had multiple interests that I wanted to pursue. However, the college didn't have any clubs related to those interests, and even in my neighborhood, it was hard to find someone with similar interests. I found that this was not a unique problem; many of my friends had interests they wanted to pursue but couldn't find any ongoing groups or locations to do so.",
    'In reality, we cross paths with many people who could be our teammates or partners and who share similar mindsets. The problem is, we don\'t always know this very well. So, my aim was to help people connect with like-minded individuals who want to engage in the same activities or hobbies. From that, I named the product "Crossify" - to help people cross paths with like-minded individuals.',
    'To address this issue, we planned to provide a platform where people could easily manage clubs/groups and host events with minimal effort, while users could easily search for nearby events and clubs based on their preferences.',
    'We were tackling two main parts: the discovery mechanism and the management of clubs and events.',
  ],
  features: [
    'The most crucial function of this product is the discovery of nearby clubs and events. Not only that, but the user can adjust the radius of interest and add additional filters such as private or public clubs, showing only clubs with more than 50 members, and selecting specific categories.',
    'For efficient query response, we opted for MongoDB Geospatial queries because finding nearby locations based on latitude and longitude using normal queries would have been computationally heavy.',
    'We integrated Google Maps APIs to provide visual locations of events or clubs, which also proved useful for obtaining directions to the event.',
    'We incorporated a Full Calendar view for visualizing event dates on a calendar and identifying days that are free for use.',
    'For quick signup, we introduced OAuth through Facebook or Google accounts.',
    'We also introduced several customizations in club creation. Users can create a club and set the privacy to public or invite-only. Public groups are free to join; however, invite-only clubs require completion of questionnaires, and the admin can approve or reject requests.',
    "To manage the club, we introduced multiple levels of hierarchy. The club's creator can appoint any number of moderators. Moderators can edit and approve general requests, such as requests to join or host an event. They can also create chat groups and share documents and photos.",
    'Users can add their social media links, interests, profile photos, short descriptions, and other users can view their profile page. ',
    'To store media files such as profile photos, club photos, club documents, and club galleries, we utilized Cloudinary.',
    'After event approval, the event host can provide additional details such as event time, duration, eligibility, location, and Q&A. All management-related dashboards can be accessed, which includes viewing participants, sending reminders, and making email announcements. We set up an SMTP email server using MailChimp for sending promotions, reminders, and announcements.',
    'On the event page, users can quickly set up reminders in Google Calendar, Apple Calendar, and Outlook Calendar.',
    'For continuous integration, we deployed the project on Vercel through GitHub, and we set up auto-builds whenever we merge into the main branch.',
  ],
  challenges:
    'One problem we encountered was finding the optimal method for locating nearby events/clubs and implementing pagination. Initially, we used a brute force approach by calculating distances based on latitude and longitude differences. However, this significantly impacted performance. Subsequently, we transitioned to using GeoSpatial Queries and created an index based on the lat-long attribute.\n Another challenge we faced was effectively sending promotional messages, signup confirmations, reminders, broadcasting updates, and providing visually appealing emails to users. To address this, we utilized Handlebars and EJS for creating visually appealing emails and leveraged server-side template-based mailing services. Initially, we attempted to use regular Gmail and Nodemailer for sending emails, but this often resulted in our messages being flagged as spam. Consequently, we switched to MailChimp for sending bulk messages.',
  results: 'Crossify',
  last: '/projects/harbor',
  next: '/projects/exhibitify',
  warning: null,
};

const page = () => {
  return (
    <>
      <NavBar />
      <main className='mt-[80px] grid grid-cols-6'>
        <FullProjectSection data={crossify_project_data} />
        {/* <ExploreMore previous={clinkz_data.last} next={clinkz_data.next} /> */}
      </main>
    </>
  );
};

export default page;
