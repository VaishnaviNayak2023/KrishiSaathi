document.addEventListener('DOMContentLoaded', () => {
    // Top right actions
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', () => {
        alert('Logging out...');
        // window.location.href = 'login.html';
    });

    // Query Actions
    const chatBtns = document.querySelectorAll('.chat-btn');
    chatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const farmerName = btn.closest('.query-item').querySelector('.farmer-info strong')?.textContent || 'Farmer';
            alert(`Opening chat with ${farmerName}...`);
        });
    });

    const callBtns = document.querySelectorAll('.call-btn');
    callBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const farmerName = btn.closest('.query-item').querySelector('.farmer-info strong')?.textContent || 'Farmer';
            alert(`Initiating call with ${farmerName}...`);
        });
    });

    const resolveBtns = document.querySelectorAll('.resolve-btn');
    resolveBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const farmerName = btn.closest('.query-item').querySelector('.farmer-info strong')?.textContent || 'Farmer';
            alert(`Resolving query from ${farmerName}...`);
            // In a real app, this would update the status and remove the item
        });
    });
    
    // Quick Actions
    const sendAlertBtn = document.querySelector('.action-send-alert');
    const broadcastBtn = document.querySelector('.action-broadcast');
    const generateReportBtn = document.querySelector('.action-generate-report');

    sendAlertBtn.addEventListener('click', () => {
        alert('Sending weather alert to all subscribers.');
    });

    broadcastBtn.addEventListener('click', () => {
        alert('Preparing advisory for broadcast.');
    });

    generateReportBtn.addEventListener('click', () => {
        alert('Generating detailed performance report.');
    });
});