import { Article, CircleWavyCheck, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, Phone, WhatsappLogo } from "phosphor-react";
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
    icon === 'InstagramLogo' && <InstagramLogo size={24} weight='light' /> ||
    icon === 'WhatsappLogo' && <WhatsappLogo size={24} weight='light' /> ||
    icon === 'GitHubLogo' && <GithubLogo size={24} weight='light' /> ||
    icon === 'LinkedInLogo' && <LinkedinLogo size={24} weight='light' /> ||
    icon === 'Phone' && <Phone size={24} weight='light' /> ||
    icon === 'Email' && <Envelope size={24} weight='light' /> ||
    icon === 'CircleWavyCheck' && <CircleWavyCheck size={24} weight='light' /> ||
    icon === 'Article' && <Article size={24} weight='light' />
  );

  return (
    <DataContext.Provider value={{ renderIcons }}>
      {children}
    </DataContext.Provider>
  )
}