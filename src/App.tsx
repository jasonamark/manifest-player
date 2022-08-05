import './App.css';

import {
  LivelyPlayerUiContext,
  PlayerUiState,
  VideoClient,
  types,
} from '@livelyvideo/video-client-web';
import React, { useEffect, useState } from 'react';

import ManifestPlayer from './components/Manifest-Player';

const livelyEndpoint = 'https://lively-dev-usc1a.livelyvideo.tv';
const manifestUrl = 'https://lively-dev-usc1a-manifest2.livelyvideo.tv/live/llamas.json?accessToken=f67f44ab717b40c49f2282a25488d63a'

function App() {
  const [videoClient, setVideoClient] = useState<types.VideoClientAPI | null>(null);
  const [playerUi, setPlayerUi] = useState<PlayerUiState | null>(null);

  useEffect(() => {
    if (videoClient == null) {
      const opts: types.VideoClientOptions = {
        livelyEndpoints: [livelyEndpoint],
      };
      const newVideoClient = new VideoClient(opts);
      setVideoClient(newVideoClient);
    }
    return () => {
      if (videoClient != null) {
        videoClient.dispose();
        setVideoClient(null);
      }
    };
  }, [videoClient]);

  useEffect(() => {
    if (videoClient != null && playerUi == null && manifestUrl) {
      const options: Partial<types.PlayerOptions> = {};
      const player: types.PlayerAPI = videoClient.requestPlayer(manifestUrl, options);
      setPlayerUi(new PlayerUiState(player));
    }
    return () => {
      if (playerUi != null) {
        playerUi.dispose();
        setPlayerUi(null);
      }
    };
  }, [videoClient, playerUi]);

  if (!playerUi || !manifestUrl) {
    return <></>;
  }

  return (
    <LivelyPlayerUiContext.Provider value={playerUi}>
      <ManifestPlayer />
    </LivelyPlayerUiContext.Provider>
  );
}

export default App;
