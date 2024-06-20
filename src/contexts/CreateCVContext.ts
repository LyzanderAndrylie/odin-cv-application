import {
  PersonalInformation,
  Education,
  TechnicalSkill,
  Project,
  Experience,
  Leadership,
} from '@/types';
import { createContext, useContext } from 'react';

export type CreateCVContextType = {
  selectedSectionId: number;
  setSelectedSectionId: React.Dispatch<React.SetStateAction<number>>;
  personalInformation: PersonalInformation;
  setPersonalInformation: React.Dispatch<
    React.SetStateAction<PersonalInformation>
  >;
  educations: Education[];
  setEducations: React.Dispatch<React.SetStateAction<Education[]>>;
  technicalSkills: TechnicalSkill[];
  setTechnicalSkills: React.Dispatch<React.SetStateAction<TechnicalSkill[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  experiences: Experience[];
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
  leaderships: Leadership[];
  setLeaderships: React.Dispatch<React.SetStateAction<Leadership[]>>;
  resetInformationState: () => void;
};

export const CreateCVContext = createContext<CreateCVContextType | null>(null);

export const useCreateCV = () => {
  const context = useContext(CreateCVContext);

  if (!context) {
    throw new Error(
      'useCreateCV has to be used within <CreateCVContext.Provider>',
    );
  }

  return context;
};
