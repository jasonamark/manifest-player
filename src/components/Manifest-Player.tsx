import {
  ControlBar,
  MediaContainer,
  PlayerAudioButton,
  PlayerBitrateButton,
  PlayerFullscreenButton,
  PlayerGetSoundButton,
  PlayerNewWindowButton,
  PlayerOverlayButton,
  PlayerPlayButton,
  PlayerVideo,
  PlayerVolumeRange,
} from '@livelyvideo/video-client-web';

import React from 'react';

const ManifestPlayer = () => {
  return (
    <MediaContainer>
      <PlayerGetSoundButton />
      <PlayerVideo />
      <ControlBar variant='player'>
        <PlayerPlayButton />
        <PlayerAudioButton />
        <PlayerVolumeRange />
        <PlayerBitrateButton />
        <PlayerFullscreenButton />
        <PlayerNewWindowButton />
      </ControlBar>
      <PlayerOverlayButton />
    </MediaContainer>
  );
};

export default ManifestPlayer;
