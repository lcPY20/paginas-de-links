   function compartilhar() {
            if (navigator.share) {
                navigator.share({
                    title: 'Meus Links',
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copiado!");
            }
        }
