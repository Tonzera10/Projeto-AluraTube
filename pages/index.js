import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

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
    margin-top: 50px;
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
`;
function Header() {
  return (
    <StyledHeader>

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
        console.log(playlistName);
        console.log(videos);
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


// import config from "../config.json";
// import styled from "styled-components";
// import { CSSReset } from "../src/components/CSSReset";
// import Menu from "../src/components/Menu";
// import { StyledTimeline } from "../src/components/Timeline";

// function HomePage() {
//   const estilosDaHomePage = { 
//     // backgroundColor: "red" 
//   };

//   console.log(config.playlists);

//   return (
//     <>
//     <CSSReset />
//     <div style={estilosDaHomePage}>
//       <Menu />
//       <Header />
//       <TimeLine playlists={config.playlists} />
//     </div>
//     </>
//   );
// }

// export default HomePage;

// // function Menu() {
// //   return <div>Menu</div>;
// // }

// const StyledHeader = styled.div`
//   img {
//     width: 80px;
//     height: 80px;
//     border-radius: 50%;
//   }
//   .user-info {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     padding: 16px 32px;
//     gap: 16px;
//   }
// `;

// function Header() {
//   return (
//     <StyledHeader>
//       <img src="" alt="banner"></img>

//       <section className="user-info">
//         <img src={`https://github.com/${config.github}.png`}></img>
//         <div>
//           <h2>{config.name}</h2>
//           <p>{config.job}</p>
//         </div>
//       </section>
//     </StyledHeader>
//   );
// }

// function TimeLine(props) {
//   // console.log("Dentro do componente", props.playlists);
//   const playlistNames = Object.keys(props.playlists);
//   return (
//     <StyledTimeline>
//       {playlistNames.map((playlistNames) => {
//         const videos = props.playlists[playlistNames];
//         return (
//           <section>
//             <h2>{playlistNames}</h2>
//             <div>
//               {videos.map((video) => {
//                 return (
//                   <a href={video.url}>
//                     <img src={video.thumb} />
//                     <span>{video.title}</span>
//                   </a>
//                 );
//               })}
//             </div>
//           </section>
//         );
//       })}
//     </StyledTimeline>
//   );
// }