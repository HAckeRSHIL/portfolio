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
import GraphQLIcon from '@/public/icons/graphql.svg';
import LinuxIcon from '@/public/icons/linux.svg';
import GitIcon from '@/public/icons/git.svg';
import JiraIcon from '@/public/icons/jira.svg';
import ReduxIcon from '@/public/icons/redux.svg';
import BootstrapIcon from '@/public/icons/bootstrap.svg';
import KafkaIcon from '@/public/icons/kafka.svg';
import DjangoIcon from '@/public/icons/django.svg';
import PostgresIcon from '@/public/icons/postgres.svg';
import { handleSkillContainer } from '@/app/animations';

const SkillIcon = ({
  IconComponent,
  skillName,
}: {
  IconComponent: React.ElementType;
  skillName: string;
}) => (
  <div className='skill-container group relative bg-light-container dark:bg-dark-container'>
    <div className='opacity-100 transition-opacity group-hover:opacity-0'>
      <IconComponent />
    </div>
    <p className='absolute bottom-1 right-1 text-light-title opacity-0 transition-opacity group-hover:opacity-100 dark:text-dark-title'>
      {skillName}
    </p>
  </div>
);

const skills = [
  { IconComponent: ReactIcon, name: 'react' },
  { IconComponent: JavaScriptIcon, name: 'javascript' },
  { IconComponent: TypeScriptIcon, name: 'typescript' },
  { IconComponent: HtmlIcon, name: 'html' },
  { IconComponent: CssIcon, name: 'css' },
  { IconComponent: TailwindIcon, name: 'tailwind' },
  { IconComponent: NextIcon, name: 'next' },
  { IconComponent: AngularIcon, name: 'angular' },
  { IconComponent: ExpressIcon, name: 'express' },
  { IconComponent: NodeJSIcon, name: 'node.js' },
  { IconComponent: DjangoIcon, name: 'django' },
  { IconComponent: MySQLIcon, name: 'mysql' },
  { IconComponent: GraphQLIcon, name: 'graphQL' },
  { IconComponent: PostgresIcon, name: 'postgreSQL' },
  { IconComponent: NginxIcon, name: 'nginx' },
  { IconComponent: MongoIcon, name: 'mongo' },
  { IconComponent: AwsIcon, name: 'aws' },
  { IconComponent: DockerIcon, name: 'docker' },
  { IconComponent: KubernetsIcon, name: 'kubernetes' },
  { IconComponent: JenkinsIcon, name: 'jenkins' },
  { IconComponent: KafkaIcon, name: 'kafka' },
  { IconComponent: LinuxIcon, name: 'linux/unix' },
  { IconComponent: ElasticSearchIcon, name: 'elasticsearch' },
  { IconComponent: GitIcon, name: 'git' },
  { IconComponent: CIcon, name: 'c' },
  { IconComponent: CplusplusIcon, name: 'c++' },
  { IconComponent: CSharpIcon, name: 'c#' },
  { IconComponent: PythonIcon, name: 'python' },
  { IconComponent: JavaIcon, name: 'java' },
  { IconComponent: JiraIcon, name: 'jira' },
  { IconComponent: ReduxIcon, name: 'redux' },
  { IconComponent: BootstrapIcon, name: 'bootstrap' },
];

const SkillsSection = () => {
  useEffect(() => {
    handleSkillContainer();
  }, []);
  return (
    <section
      className='col-span-6 space-y-[40px] pt-[80px] lg:col-start-2 lg:col-end-6'
      id='skill'
    >
      <h1 className='title below-fold'>SKILLS</h1>
      <section className='flex flex-wrap gap-[20px]'>
        {skills.map((skill, index) => (
          <SkillIcon
            key={index}
            IconComponent={skill.IconComponent}
            skillName={skill.name}
          />
        ))}
      </section>
    </section>
  );
};

export default SkillsSection;
