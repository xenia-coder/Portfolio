  function afficheEnGrand(img) {
      const popup = document.getElementById("popup");
      const imgPopup = document.getElementById("img-popup");
      imgPopup.src = img.src;
      popup.style.display = "flex";
    }
    function fermerPopup() {
      document.getElementById("popup").style.display = "none";
    }