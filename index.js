// Nascondi il menu al caricamento della pagina
$(document).ready(function() {
    $("#menu").hide();
  });
  
  // Mostra o nascondi il menu quando l'utente clicca sul pulsante "Menu"
  $("#bottone-menu").click(function() {
    $("#menu").toggle();
  });