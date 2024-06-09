document.querySelector('.spotify-btn').addEventListener('click', function() {
    // Get the container where playlists will be inserted
    var container = document.getElementById('spotifyPlayersContainer');
    
    // Loop through each playlist URL and create iframe
    playlists.forEach(function(url) {
      var iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.setAttribute('style', 'border-radius: 12px');
      iframe.width = '100%';
      iframe.height = '500';
      iframe.frameborder = '0';
      iframe.allowfullscreen = '';
      iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
      iframe.loading = 'lazy';
      
      // Append the iframe to the container
      container.appendChild(iframe);
    });
  });
  