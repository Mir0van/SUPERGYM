const videoParent = document.querySelector('[data-video-parent]');

const createVideo = () => {
  const video = document.createElement('iframe');

  video.setAttribute('src', videoParent.dataset.srcVideo);
  video.setAttribute('allowfullscreen', '');
  video.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;');

  return video;
};

const initVideo = () => {
  if (videoParent) {
    const playButton = videoParent.querySelector('[data-play-button]');

    playButton.addEventListener('click', () => {
      const newVideo = createVideo();
      videoParent.append(newVideo);
    });
  }
};

export {initVideo};
