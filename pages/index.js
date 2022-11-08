import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import banner from "../banner.jpg"

function HomePage() {
  const estilosDaHomePage = { 
    // backgroundColor: "red" 
    };

  // console.log(config.playlists);

  return (
    <>
        <CSSReset/>
        <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <TimeLine playlist={config.playlists} />
        </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
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

function TimeLine(props) {
  // console.log("dentro do component", props.playlist)
  const playlistName = Object.keys(props.playlist);

  return (
    <StyledTimeline>
      {playlistName.map((playlistName) => {
        const videos = props.playlist[playlistName];
        // console.log(playlistName);
        // console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
  );
}


