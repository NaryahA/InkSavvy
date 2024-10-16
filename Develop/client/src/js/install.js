const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event *Done
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block'
});


// TODO: Implement a click event handler on the `butInstall` element *Done
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none';

    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
    }
});

// TODO: Add an handler for the `appinstalled` event *Done
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully!');
});
