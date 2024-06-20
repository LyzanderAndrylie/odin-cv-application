import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useCreateCV } from '@/contexts';
import { sections } from './const';

type SectionProps = {
  className?: string;
};

type SectionHeaderProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function Section({ className }: Readonly<SectionProps>) {
  const { selectedSectionId, setSelectedSectionId } = useCreateCV();
  const selectedSection = sections[selectedSectionId];

  return (
    <main className={`flex items-center justify-center p-2 ${className}`}>
      <div className="w-1/2 min-w-[345px] rounded-lg border border-slate-200 p-4 dark:border-slate-800 md:p-8">
        <div className="mb-2 flex justify-between">
          {selectedSectionId !== 0 ? (
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedSectionId(selectedSectionId - 1);
              }}
            >
              <IoIosArrowBack size={16} className="mr-1" />
            </Button>
          ) : (
            <div></div>
          )}
          {selectedSectionId !== sections.length - 1 && (
            <Button
              onClick={() => {
                setSelectedSectionId(selectedSectionId + 1);
              }}
            >
              <IoIosArrowForward size={16} className="ml-1" />
            </Button>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={selectedSectionId}
          transition={{ duration: 0.2 }}
        >
          <SectionHeader
            title={selectedSection.title}
            description={selectedSection.description}
          >
            <selectedSection.input />
          </SectionHeader>
        </motion.div>
      </div>
    </main>
  );
}

function SectionHeader({
  title,
  description,
  children,
}: Readonly<SectionHeaderProps>) {
  return (
    <section className="h-[375px] overflow-y-auto p-1">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-200">
        {description}
      </p>
      <div>{children}</div>
    </section>
  );
}
