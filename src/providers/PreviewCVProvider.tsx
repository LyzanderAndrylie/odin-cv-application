import { ReactNode, useState } from 'react';
import { PreviewCVContext } from '@/contexts';

type PreviewCVProviderProps = {
  children: ReactNode;
};

export default function PreviewCVProvider({
  children,
}: Readonly<PreviewCVProviderProps>) {
  const [previewIsOpen, setPreviewIsOpen] = useState(false);

  const context = {
    previewIsOpen,
    setPreviewIsOpen,
  };

  return (
    <PreviewCVContext.Provider value={context}>
      {children}
    </PreviewCVContext.Provider>
  );
}
