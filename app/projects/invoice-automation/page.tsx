import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';
import NavBar from '@/app/components/navbar/navbar';

const projectData = {
  title: 'Invoice Automation',
  category: 'Invoice Parser | Extractor | Visualizer',
  skills: [
    'React.js',
    'Express.js',
    'Node.js',
    'MongoDB',
    'RegEx',
    'EUI',
    'Redux',
    'Context API',
    'REST-APIs',
    'Chart.js',
    'Swagger',
    'Multer',
    'Passport',
    'JWT',
    'PDF.js',
    'Winston',
  ],
  live_link: 'https://meekneil.vercel.app/',
  github_link: 'https://github.com/hackershil/invoice-automation-client',
  redirect_link: '/projects/invoice-automation',

  image_url: '/image/invoice-automation-poster.gif',
  overview: [
    'My uncle owns multiple gas stations in Georgia and Alabama. Most of the paperwork is handled by him. When he orders gas from the oil company, they send an invoice via email approximately every 15 days. He manually enters information from these invoices into an Excel sheet to keep track of things. However, since he owns 12+ gas stations, this process has become very mundane and time-consuming.',
    'To save my uncle’s precious time, I built a web application where users can upload multiple invoice PDFs. The backend of the application extracts relevant information and stores it in MongoDB collections.',
    'Once the PDFs and data are stored in the backend, the application allows users to retrieve totals, including the total number of gallons consumed based on gas type and the prices of different gases. It also provides an intuitive view of this data using advanced tables and Excel-like views.',
    'For extra points, I plan to build visualizations related to purchases, showing which locations generate more revenue and which types of gas are more frequently bought. Additionally, I aim to visualize how many gallons are distributed among the three categories: Regular, Super, and Diesel. Finally, I plan to illustrate how prices fluctuate over time on a yearly, monthly, and weekly basis.',
  ],
  features: [
    'Users can upload multiple PDF invoices in the web application, and the backend stores them while extracting key information such as total invoice amount, gallon quantity, gas type, delivery date, and purchase date. The backend promptly responds with extracted JSON data for users to review, ensuring transparency and error detection.',
    'Once all relevant data is collected, users can utilize an advanced table feature to search, filter, and sort invoices based on various parameters. Through an action menu, users can manually create, edit, delete, and download invoices in PDF format, granting them full control over their invoicing management.',
    'For trend analysis, users can access dynamic dashboards where they can adjust time frames, groupings, and aggregate functions to tailor views according to their specific needs. These dashboards provide insights into gas types, company names, and store locations, allowing users to compare gas consumption across different stores and track price fluctuations over time.',
    'While features such as manual editing, downloading, and deletion of invoices are still under development, the application aims to automate extraction value setup and provide specific types for enhanced accuracy. Furthermore, robust roles and privileges management ensure secure access and tailored permissions for users, safeguarding sensitive information and maintaining accountability.',
  ],
  challenges:
    "One of the first challenges is storing and parsing the PDF. I tried several libraries, but encountered issues with some of them. After some trial and error, I opted for a simple approach: storing the PDF in the backend itself since we don't have many invoices, and using pdf.js to parse the content. After parsing the content, the main challenge was understanding the structure and parsing the data using regular expressions (regex) that could handle multiple types of PDFs. To address this, I developed a generic extraction regex combined with some specific extraction regex. While this approach worked well, the parsing required a lot of logic, and extending support for different PDFs would require significant development effort.",
  results: 'Invoice Automation (However my uncle is still using Excel xD)',
  last: '/projects/crossify',
  next: '/projects/crossify',
  warning: null,
};

const page = () => {
  return (
    <>
      <NavBar />
      <main className='mt-[80px] grid grid-cols-6'>
        <FullProjectSection data={projectData} />
        <ExploreMore previous={projectData.last} next={projectData.next} />
      </main>
    </>
  );
};

export default page;
