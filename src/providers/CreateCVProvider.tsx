import { ReactNode, useState } from 'react';
import { CreateCVContext } from '@/contexts';
import {
  PersonalInformation,
  Education,
  TechnicalSkill,
  Project,
  Experience,
  Leadership,
} from '@/types';

type CreateCVProviderProps = {
  children: ReactNode;
};

const initialPersonalInfo = {
  fullname: '',
  address: '',
  city: '',
  stateZipCode: null,
  email: '',
  phone: '',
  gitURL: '',
};

const initialEducations = [
  {
    schoolName: '',
    schoolLocation: '',
    date: '',
    description: '',
  },
];

const initialTechnicalSkills = [
  {
    name: '',
    tools: '',
  },
];

const initialProjects = [
  {
    name: '',
    description: '',
  },
];

const initialExperiences = [
  {
    companyName: '',
    positionTitle: '',
    location: '',
    date: '',
    description: '',
  },
];

const initialLeaderships = [
  {
    name: '',
    role: '',
    location: '',
    date: '',
    description: '',
  },
];

export default function CreateCVProvider({
  children,
}: Readonly<CreateCVProviderProps>) {
  const [selectedSectionId, setSelectedSectionId] = useState(0);
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformation>(initialPersonalInfo);
  const [educations, setEducations] = useState<Education[]>(initialEducations);
  const [technicalSkills, setTechnicalSkills] = useState<TechnicalSkill[]>(
    initialTechnicalSkills,
  );
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [experiences, setExperiences] =
    useState<Experience[]>(initialExperiences);
  const [leaderships, setLeaderships] =
    useState<Leadership[]>(initialLeaderships);

  function resetInformationState() {
    setPersonalInformation(initialPersonalInfo);
    setEducations(initialEducations);
    setTechnicalSkills(initialTechnicalSkills);
    setProjects(initialProjects);
    setExperiences(initialExperiences);
    setLeaderships(initialLeaderships);
  }

  const context = {
    selectedSectionId,
    setSelectedSectionId,
    personalInformation,
    setPersonalInformation,
    educations,
    setEducations,
    technicalSkills,
    setTechnicalSkills,
    projects,
    setProjects,
    experiences,
    setExperiences,
    leaderships,
    setLeaderships,
    resetInformationState,
  };

  return (
    <CreateCVContext.Provider value={context}>
      {children}
    </CreateCVContext.Provider>
  );
}
