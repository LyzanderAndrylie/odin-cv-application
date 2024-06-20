import { createContext, useContext } from 'react';

export type PreviewContextType = {
  previewIsOpen: boolean;
  setPreviewIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PreviewCVContext = createContext<PreviewContextType | null>(null);

export const usePreviewCV = () => {
  const context = useContext(PreviewCVContext);

  if (!context) {
    throw new Error(
      'usePreviewCV has to be used within <PreviewContext.Provider>',
    );
  }

  return context;
};
