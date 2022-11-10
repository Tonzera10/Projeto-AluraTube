import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import banner from "../assets/banner.jpg";
import { StyledFavorite } from "../src/components/Favorite";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      
      <div>
        <Menu valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}/>
        <Header/>
        <TimeLine
          searchValue={valorDoFiltro}
          playlist={config.playlists}
          favorite={config.favorite}
        />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({theme}) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    background-image: url(${banner.src});
    width: 100%;
    height: 200px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <div className="banner"></div>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine({ searchValue, ...props }) {
  const playlistName = Object.keys(props.playlist);
  const favorites = Object.keys(props.favorite);
  return (
    <>
      <StyledTimeline>
        {playlistName.map((playlistName) => {
          const videos = props.playlist[playlistName];
          return (
            <section key={playlistName}>
              <h2>{playlistName}</h2>
              <div>
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase();
                    const searchValueNormalized = searchValue.toLowerCase();
                    return titleNormalized.includes(searchValueNormalized);
                  }).map((video) => {
                    return (
                      <a key={video.url} href={video.url}>
                        <img src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    );
                  })}
              </div>
            </section>
          );
        })}
      </StyledTimeline>
      <StyledFavorite>
        {favorites.map((favorite) => {
          const streamers = props.favorite[favorites];

          return (
            <section>
              <h2>{favorite}</h2>
              <div>
                {streamers.map((streamer) => {
                  return (
                    <a href={streamer.url}>
                      <img src={streamer.img} />
                      <span>{streamer.name}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </StyledFavorite>
    </>
  );
}
