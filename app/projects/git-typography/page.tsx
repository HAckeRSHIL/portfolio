import React from 'react';
import FullProjectSection from '../fullprojectsection';
import ExploreMore from '../exploremore';
import NavBar from '@/app/components/navbar/navbar';

const projectData = {
  "title": "GitTypography",
  "category": "GitHub Contribution Art",
  "skills": [
    "Python",
    "Git",
    "GitHub API",
    "Automation"
  ],
  "live_link": null,
  "github_link": "https://github.com/HAckeRSHIL/text-on-github",
  "redirect_link": "/projects/gitTypography",
  "image_url": "/image/git-typography.gif",
  warning: null,
  last: '/projects/crossify',
  next: '/projects/invoice-automation',
  "overview": [
    "GitTypography is a creative Python script that transforms your GitHub heatmap into a work of art. Using this tool, you can spell out words, create patterns, or even render simple images directly on your GitHub contribution graph, turning it into a unique display of creativity that enhances your GitHub profile.",
    "The tool operates within the constraints of a 7x52 grid, mirroring the weekly and yearly layout of a GitHub heatmap, ensuring that designs fit perfectly within the display.",
    "It safely alters your GitHub heatmap by generating commits that correspond to desired patterns or texts without interfering with actual project histories, thus preserving the integrity of your GitHub contributions."
  ],
  "features": [
    "Simple String to Heatmap Typography: Convert simple strings into visually appealing designs on your GitHub heatmap.",
    "Image to Heatmap Conversion: (Upcoming) Convert images into grayscale and map them onto your heatmap for a more complex and detailed representation.",
    "Safe for Your Repos: Operates without interfering with your actual project commit history."
  ],
  "challenges": "The main challenges were related to mapping inputs accurately onto the GitHub heatmap's unique calendar layout, ensuring the tool adapts to different user configurations and managing GitHub's API limitations.",
  "results": "GitTypography has allowed users to creatively enhance their GitHub profiles, turning their contribution graphs into personalized works of art."
}


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
