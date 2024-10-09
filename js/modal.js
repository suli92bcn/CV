export function abrirModal(pdfLinkSelector, modalSelector, pdfViewerSelector, closeSelector) {
    const modal = document.querySelector(modalSelector);
    const pdfViewer = document.querySelector(pdfViewerSelector);
    const closeModalBtn = document.querySelector(closeSelector);
    const pdfLinks = document.querySelectorAll(pdfLinkSelector);
    const isMobile = /Mobi/i.test(navigator.userAgent);
    pdfLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pdfSrc = link.getAttribute('data-pdf');
            if (isMobile) {
                window.open(pdfSrc, '_blank');
            } else {
                pdfViewer.src = pdfSrc;
                modal.style.display = 'flex';
                setTimeout(() => modal.classList.add('show'), 10);
                document.body.classList.add('no-scroll');
            }
        });
    });
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            pdfViewer.src = '';
        }, 300);
        document.body.classList.remove('no-scroll');
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                pdfViewer.src = '';
            }, 300);
            document.body.classList.remove('no-scroll');
        }
    });
}