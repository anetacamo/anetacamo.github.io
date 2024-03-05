import React, { useState } from 'react';

const Pleo = () => {
  const [video, setVideo] = useState(0);

  const videos = [
    'https://www.youtube.com/embed/xLU-VE6UgOg?si=D88L4fHWm6VWtDry&autoplay=1&controls=0&mute=1&rel=0',
    'https://www.youtube.com/embed/-T3LcxYNUMM?si=IQrYNjUnQKaoTE_p&autoplay=1&controls=0&mute=1&rel=0',
  ];

  return (
    <div>
      <div style={{ height: '100vh', width: '100%', display: 'flex' }}>
        <h1
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            width: '100%',
            fontSize: 80,
          }}
        >
          To verdener <br />
          same mål
        </h1>
      </div>

      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          backgroundColor: 'black',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 'calc(100% - 48px)',
            height: '100%',
            marginTop: 24,
            position: 'relative',
            maxWidth: 800,
            maxHeight: 450,
          }}
        >
          <iframe
            src={videos[0]}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: video === 1 ? 0 : 1,
              transitionDuration: '350ms',
            }}
          ></iframe>
          <iframe
            src={videos[1]}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: video === 0 ? 0 : 1,
              transitionDuration: '350ms',
            }}
          ></iframe>
        </div>

        <div style={{ margin: 24 }}>
          <button
            style={{
              backgroundColor: video === 0 ? 'black' : 'white',
              color: video === 0 ? 'white' : 'black',
              border: 'white 3px solid',
              fontSize: 20,
              textTransform: 'uppercase',
              padding: '12px 32px',
              margin: 0,
              marginRight: 12,
              cursor: video === 0 ? 'pointer' : 'default',
            }}
            onClick={() => setVideo(1)}
          >
            om mark
          </button>
          <button
            style={{
              backgroundColor: video === 1 ? 'black' : 'white',
              color: video === 1 ? 'white' : 'black',
              margin: 0,
              marginLeft: 12,
              textTransform: 'uppercase',
              border: 'white 3px solid',
              fontSize: 20,
              padding: '12px 32px',
              cursor: video === 1 ? 'pointer' : 'default',
            }}
            onClick={() => setVideo(0)}
          >
            om claude
          </button>
        </div>
      </div>

      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h2
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            maxWidth: 400,
            fontSize: 40,
          }}
        >
          about the project
        </h2>
        <p
          style={{
            maxWidth: 800,
            lineHeight: 1.4,
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 24,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* <div
          style={{
            position: 'absolute',
            height: '0',
            backgroundColor: '#ededed',
            top: 0,
            bottom: 0,
            width: 0,
            borderTop: '100vh solid black',
            borderRight: '120px solid #ffffff00',
            left: 'calc(50% - 60px)',
          }}
        ></div> */}
        <div
          style={{
            padding: 80,
            paddingRight: 120,
            width: '50%',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 28,
              }}
            >
              om Claude
            </h3>
            <h4
              style={{
                fontSize: 18,
                marginTop: -4,
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 48,
              }}
            >
              France
            </h4>

            <h4
              style={{
                fontSize: 20,
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </h4>
          </div>
          <div style={{ border: '1px solid white', height: 400 }}></div>
        </div>
        <div
          style={{
            padding: 80,
            paddingLeft: 120,
            boxSizing: 'content-box',
            width: '50%',
            backgroundColor: '#ededed',
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ border: '1px solid black', height: 400 }}></div>
          <div>
            <h3
              style={{
                fontSize: 28,
              }}
            >
              om Mark
            </h3>
            <h4
              style={{
                fontSize: 18,
                marginTop: -4,
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 32,
              }}
            >
              Denmark
            </h4>
            <h4
              style={{
                fontSize: 20,
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </h4>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '120px 0',
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      > */}
      {/* <video width='325' height='400' controls>
          <source src='/data/video.webm' type='video/webm' />{' '}
        </video> */}
      {/* <div
          style={{
            height: 450,
            width: 350,
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 700,
              zIndex: -1,
            }}
          >
            <iframe
              height='450'
              width='700'
              src='https://www.youtube.com/embed/xLU-VE6UgOg?si=D88L4fHWm6VWtDry&autoplay=1&controls=0&mute=1'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>

          <div
            style={{
              overflow: 'hidden',
            }}
          >
            <iframe
              src='https://www.youtube.com/embed/-T3LcxYNUMM?si=IQrYNjUnQKaoTE_p&autoplay=1&controls=0&mute=1'
              title='YouTube video player'
              frameborder='0'
              height='450'
              width='700'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div
          style={{
            height: 450,
            width: 350,
          }}
        ></div>
      </div>

      <div style={{ backgroundColor: 'black' }} className='flex-center'>
        <div
          style={{
            height: '100vh',
            width: '50%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <iframe
            src='https://www.youtube.com/embed/xLU-VE6UgOg?si=D88L4fHWm6VWtDry&autoplay=1&controls=0&mute=1'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '200%',
              height: '100%',
            }}
          ></iframe>
        </div>
        <div
          style={{
            height: '100vh',
            width: '50%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <iframe
            src='https://www.youtube.com/embed/-T3LcxYNUMM?si=IQrYNjUnQKaoTE_p&autoplay=1&controls=0&mute=1'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '200%',
              height: '100%',
            }}
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};
export default Pleo;
