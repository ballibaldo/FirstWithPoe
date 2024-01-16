    document.addEventListener('DOMContentLoaded', function() {
    var headerPlaceholder = document.getElementById('header-placeholder');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        headerPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });

  document.addEventListener('DOMContentLoaded', function() {
    var menuContainer = document.getElementById('menu-container');
  
    fetch('menu.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(menuHtml) {
        menuContainer.innerHTML = menuHtml;
      })
      .catch(function(error) {
        console.log('Error fetching the menu:', error);
      });
  });