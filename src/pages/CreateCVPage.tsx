import { ModeToggle } from '@/theme/ModeToggle';
import { Helmet } from 'react-helmet-async';

export default function CreateCVPage() {
  return (
    <>
      <Helmet>
        <title>Tech CV Generator | Create</title>
      </Helmet>
      <main className="relative flex min-h-screen items-center justify-center p-4 dark:bg-black md:p-8">
        <ModeToggle className="absolute left-4 top-4 md:left-8 md:top-8" />
      </main>
    </>
  );
}
