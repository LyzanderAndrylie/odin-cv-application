import { useCreateCV } from '@/contexts';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiDeleteBinFill } from 'react-icons/ri';
import PopoverTips from '../common/PopoverTips';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Fragment } from 'react';

export function PersonalInformationInput() {
  const { personalInformation, setPersonalInformation } = useCreateCV();

  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-4">
        <Label htmlFor="fullname" className="mb-1 block">
          Fullname
        </Label>
        <Input
          id="fullname"
          value={personalInformation.fullname}
          onChange={(e) => {
            setPersonalInformation({
              ...personalInformation,
              fullname: e.target.value,
            });
          }}
        ></Input>
      </div>
      <div className="col-span-2">
        <Label htmlFor="address" className="mb-1 block">
          Address
        </Label>
        <Input
          id="address"
          value={personalInformation.address}
          onChange={(e) => {
            setPersonalInformation({
              ...personalInformation,
              address: e.target.value,
            });
          }}
        ></Input>
      </div>
      <div>
        <Label htmlFor="city" className="mb-1 block">
          City
        </Label>
        <Input
          id="city"
          value={personalInformation.city}
          onChange={(e) => {
            setPersonalInformation({
              ...personalInformation,
              city: e.target.value,
            });
          }}
        ></Input>
      </div>
      <div>
        <Label htmlFor="zipcode" className="mb-1 block">
          Zip Code
        </Label>
        <Input
          id="zipcode"
          value={personalInformation.stateZipCode ?? ''}
          onChange={(e) => {
            const zipcode = parseInt(e.target.value);

            if (e.target.value !== '' && isNaN(zipcode)) return;

            setPersonalInformation({
              ...personalInformation,
              stateZipCode: zipcode || null,
            });
          }}
          type="number"
        ></Input>
      </div>
      <div className="col-span-2">
        <Label htmlFor="email" className="mb-1 block">
          Email
        </Label>
        <Input
          id="email"
          value={personalInformation.email}
          onChange={(e) => {
            setPersonalInformation({
              ...personalInformation,
              email: e.target.value,
            });
          }}
          type="email"
        ></Input>
      </div>
      <div className="col-span-2">
        <Label htmlFor="phone" className="mb-1 block">
          Phone
        </Label>
        <Input
          id="phone"
          value={personalInformation.phone}
          onChange={(e) => {
            setPersonalInformation({
              ...personalInformation,
              phone: e.target.value,
            });
          }}
        ></Input>
      </div>
      <div className="col-span-4">
        <Label htmlFor="giturl" className="mb-1 flex gap-1">
          GitHub/GitLab Profile URL{' '}
          <PopoverTips tips="Including your GitHub/GitLab URL in your CV showcases your coding skills, projects, and contributions, providing tangible evidence of your technical abilities and experience." />
        </Label>
        <Input
          id="giturl"
          value={personalInformation.gitURL}
          onChange={(e) => {
            setPersonalInformation({
              ...personalInformation,
              gitURL: e.target.value,
            });
          }}
          type="url"
          placeholder="https://github.com/<name>"
        ></Input>
      </div>
    </div>
  );
}

