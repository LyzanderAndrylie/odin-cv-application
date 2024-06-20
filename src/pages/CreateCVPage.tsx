import { Helmet } from 'react-helmet-async';

import {
  NavBar,
  PreviewSlider,
  PreviewDialog,
  Section,
} from '@/components/createCV';
import { CreateCVProvider, PreviewCVProvider } from '@/providers';
import MediaQuery from 'react-responsive';

export default function CreateCVPage() {
  return (
    <>
      <Helmet>
        <title>Tech CV Generator | Create</title>
      </Helmet>
      <CreateCVProvider>
        <PreviewCVProvider>
          <div className="grid min-h-screen grid-cols-[1fr_auto] grid-rows-[auto_1fr] p-4 text-black dark:bg-black dark:text-white md:p-8">
            <NavBar className="col-start-1" />
            <Section className="col-start-1" />
            <MediaQuery minWidth={1440}>
              <PreviewSlider className="col-start-2 row-start-1 row-end-3" />
            </MediaQuery>
          </div>
          <MediaQuery maxWidth={1439}>
            <PreviewDialog />
          </MediaQuery>
        </PreviewCVProvider>
      </CreateCVProvider>
    </>
  );
}
