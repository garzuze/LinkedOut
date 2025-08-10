function addRemoveButtons() {
    const connections = document.querySelectorAll('div[data-view-name="connections-list"]');

    connections.forEach(card => {
        if (!card.querySelector('.remove-btn')) {
            const btn = document.createElement('button');
            btn.innerText = 'Remove';
            btn.className = 'remove-btn';
            btn.style.cssText = 'margin: 5px; padding: 4px 8px; background: red; color: white; border: none; cursor: pointer;';
            btn.onclick = async () => {
                const moreBtn = Array.from(card.querySelectorAll('button')).find(btn => btn.getAttribute('data-view-name') == "connections-remove-connection-dropdown");

                if (moreBtn) {
                    moreBtn.click();
                    await new Promise(r => setTimeout(r, 300));

                    const removeButton = Array.from(document.querySelectorAll('p')).find(p => p.textContent.trim().toLowerCase().includes('remove connection'));

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
