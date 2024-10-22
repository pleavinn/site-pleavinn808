// Aguarda o carregamento da página
window.onload = function() {
    const logoContainer = document.getElementById('logo-container');
    const content = document.getElementById('content');
  
    // Após 3 segundos (tempo da animação), esconde o logo e mostra o conteúdo
    setTimeout(function() {
      logoContainer.style.display = 'none';
      content.style.display = 'block';
    }, 3000);
  };
  