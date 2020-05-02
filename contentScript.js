
setInterval(() => {
  if (document.getElementsByClassName('ytp-ad-skip-button')[0]) {
    document.getElementsByClassName('ytp-ad-skip-button')[0].click()
  }
  if (document.getElementsByName('video-ads')) {
    document.getElementsByName('video-ads').innerHtml = ''
  }
}, 500)