export function createModal() {
    const dialog = document.createElement('dialog');
    dialog.className = 'modal';

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            close();
        }
    });

    dialog.addEventListener('close', () => {
        document.body.classList.remove('is-scroll-locked');
    });

    const content = document.createElement('div');
    content.className = 'modal__content';

    dialog.append(content);
    document.body.append(dialog);

    function open(...elements) {
        content.replaceChildren(...elements);
        dialog.showModal();

        document.body.classList.add('is-scroll-locked');
    }

    function close() {
        dialog.close();
    }

    return { open, close };
}