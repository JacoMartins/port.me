import { CircleNotch, User } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { P600 } from "../../../global";
import { api } from "../../../services/api";
import { LoadContainer } from "../Section/styles";
import { Main, ProfilePicture } from "./styles";

interface SearchListProps {
  username?: string;
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

export function SearchList({ username }: SearchListProps) {
  const [searchResults, setSearchResults] = useState<Profile[]>([]);
  const [isDataReady, setIsDataReady] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      setIsDataReady(false);
      await api.get(`/profile/search?usernameContains=${username}`)
        .then(res => {
          setSearchResults(res.data);
        });
      setIsDataReady(true);
    }

    fetch();
  }, [username])

  return (
    <Main>
      {isDataReady ?
        searchResults.map(item => (
          <div className="ListItem" key={item.id} onClick={() => navigate(`/profile/${item.username}`)}>
            <ProfilePicture src={item.profile_picture}>
              <User size={28} weight='light' />
            </ProfilePicture>

            <div className="TextContainer">
              <h4>{item.username}</h4>
              <P600>{item.first_name} {item.last_name}</P600>
            </div>
          </div>
        ))
        :
        <LoadContainer>
          <CircleNotch size={24} className="load" />
        </LoadContainer>
      }
    </Main>
  )
}