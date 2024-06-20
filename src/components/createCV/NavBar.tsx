import TooltipWrapper from '@/components/common/TooltipWrapper';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/theme/ModeToggle';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';
import MediaQuery from 'react-responsive';

import { useCreateCV, usePreviewCV } from '@/contexts';
import {
  sections,
  personalInformationExample,
  educationExample,
  technicalSkillsExample,
  projectsExample,
  leadershipExample,
  experienceExample,
} from './const';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu';

type NavBarProps = {
  className?: string;
};

type SectionSelectorProps = {
  className?: string;
};

type PreviewButtonProps = {
  className?: string;
};

export default function NavBar({ className }: Readonly<NavBarProps>) {
  return (
    <>
      <nav className={`flex justify-between gap-4 ${className}`}>
        <div className="flex gap-2 md:w-[180px]">
          <ModeToggle />
          <ExampleButton />
        </div>
        <MediaQuery minWidth={768}>
          <SectionSelector />
        </MediaQuery>
        <PreviewButton className="md:w-[180px]" />
      </nav>
      <MediaQuery maxWidth={767}>
        <SectionSelector className="fixed bottom-2 right-0 flex w-full justify-center md:static" />
      </MediaQuery>
    </>
  );
}

function SectionSelector({ className }: Readonly<SectionSelectorProps>) {
  const { selectedSectionId, setSelectedSectionId } = useCreateCV();

  return (
    <div className={className}>
      <ul className="flex gap-2 rounded-md border border-slate-200 bg-white p-2 transition-colors dark:border-slate-800 dark:bg-black">
        {sections.map((section, index) => (
          <li key={section.title} className="aspect-square">
            <motion.div
              layoutId={index === selectedSectionId ? 'test' : undefined}
            >
              <TooltipWrapper
                tips={section.title}
                side="bottom"
                sideOffset={16}
              >
                <Button
                  variant="ghost"
                  className={`flex h-full flex-col rounded-[4px] p-2 ${clsx({
                    'bg-white dark:bg-black': index !== selectedSectionId,
                    'bg-black hover:bg-current dark:bg-white dark:hover:bg-current':
                      index === selectedSectionId,
                  })}`}
                  onClick={() => setSelectedSectionId(index)}
                >
                  <section.icon
                    size={24}
                    className={` ${clsx({
                      'fill-black dark:fill-white': index !== selectedSectionId,
                      'fill-white dark:fill-black': index === selectedSectionId,
                    })}`}
                  />
                </Button>
              </TooltipWrapper>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PreviewButton({ className }: Readonly<PreviewButtonProps>) {
  const { previewIsOpen, setPreviewIsOpen } = usePreviewCV();
  return (
    <Button
      className={`flex items-center gap-1 font-medium ${className}`}
      onClick={() => setPreviewIsOpen(!previewIsOpen)}
    >
      <MediaQuery minWidth={1440}>
        <IoIosArrowBack
          size={16}
          className={`transition-transform duration-1000 ${clsx({
            'rotate-180': previewIsOpen,
          })}`}
        />
      </MediaQuery>
      {previewIsOpen ? 'Hide Preview' : 'Show Preview'}
    </Button>
  );
}

function ExampleButton() {
  const {
    setPersonalInformation,
    setEducations,
    setTechnicalSkills,
    setProjects,
    setLeaderships,
    setExperiences,
    resetInformationState,
  } = useCreateCV();

  function fillExampleInformation() {
    setPersonalInformation(personalInformationExample);
    setEducations(educationExample);
    setTechnicalSkills(technicalSkillsExample);
    setProjects(projectsExample);
    setExperiences(experienceExample);
    setLeaderships(leadershipExample);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Example</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={fillExampleInformation}>
          Show
        </DropdownMenuItem>
        <DropdownMenuItem onClick={resetInformationState}>
          Clear
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
