'use client';
import React, { useEffect } from 'react';
import ReactIcon from '@/public/icons/react.svg';
import NextIcon from '@/public/icons/next.svg';
import TailwindIcon from '@/public/icons/tailwind.svg';
import JavaScriptIcon from '@/public/icons/javascript.svg';
import TypeScriptIcon from '@/public/icons/typescript.svg';
import ElasticSearchIcon from '@/public/icons/elasticsearch.svg';
import ExpressIcon from '@/public/icons/express.svg';
import AwsIcon from '@/public/icons/aws.svg';
import CplusplusIcon from '@/public/icons/cplusplus.svg';
import MySQLIcon from '@/public/icons/mysql.svg';
import MongoIcon from '@/public/icons/mongo.svg';
import JavaIcon from '@/public/icons/java.svg';
import CIcon from '@/public/icons/c.svg';
import CSharpIcon from '@/public/icons/csharp.svg';
import PythonIcon from '@/public/icons/python.svg';
import DockerIcon from '@/public/icons/docker.svg';
import NodeJSIcon from '@/public/icons/nodejs.svg';
import KubernetsIcon from '@/public/icons/kubernets.svg';
import JenkinsIcon from '@/public/icons/jenkins.svg';
import NginxIcon from '@/public/icons/nginx.svg';
import AngularIcon from '@/public/icons/angular.svg';
import HtmlIcon from '@/public/icons/html.svg';
import CssIcon from '@/public/icons/css.svg';
import { handleSkillContainer } from '@/app/animations';

const SkillsSection = () => {
  useEffect(() => {
    handleSkillContainer();
  }, []);
  return (
    <section
      className='col-span-6 space-y-[40px]  pt-[80px] lg:col-start-2 lg:col-end-6'
      id='skill'
    >
      <h1 className='title below-fold'>SKILLS</h1>
      <section className='flex flex-wrap gap-[20px]'>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <ReactIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            react
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <TailwindIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            tailwind
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <NextIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            next
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <AngularIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            angular
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <HtmlIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            html
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <CssIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            css
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <JavaScriptIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            javascript
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <TypeScriptIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            typescript
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <ElasticSearchIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            elasticsearch
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <DockerIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            docker
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <KubernetsIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            kubernetes
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <JenkinsIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            jenkins
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <NginxIcon />
          </div>
          <p className='group-hover:opacity-10000 absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            nginx
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <NodeJSIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            node.js
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <ExpressIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            express
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <AwsIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            aws
          </p>
        </div>

        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <MySQLIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            mysql
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <MongoIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            mongo
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <JavaIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            java
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <CIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            c
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <CplusplusIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            C++
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <CSharpIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            c#
          </p>
        </div>
        <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
          <div className='opacity-100 transition-opacity group-hover:opacity-0'>
            <PythonIcon />
          </div>
          <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
            python
          </p>
        </div>
      </section>
    </section>
  );
};

export default SkillsSection;
