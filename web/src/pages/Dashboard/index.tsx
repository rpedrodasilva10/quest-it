import React, { useCallback, useEffect, useState } from 'react';
import { FiLogOut, FiSearch, FiTrash2 } from 'react-icons/fi';
import { RiStarFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  CardTextContainer,
  Header,
  HeaderContainer,
  ProfileContainer,
  QuestCard,
  QuestCardProfileContainer,
  QuestsContainer,
  SearchInputContainer,
  SearchQuestsTitle,
  StarsContainer,
} from './styles';

type Quest = {
  id: number;
  title: string;
  description: string;
  stars: number;
  startedAt: Date;
  finishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  parentId: number;
  childId: number;
};

const Dashboard: React.FC = () => {
  const { user, token } = useAuth();
  const [quests, setQuests] = useState<Quest[]>([]);

  const { signOut } = useAuth();
  const handleSignOut = useCallback(async () => signOut(), [signOut]);

  const handleSearchKeyPress = useCallback(async (e: React.KeyboardEvent) => {
    const isEnterPressed = e.code.toLocaleUpperCase() === 'ENTER' || e.code.toLocaleUpperCase() === 'NUMPADENTER';
    if (!isEnterPressed) return;
    alert('Serching in the database');
  }, []);

  useEffect(() => {
    api
      .get<Quest[]>(`/parents/${user.id}/quests`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setQuests(response.data));
  }, [user, token]);

  return (
    <>
      <Header>
        <HeaderContainer>
          <ProfileContainer>
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/16371418?s=96&v=4"></img>
            <div>
              <p>
                <strong>Welcome, Renan!</strong>
              </p>
              <a href="#/login" onClick={handleSignOut}>
                <FiLogOut /> <strong>Sair</strong>
              </a>
            </div>
          </ProfileContainer>

          <nav>
            <Link to="#">Quests</Link>
            <Link to="#">Other page</Link>
          </nav>
        </HeaderContainer>
      </Header>

      {/* Quests */}

      <SearchQuestsTitle>
        <h1>Your quests</h1>
      </SearchQuestsTitle>

      <SearchInputContainer>
        <FiSearch size={20} />
        <input placeholder="Search your quests and press enter" onKeyDown={handleSearchKeyPress}></input>
      </SearchInputContainer>

      <QuestsContainer>
        {/* {quests.map((quest) => {
          return (
            <QuestCard>
              <p>{quest.title}</p>
              <p>Do the dishes</p>
              <div>
                <p>status</p>
              </div>
            </QuestCard>
          );
        })} */}

        <QuestCard>
          <QuestCardProfileContainer>
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/16371418?s=96&v=4"></img>
            <div>
              <p>
                <strong>First Quest</strong>
              </p>
            </div>
          </QuestCardProfileContainer>

          <StarsContainer>
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'gray'} size={25} />
          </StarsContainer>

          <CardTextContainer>
            <p>Description:</p>
            <strong>Nothing to do</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Created:</p>
            <strong>21/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Finished:</p>
            <strong>28/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Accepted by: </p>
            <strong>rpsilva</strong>
            <Link to="#">
              <FiTrash2 size={25} />
            </Link>
          </CardTextContainer>
        </QuestCard>

        <QuestCard>
          <QuestCardProfileContainer>
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/16371418?s=96&v=4"></img>
            <div>
              <p>
                <strong>First Quest</strong>
              </p>
            </div>
          </QuestCardProfileContainer>

          <StarsContainer>
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'gray'} size={25} />
          </StarsContainer>

          <CardTextContainer>
            <p>Description:</p>
            <strong>Nothing to do</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Created:</p>
            <strong>21/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Finished:</p>
            <strong>28/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Accepted by: </p>
            <strong>rpsilva</strong>
            <Link to="#">
              <FiTrash2 size={25} />
            </Link>
          </CardTextContainer>
        </QuestCard>

        <QuestCard>
          <QuestCardProfileContainer>
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/16371418?s=96&v=4"></img>
            <div>
              <p>
                <strong>First Quest</strong>
              </p>
            </div>
          </QuestCardProfileContainer>

          <StarsContainer>
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'gray'} size={25} />
          </StarsContainer>

          <CardTextContainer>
            <p>Description:</p>
            <strong>Nothing to do</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Created:</p>
            <strong>21/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Finished:</p>
            <strong>28/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Accepted by: </p>
            <strong>rpsilva</strong>
            <Link to="#">
              <FiTrash2 size={25} />
            </Link>
          </CardTextContainer>
        </QuestCard>
        <QuestCard>
          <QuestCardProfileContainer>
            <img alt="Avatar" src="https://avatars.githubusercontent.com/u/16371418?s=96&v=4"></img>
            <div>
              <p>
                <strong>First Quest</strong>
              </p>
            </div>
          </QuestCardProfileContainer>

          <StarsContainer>
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'7800FF'} size={25} />
            <RiStarFill color={'gray'} size={25} />
          </StarsContainer>

          <CardTextContainer>
            <p>Description:</p>
            <strong>Nothing to do</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Created:</p>
            <strong>21/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Finished:</p>
            <strong>28/01/2022</strong>
          </CardTextContainer>

          <CardTextContainer>
            <p>Accepted by: </p>
            <strong>rpsilva</strong>
            <Link to="#">
              <FiTrash2 size={25} />
            </Link>
          </CardTextContainer>
        </QuestCard>
      </QuestsContainer>
    </>
  );
};

export default Dashboard;
