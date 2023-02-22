window.addEventListener('load', function() {
    // Load the header HTML into the #header element
    var headerContainer = document.getElementById('header');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/header.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        headerContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });