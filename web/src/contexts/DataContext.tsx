import { Article, At, Bank, BehanceLogo, Book, BookOpen, Books, Buildings, Camera, CircleWavyCheck, Clock, Cloud, CookingPot, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, MusicNoteSimple, MusicNotesSimple, PaintBrush, Phone, WhatsappLogo } from "phosphor-react";
import { createContext, ReactNode } from "react";

interface DataContext {
  renderIcons: (icon: string | undefined) => ReactNode;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({} as DataContext);

export function DataProvider({ children }: DataProviderProps) {
  const renderIcons = (icon: string | undefined) => (
    icon === 'Article' && <Article size={24} weight='light' /> ||
    icon === 'At' && <At size={24} weight='light' /> ||
    icon === 'Bank' && <Bank size={24} weight='light' /> ||
    icon === 'BehanceLogo' && <BehanceLogo size={32} /> ||
    icon === 'Brush' && <PaintBrush size={24} weight='light' /> ||
    icon === 'Book' && <Book size={24} weight='light' /> ||
    icon === 'BookOpen' && <BookOpen size={24} weight='light' /> ||
    icon === 'Books' && <Books size={24} weight='light' /> ||
    icon === 'Buildings' && <Buildings size={24} weight='light' /> ||
    icon === 'CircleWavyCheck' && <CircleWavyCheck size={24} weight='light' /> ||
    icon === 'Camera' && <Camera size={24} weight='light' /> ||
    icon === 'CookingPot' && <CookingPot size={24} weight='light' /> ||
    icon === 'Clock' && <Clock size={24} weight='light' /> ||
    icon === 'Cloud' && <Cloud size={24} weight='light' /> ||
    icon === 'Email' && <Envelope size={24} weight='light' /> ||
    icon === 'GitHubLogo' && <GithubLogo size={24} weight='light' /> ||
    icon === 'LinkedInLogo' && <LinkedinLogo size={24} weight='light' /> ||
    icon === 'MusicNoteSimple' && <MusicNoteSimple size={24} weight='light' /> ||
    icon === 'MusicNotesSimple' && <MusicNotesSimple size={24} weight='light' /> ||
    icon === 'InstagramLogo' && <InstagramLogo size={24} weight='light' /> ||
    icon === 'WhatsappLogo' && <WhatsappLogo size={24} weight='light' /> ||
    icon === 'Phone' && <Phone size={24} weight='light' />
  );

  return (
    <DataContext.Provider value={{ renderIcons }}>
      {children}
    </DataContext.Provider>
  )
}