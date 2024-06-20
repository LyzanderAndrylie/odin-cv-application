import PlusJakartaFontRegular from '@/assets/fonts/PlusJakartaSans-Regular.ttf';
import PlusJakartaFontBold from '@/assets/fonts/PlusJakartaSans-Bold.ttf';
import { usePreviewCV, useCreateCV } from '@/contexts';
import {
  Document,
  Font,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogHeader,
} from '../ui/dialog';
import { Button } from '../ui/button';

type PreviewProps = {
  className?: string;
};

Font.register({
  family: 'PlusJakarta',
  fonts: [
    {
      src: PlusJakartaFontRegular,
    },
    {
      src: PlusJakartaFontBold,
      fontWeight: 'bold',
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const previewStyles = StyleSheet.create({
  page: {
    paddingHorizontal: '1.07cm',
    paddingVertical: '0.63cm',
    fontFamily: 'PlusJakarta',
    fontSize: '11pt',
  },
  subheading: { textAlign: 'center', fontWeight: 'bold', marginBottom: '6pt' },
  section: { marginBottom: '8pt' },
  subsection: { marginBottom: '6pt' },
  seperator: { borderBottom: '1pt solid black', marginVertical: '6pt' },
  locationDate: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    alignItems: 'flex-end',
  },
  center: { textAlign: 'center' },
  bold: { fontWeight: 'bold' },
  flexRow: { display: 'flex', flexDirection: 'row' },
});

export function PreviewSlider({ className }: Readonly<PreviewProps>) {
  const { previewIsOpen } = usePreviewCV();

  return (
    <motion.section
      animate={{
        width: previewIsOpen ? 600 : 0,
        opacity: previewIsOpen ? 1 : 0,
        visibility: previewIsOpen ? 'visible' : 'hidden',
      }}
      transition={{ duration: 0.5 }}
      initial={false}
      className={`${className} overflow-hidden ${clsx({
        'ml-4': previewIsOpen,
      })}`}
    >
      <Preview className="w-[600px]" />
    </motion.section>
  );
}

export function PreviewDialog() {
  const { previewIsOpen, setPreviewIsOpen } = usePreviewCV();

  return (
    <Dialog open={previewIsOpen} onOpenChange={setPreviewIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='dark:text-white'>Preview</DialogTitle>
        </DialogHeader>
        <div className="flex h-[500px] items-center justify-center">
          <Preview className="w-full" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Close Preview</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Preview({ className }: Readonly<PreviewProps>) {
  const {
    personalInformation,
    educations,
    technicalSkills,
    projects,
    experiences,
    leaderships,
  } = useCreateCV();
  const hasEducation = educations.some(
    (education) => education.schoolName !== '',
  );
  const hasSkills = technicalSkills.some((skill) => skill.name !== '');
  const hasProjects = projects.some((project) => project.name !== '');
  const hasExperience = experiences.some(
    (experience) => experience.companyName !== '',
  );
  const hasLeaderships = leaderships.some(
    (leadership) => leadership.name !== '',
  );
  const { previewIsOpen } = usePreviewCV();

  return (
    previewIsOpen && (
      <PDFViewer className={`h-full ${className}`}>
        <Document
          title="Tech CV"
          author={personalInformation.fullname}
          creator={personalInformation.fullname}
          subject="Tech CV created using Tech CV Generator"
          keywords="CV"
          creationDate={new Date()}
          pageLayout="singlePage"
        >
          <Page size="A4" style={previewStyles.page}>
            <View style={previewStyles.section}>
              <Text style={previewStyles.center}>
                {personalInformation.fullname}
              </Text>
              {personalInformation.fullname && (
                <Text style={previewStyles.seperator}></Text>
              )}
              <Text style={previewStyles.center}>
                {Object.keys(personalInformation).reduce(
                  (acc, key) => {
                    const value =
                      personalInformation[
                        key as keyof typeof personalInformation
                      ];

                    if (key === 'fullname' || value === '' || value === null)
                      return acc;
                    if (acc.length === 0) return [...acc, value];

                    const seperator = key === 'stateZipCode' ? ', ' : ' • ';

                    return [...acc, seperator, value];
                  },
                  [] as (string | number)[],
                )}
              </Text>
            </View>

            {hasEducation && (
              <View style={previewStyles.section}>
                <Text style={previewStyles.subheading}>Education</Text>
                {educations.map((education, index) => (
                  <View key={index} style={previewStyles.subsection}>
                    <Text style={previewStyles.bold}>
                      {education.schoolName}
                    </Text>
                    <Text>{education.description}</Text>
                    <View style={previewStyles.locationDate}>
                      <Text>{education.schoolLocation}</Text>
                      <Text>{education.date}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
            {hasSkills && (
              <View style={previewStyles.section}>
                <Text style={previewStyles.subheading}>
                  Technical Skills {hasProjects && '& Projects'}
                </Text>
                <View style={previewStyles.subsection}>
                  {technicalSkills.map((skill, index) => (
                    <View key={index} style={previewStyles.flexRow}>
                      <Text
                        style={previewStyles.bold}
                      >{`${skill.name}${skill.name && ': '}`}</Text>
                      <Text>{skill.tools}</Text>
                    </View>
                  ))}
                </View>
                {hasProjects &&
                  projects.map((project, index) => (
                    <View key={index} style={previewStyles.subsection}>
                      <Text style={previewStyles.bold}>{project.name}</Text>
                      <Text>{project.description}</Text>
                    </View>
                  ))}
              </View>
            )}
            {hasExperience && (
              <View style={previewStyles.section}>
                <Text style={previewStyles.subheading}>Experience</Text>
                {experiences.map((experience, index) => (
                  <View key={index} style={previewStyles.subsection}>
                    <Text style={previewStyles.bold}>
                      {experience.companyName}
                    </Text>
                    <Text style={previewStyles.bold}>
                      {experience.positionTitle}
                    </Text>
                    <Text>{experience.description}</Text>
                    <View style={previewStyles.locationDate}>
                      <Text>{experience.location}</Text>
                      <Text>{experience.date}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
            {hasLeaderships && (
              <View style={previewStyles.section}>
                <Text style={previewStyles.subheading}>Leadership</Text>
                {leaderships.map((leadership, index) => (
                  <View key={index} style={previewStyles.subsection}>
                    <Text style={previewStyles.bold}>{leadership.name}</Text>
                    <Text style={previewStyles.bold}>{leadership.role}</Text>
                    <Text>{leadership.description}</Text>
                    <View style={previewStyles.locationDate}>
                      <Text>{leadership.location}</Text>
                      <Text>{leadership.date}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </Page>
        </Document>
      </PDFViewer>
    )
  );
}
