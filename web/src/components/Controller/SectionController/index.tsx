import { CircleNotch } from "phosphor-react";
import { useEffect, useState } from "react"
import { api } from "../../../services/api";
import { Section } from "../../Base/Section";
import { LoadContainer } from "../../Base/Section/styles";

interface SectionControllerProps {
  username?: string;
  profile: Profile;
  
  handleSectionUpdate: () => void;
  updateSection: boolean;
}

interface Section {
  id: string;
  title: string;
}

interface Profile {
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  greeting?: string;
  description?: string;
  profile_picture?: string;
  profile_cover?: string;
  error?: string;
  id?: string;
}

export function SectionController({ username, profile, handleSectionUpdate, updateSection }: SectionControllerProps) {
  const [isDataReady, setIsDataReady] = useState(false);
  const [status, setStatus] = useState(102);
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const fetch = async () => {
      await api.get(`/section/all?username=${username}`)
        .then(res => {
          setSections(res.data);
        });
    };

    fetch();
    setStatus(200);
    setIsDataReady(true);
  }, [updateSection]);

  return (
    <>
      {
        isDataReady ?
          sections?.map((section: Section) => (
            <Section key={section.id} id={section.id} title={section.title} profile_id={profile.id} handleSectionUpdate={handleSectionUpdate} />
          ))

          :

          <LoadContainer>
            <CircleNotch className="load" size={32} />
          </LoadContainer>
      }
    </>
  )
}