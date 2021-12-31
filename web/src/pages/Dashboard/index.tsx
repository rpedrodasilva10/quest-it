import React, { useCallback, useEffect, useState } from 'react';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  Container,
  Header,
  HeaderContainer,
  ProfileContainer,
  QuestCard,
  QuestsContainer,
  SearchInputContainer,
  SearchQuestsTitle,
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
            <Link to="#">Quests</Link>
          </nav>
        </HeaderContainer>
      </Header>

      {/* Quests */}

      <SearchQuestsTitle>
        <h1>Your quests</h1>
      </SearchQuestsTitle>

      <SearchInputContainer>
        <FiSearch size={20} />
        <input
          src=""
          placeholder="Search your quests and press enter to search"
          onKeyDown={handleSearchKeyPress}
        ></input>
      </SearchInputContainer>

      <Container>
        <QuestsContainer>
          {quests.map((quest) => {
            return (
              <QuestCard>
                <p>{quest.title}</p>
                <p>Do the dishes</p>
                <div>
                  <p>status</p>
                </div>
              </QuestCard>
            );
          })}
        </QuestsContainer>
      </Container>
    </>
  );
};

export default Dashboard;
