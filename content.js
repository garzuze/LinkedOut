function addRemoveButtons() {
    const connections = document.querySelectorAll('li.mn-connection-card');

    connections.forEach(card => {
        if (!card.querySelector('.remove-btn')) {
            const btn = document.createElement('button');
            btn.innerText = 'Remove';
            btn.className = 'remove-btn';
            btn.style.cssText = 'margin: 5px; padding: 4px 8px; background: red; color: white; border: none; cursor: pointer;';
            btn.onclick = async () => {
                const moreBtn = Array.from(card.querySelectorAll('button')).find(btn => Array.from(btn.classList).some(cls => cls.includes('mn-connection-card__dropdown-trigger')));

                if (moreBtn) {
                    moreBtn.click();
                    await new Promise(r => setTimeout(r, 300));

                    const removeButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase().includes('remove connection'));

                    if (removeButton) {
                        removeButton.click();
                        await new Promise(r => setTimeout(r, 300));

                        const confirmBtn = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.trim().toLowerCase().includes('remove'));

                        if (confirmBtn) confirmBtn.click();
                    }
                }
            };
            card.appendChild(btn);
        }
    });
}

setInterval(addRemoveButtons, 2000);