export function EducationInput() {
  const { educations, setEducations } = useCreateCV();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedEducation = educations[selectedIndex];

  return (
    <>
      <div className="mb-4 grid grid-cols-3 gap-3">
        <div>
          <Label className="mb-1 block">School name</Label>
          <Input
            value={selectedEducation.schoolName}
            onChange={(e) => {
              const newEducations = educations.map((education) => {
                if (education === selectedEducation) {
                  return { ...education, schoolName: e.target.value };
                }
                return education;
              });
              setEducations(newEducations);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1 block">Location</Label>
          <Input
            value={selectedEducation.schoolLocation}
            onChange={(e) => {
              const newEducations = educations.map((education) => {
                if (education === selectedEducation) {
                  return { ...education, schoolLocation: e.target.value };
                }
                return education;
              });
              setEducations(newEducations);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1 flex gap-1">
            Date
            <PopoverTips tips="Graduation Date/Time Period" />
          </Label>
          <Input
            value={selectedEducation.date}
            onChange={(e) => {
              const newEducations = educations.map((education) => {
                if (education === selectedEducation) {
                  return { ...education, date: e.target.value };
                }
                return education;
              });
              setEducations(newEducations);
            }}
          ></Input>
        </div>
        <div className="col-span-3">
          <Label className="mb-1 flex gap-1">
            Description
            <PopoverTips tips="Provide highlights about your education, such as your degree, GPA, relevant coursework, and your activities or achievements there." />
          </Label>
          <Textarea
            rows={4}
            className="resize-none"
            value={selectedEducation.description}
            onChange={(e) => {
              const newEducations = educations.map((education) => {
                if (education === selectedEducation) {
                  return { ...education, description: e.target.value };
                }
                return education;
              });
              setEducations(newEducations);
            }}
          ></Textarea>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div>
          {selectedIndex !== 0 && (
            <Button
              variant="destructive"
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setEducations(
                  educations.filter(
                    (education) => education !== selectedEducation,
                  ),
                );
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <RiDeleteBinFill size={16} />
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          {selectedIndex !== 0 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <IoIosArrowBack size={16} />
            </Button>
          )}
          {selectedIndex !== educations.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <IoIosArrowForward size={16} />
            </Button>
          )}
          {selectedIndex === educations.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setEducations([
                  ...educations,
                  {
                    schoolName: '',
                    schoolLocation: '',
                    date: '',
                    description: '',
                  },
                ]);
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <FiPlus size={16} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export function TechnicalSkillIsnput() {
  const { technicalSkills, setTechnicalSkills } = useCreateCV();

  return (
    <>
      <div className="mb-4 grid grid-cols-[1fr_4fr_auto] gap-3">
        {technicalSkills.map((currentSkill, index) => (
          <Fragment key={`${currentSkill.name}-${index}`}>
            <div>
              <Label className="mb-1 block">Skill</Label>
              <Input
                value={currentSkill.name}
                onChange={(e) => {
                  const newSkills = technicalSkills.map((skill) => {
                    if (skill === currentSkill) {
                      return { ...skill, name: e.target.value };
                    }
                    return skill;
                  });
                  setTechnicalSkills(newSkills);
                }}
              ></Input>
            </div>
            <div>
              <Label className="mb-1 block">Tools</Label>
              <Input
                value={currentSkill.tools}
                onChange={(e) => {
                  const newSkills = technicalSkills.map((skill) => {
                    if (skill === currentSkill) {
                      return { ...skill, tools: e.target.value };
                    }
                    return skill;
                  });
                  setTechnicalSkills(newSkills);
                }}
              ></Input>
            </div>

            <Button
              variant="destructive"
              type="button"
              className="aspect-square self-end p-1"
              onClick={() => {
                setTechnicalSkills(
                  technicalSkills.filter((skill) => skill !== currentSkill),
                );
              }}
            >
              <RiDeleteBinFill size={16} />
            </Button>
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          className="aspect-square min-w-24"
          onClick={() => {
            setTechnicalSkills([
              ...technicalSkills,
              {
                name: '',
                tools: '',
              },
            ]);
          }}
        >
          Add
        </Button>
      </div>
    </>
  );
}

export function ProjectsInput() {
  const { projects, setProjects } = useCreateCV();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProjects = projects[selectedIndex];

  return (
    <>
      <div className="mb-4 flex flex-col gap-3">
        <div>
          <Label className="mb-1 block">Project name</Label>
          <Input
            value={selectedProjects.name}
            onChange={(e) => {
              const newEducations = projects.map((project) => {
                if (project === selectedProjects) {
                  return { ...project, name: e.target.value };
                }
                return project;
              });
              setProjects(newEducations);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1 flex gap-1">
            Description
            <PopoverTips tips="Provide highlights about your project, such as your role and activities, the technologies and tools you used, and any significant achievements or outcomes." />
          </Label>
          <Textarea
            rows={4}
            className="resize-none"
            value={selectedProjects.description}
            onChange={(e) => {
              const newEducations = projects.map((project) => {
                if (project === selectedProjects) {
                  return { ...project, description: e.target.value };
                }
                return project;
              });
              setProjects(newEducations);
            }}
          ></Textarea>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div>
          {selectedIndex !== 0 && (
            <Button
              variant="destructive"
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setProjects(
                  projects.filter((project) => project !== selectedProjects),
                );
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <RiDeleteBinFill size={16} />
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          {selectedIndex !== 0 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <IoIosArrowBack size={16} />
            </Button>
          )}
          {selectedIndex !== projects.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <IoIosArrowForward size={16} />
            </Button>
          )}
          {selectedIndex === projects.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setProjects([
                  ...projects,
                  {
                    name: '',
                    description: '',
                  },
                ]);
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <FiPlus size={16} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export function ExperienceInput() {
  const { experiences, setExperiences } = useCreateCV();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experiences[selectedIndex];

  return (
    <>
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div>
          <Label className="mb-1 block">Company</Label>
          <Input
            value={selectedExperience.companyName}
            onChange={(e) => {
              const newExperiences = experiences.map((experience) => {
                if (experience === selectedExperience) {
                  return { ...experience, companyName: e.target.value };
                }
                return experience;
              });
              setExperiences(newExperiences);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1 block">Position Title</Label>
          <Input
            value={selectedExperience.positionTitle}
            onChange={(e) => {
              const newExperiences = experiences.map((experience) => {
                if (experience === selectedExperience) {
                  return { ...experience, positionTitle: e.target.value };
                }
                return experience;
              });
              setExperiences(newExperiences);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1">Location</Label>
          <Input
            value={selectedExperience.location}
            onChange={(e) => {
              const newExperiences = experiences.map((experience) => {
                if (experience === selectedExperience) {
                  return { ...experience, location: e.target.value };
                }
                return experience;
              });
              setExperiences(newExperiences);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1 flex gap-1">
            Date
            <PopoverTips tips="Time Period" />
          </Label>
          <Input
            value={selectedExperience.date}
            onChange={(e) => {
              const newExperiences = experiences.map((experience) => {
                if (experience === selectedExperience) {
                  return { ...experience, date: e.target.value };
                }
                return experience;
              });
              setExperiences(newExperiences);
            }}
          ></Input>
        </div>
        <div className="col-span-2">
          <Label className="mb-1 flex gap-1">
            Description
            <PopoverTips tips="Provide highlights about your experience, including your roles and responsibilities, key projects or initiatives you worked on, technologies utilized, and any notable achievements or contributions to the organization." />
          </Label>
          <Textarea
            className="resize-none"
            value={selectedExperience.description}
            onChange={(e) => {
              const newExperiences = experiences.map((experience) => {
                if (experience === selectedExperience) {
                  return { ...experience, description: e.target.value };
                }
                return experience;
              });
              setExperiences(newExperiences);
            }}
          ></Textarea>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div>
          {selectedIndex !== 0 && (
            <Button
              variant="destructive"
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setExperiences(
                  experiences.filter(
                    (experience) => experience !== selectedExperience,
                  ),
                );
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <RiDeleteBinFill size={16} />
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          {selectedIndex !== 0 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <IoIosArrowBack size={16} />
            </Button>
          )}
          {selectedIndex !== experiences.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <IoIosArrowForward size={16} />
            </Button>
          )}
          {selectedIndex === experiences.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setExperiences([
                  ...experiences,
                  {
                    companyName: '',
                    positionTitle: '',
                    date: '',
                    description: '',
                    location: '',
                  },
                ]);
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <FiPlus size={16} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export function LeadershipInput() {
  const { leaderships, setLeaderships } = useCreateCV();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLeadership = leaderships[selectedIndex];

  return (
    <>
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div>
          <Label className="mb-1 block">Program</Label>
          <Input
            value={selectedLeadership.name}
            onChange={(e) => {
              const newLeaderships = leaderships.map((leadership) => {
                if (leadership === selectedLeadership) {
                  return { ...leadership, name: e.target.value };
                }
                return leadership;
              });
              setLeaderships(newLeaderships);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1 block">Role</Label>
          <Input
            value={selectedLeadership.role}
            onChange={(e) => {
              const newLeaderships = leaderships.map((leadership) => {
                if (leadership === selectedLeadership) {
                  return { ...leadership, role: e.target.value };
                }
                return leadership;
              });
              setLeaderships(newLeaderships);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1">Location</Label>
          <Input
            value={selectedLeadership.location}
            onChange={(e) => {
              const newLeaderships = leaderships.map((leadership) => {
                if (leadership === selectedLeadership) {
                  return { ...leadership, location: e.target.value };
                }
                return leadership;
              });
              setLeaderships(newLeaderships);
            }}
          ></Input>
        </div>
        <div>
          <Label className="mb-1 flex gap-1">
            Date
            <PopoverTips tips="Time Period" />
          </Label>
          <Input
            value={selectedLeadership.date}
            onChange={(e) => {
              const newLeaderships = leaderships.map((leadership) => {
                if (leadership === selectedLeadership) {
                  return { ...leadership, date: e.target.value };
                }
                return leadership;
              });
              setLeaderships(newLeaderships);
            }}
          ></Input>
        </div>
        <div className="col-span-2">
          <Label className="mb-1 flex gap-1">
            Description
            <PopoverTips tips="Provide highlights about your leadership activity, such as your roles and responsibilities, key projects or initiatives you worked on, and any notable achievements or contributions to the organization." />
          </Label>
          <Textarea
            className="resize-none"
            value={selectedLeadership.description}
            onChange={(e) => {
              const newExperiences = leaderships.map((leadership) => {
                if (leadership === selectedLeadership) {
                  return { ...leadership, description: e.target.value };
                }
                return leadership;
              });
              setLeaderships(newExperiences);
            }}
          ></Textarea>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <div>
          {selectedIndex !== 0 && (
            <Button
              variant="destructive"
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setLeaderships(
                  leaderships.filter(
                    (experience) => experience !== selectedLeadership,
                  ),
                );
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <RiDeleteBinFill size={16} />
            </Button>
          )}
        </div>
        <div className="flex gap-2">
          {selectedIndex !== 0 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex - 1);
              }}
            >
              <IoIosArrowBack size={16} />
            </Button>
          )}
          {selectedIndex !== leaderships.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <IoIosArrowForward size={16} />
            </Button>
          )}
          {selectedIndex === leaderships.length - 1 && (
            <Button
              type="button"
              className="aspect-square p-1"
              onClick={() => {
                setLeaderships([
                  ...leaderships,
                  {
                    name: '',
                    role: '',
                    date: '',
                    description: '',
                    location: '',
                  },
                ]);
                setSelectedIndex(selectedIndex + 1);
              }}
            >
              <FiPlus size={16} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
