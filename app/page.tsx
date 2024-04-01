import { FileText, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import ProjectSection from './components/projects/section';
import Waving from './components/waving';
import ExperienceSection from './components/experience/section';
import SkillsSection from './components/skills/section';
import CtaSection from './components/cta/section';
import FooterSection from './components/footer/section';
import Follow from './components/navbar/follow';
import NavBar from './components/navbar/navbar';
import AchievementSection from './components/achievements/section';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='grid-[20px] mt-[80px] grid  grid-cols-4 lg:grid-cols-6'>
        <Follow />
        <header className='col-span-4 grid w-full grid-cols-4 gap-[20px] lg:col-start-2'>
          <span className='col-span-4 space-y-4 lg:col-span-2'>
            <div className=' relative h-[150px] w-[150px] overflow-hidden rounded-full'>
              <Waving />
              <Image
                className='absolute top-0 -z-10'
                src={'/image/image-background.png'}
                width={200}
                height={200}
                alt='image colors'
              />
            </div>
            <section className='space-y-1'>
              <h1>Harshil Patel</h1>
              <p>
                A <span className='bold'>software engineer</span> with a passion
                in <span className='bold'>full stack development</span> and{' '}
                <span className='bold'>competitive coding</span>. A graduate
                student majoring in Software Engineering with a focus on
                Enterprise software.
              </p>
            </section>
            <section className='flex justify-end gap-[10px] pt-8'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://docs.google.com/document/d/10bm6ENzVVDtT7B2hR6qeLSN_mVFGkhhL/edit?usp=sharing&ouid=114781405583959594072&rtpof=true&sd=true'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <FileText />
              </a>
              <a
                href='https://github.com/hackershil?tab=repositories'
                target='_blank'
                rel='noreferrer'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <Github />
              </a>
              <a
                href='https://www.linkedin.com/in/hackershil/'
                rel='noreferrer'
                target='_blank'
                className='text-light-general hover:text-light-subtitle dark:text-dark-general dark:hover:text-dark-subtitle'
              >
                <Linkedin />
              </a>
            </section>
          </span>
          <span className='col-span-4 space-y-4 lg:col-span-2'>
            <p>
              I excel in developing fast, scalable, and smooth software for
              enterprises.
            </p>
            <p>
              I bring 2 years of hands-on experience from AI-based startups,
              where I delivered centralized analytics tools for multinational
              businesses. Experience in managing large data, crafting
              user-friendly web apps, and automating tasks for streamlined
              development.
            </p>
            <p>
              I frequently dedicate time to enhance my current skills in
              React.js, Tailwind, TypeScript, Node.js and Python aiming to write
              clean and efficient code.
            </p>
            <p>Currently learning Next.js, Electron, GraphQL, Redis, AWS.</p>
          </span>
        </header>
        <ProjectSection />
        <ExperienceSection />
        <AchievementSection />
        <SkillsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
