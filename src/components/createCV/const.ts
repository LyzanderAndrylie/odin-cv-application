import { FaUserTie, FaGraduationCap } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { GoProjectTemplate } from 'react-icons/go';
import { PiBagSimpleFill } from 'react-icons/pi';
import { SiHyperskill } from 'react-icons/si';
import {
  PersonalInformationInput,
  EducationInput,
  TechnicalSkillIsnput,
  ProjectsInput,
  ExperienceInput,
  LeadershipInput,
} from './SectionInput';

export const sections = [
  {
    icon: FaUser,
    title: 'Personal Information',
    description: 'Employers need to know who you are and how to contact you.',
    input: PersonalInformationInput,
  },
  {
    icon: FaGraduationCap,
    title: 'Education',
    description:
      'Demonstrate your qualifications, skills, and readiness for the job. List information in most recent first!',
    input: EducationInput,
  },
  {
    icon: SiHyperskill,
    title: 'Technical Skills',
    description: 'List your technical skills and tools you are familiar with.',
    input: TechnicalSkillIsnput,
  },
  {
    icon: GoProjectTemplate,
    title: 'Projects',
    description: 'Showcase your projects and what you have accomplished.',
    input: ProjectsInput,
  },
  {
    icon: PiBagSimpleFill,
    title: 'Experience',
    description: 'Highlight your work experience and achievements.',
    input: ExperienceInput,
  },
  {
    icon: FaUserTie,
    title: 'Leadership',
    description: 'Demonstrate your leadership skills and experience.',
    input: LeadershipInput,
  },
];

export const personalInformationExample = {
  fullname: 'John Doe',
  address: '123 Main Street',
  city: 'Springfield',
  stateZipCode: 62704,
  email: 'johndoe@example.com',
  phone: '555-123-4567',
  gitURL: 'https://github.com/johndoe',
};

export const educationExample = [
  {
    schoolName: 'Harvard University',
    schoolLocation: 'Cambridge, MA',
    date: 'May 2025',
    description:
      'AB in Computer Science, GPA: 4.0/4.0\nRelevant Coursework: CS50, CS100, Data Structures and Algorithms, \nCommit 20 hours per week to the Harvard X Program.',
  },
  {
    schoolName: 'Cambridge High School',
    schoolLocation: 'Cambridge, MA',
    date: 'June 2021',
    description:
      'High School Diploma, GPA: 4.0/4.0\nHonors: National Merit Scholar, AP Scholar with Distinction\nExtracurriculars: President of Computer Club, Captain of Math Team.',
  },
];

export const technicalSkillsExample = [
  {
    name: 'Programming',
    tools: 'React, Node.js, Express.js',
  },
  {
    name: 'Design',
    tools: 'Figma, Framer, Adobe',
  },
];

export const projectsExample = [
  {
    name: 'CS 100 Final Project',
    description:
      'Created a retrieval-augmented generation chatbot using LangChain and FastAPI to analyze articles and generate responses. Achieved 90% accuracy in response generation.',
  },
  {
    name: 'CS 50 Final Project',
    description:
      'Developed a browser plugin that enables users to customize the background color of any webpage they visit. Built using a combination of HTML, CSS, and JavaScript.',
  },
];

export const experienceExample = [
  {
    companyName: 'Google',
    positionTitle: 'Software Engineering Intern',
    location: 'Mountain View, CA',
    date: 'August - June 2024',
    description:
      'Worked on the development and optimization of internal tools used by various teams. Implemented new features and fixed bugs using Java and Python. Collaborated with senior engineers to design and deploy scalable solutions. Conducted code reviews and participated in daily stand-ups, contributing to the overall success of the project. Gained hands-on experience with cloud services and agile methodologies.',
  },
  {
    companyName: 'Harvard University',
    positionTitle: 'Teaching Fellow, Introduction to Computer Science',
    location: 'Cambridge, MA',
    date: 'September 2022 - May 2023',
    description:
      'Taught a class of 21 students to program in C, PHP, and JavaScript, and introduced object-oriented programming concepts. Maintained weekly office hours and led problem-solving sessions to assist students with coursework. Graded problem sets and exams, providing detailed feedback to help students improve their understanding and performance.',
  },
];

export const leadershipExample = [
  {
    name: 'Tech Innovators Club',
    role: 'Event Coordinator',
    location: 'San Francisco, CA',
    date: 'June 2022',
    description:
      'Planned and executed monthly meetups for tech enthusiasts, featuring guest speakers from leading technology companies. Organized hackathons that attracted over 200 participants, fostering innovation and collaboration. Managed social media accounts, increasing online engagement by 35%.',
  },
  {
    name: 'Green Earth Volunteers',
    role: 'Project Manager',
    location: 'Portland, OR',
    date: 'December 2021',
    description:
      'Led a team of volunteers in environmental conservation projects, including tree planting and beach cleanups. Coordinated community outreach programs to raise awareness about sustainability, resulting in a 30% increase in volunteer participation. Managed project budgets and secured funding through grants and donations.',
  },
];
