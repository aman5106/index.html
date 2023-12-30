document.addEventListener('DOMContentLoaded', function () {
  var loveVideo = document.getElementById('loveVideo');

  if (loveVideo) {
    loveVideo.addEventListener('ended', function () {
      redirectToThirdPage();
    });
  }
});

function showNextPage() {
  window.location.href = 'page2.html';
}

function redirectToThirdPage() {
  window.location.href = 'page3.html';
}

// Add any additional JavaScript logic if needed for the third page
