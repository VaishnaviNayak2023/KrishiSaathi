document.addEventListener('DOMContentLoaded', () => {
    // =================================================================
    // 1. Authentication & Hero Section Elements
    // =================================================================

    // --- Header Login Buttons ---
    const farmerLoginBtn = document.getElementById('farmer-login-btn');
    const officerLoginBtn = document.getElementById('officer-login-btn');

    // --- Hero Section Action Buttons ---
    const askQuestionBtn = document.querySelector('.action-btn.ask-question');
    const scanDiseaseBtn = document.querySelector('.action-btn.scan-disease');

    // --- Role Selection Buttons ---
    const farmerBtn = document.querySelector('.continue-btn.farmer-btn');
    const officerBtn = document.querySelector('.continue-btn.officer-btn');


    // =================================================================
    // 2. Chat Interface Elements
    // =================================================================

    // --- Sidebar elements ---
    const newChatBtn = document.querySelector('.new-chat-btn');
    const chatHistoryItems = document.querySelectorAll('.chat-history li');
    const upgradeSection = document.querySelector('.upgrade-section');

    // --- Main content elements ---
    const editHeaderBtn = document.querySelector('.main-header .fa-pencil-alt');
    const moreHeaderBtn = document.querySelector('.main-header .fa-ellipsis-v');
    const thumbsUpBtn = document.querySelector('.feedback-icons .fa-thumbs-up');
    const thumbsDownBtn = document.querySelector('.feedback-icons .fa-thumbs-down');
    const suggestedActionBtns = document.querySelectorAll('.suggested-actions button');
    const regenerateBtn = document.querySelector('.regenerate-btn');
    
    // --- Chat Input elements ---
    const chatInput = document.querySelector('.chat-input');
    const micBtn = document.querySelector('.mic-btn'); // Added Microphone Button
    const sendBtn = document.querySelector('.send-btn');

    // --- Right panel elements ---
    const userProfileIcon = document.querySelector('.user-profile-icon');
    const linkBoxes = document.querySelectorAll('.link-box');

    // =================================================================
    // 3. Event Listeners - Authentication & Hero
    // =================================================================

    // Link the "Farmer Login" button
    if (farmerLoginBtn) {
        farmerLoginBtn.addEventListener('click', () => {
            console.log('Redirecting to Farmer Login/Sign Up...');
            window.location.href = 'farmer-auth.html';
        });
    }

    // Link the "Officer Login" button
    if (officerLoginBtn) {
        officerLoginBtn.addEventListener('click', () => {
            console.log('Redirecting to Officer Login...');
            window.location.href = 'officer-auth.html';
        });
    }

    // Link "Ask a Question" button
    if (askQuestionBtn) {
        askQuestionBtn.addEventListener('click', () => {
            console.log('Redirecting to AI Chat Interface...');
            window.location.href = 'farm-query.html';
        });
    }

    // "Scan Crop Disease" button
    if (scanDiseaseBtn) {
        scanDiseaseBtn.addEventListener('click', () => {
            console.log('Scan Crop Disease button clicked! Opening camera/file upload...');
            alert('Opening crop disease scanner!');
        });
    }

    // "Continue as Farmer" button
    if (farmerBtn) {
        farmerBtn.addEventListener('click', () => {
            console.log('Continuing as Farmer, redirecting to Farmer Login/Sign Up...');
            window.location.href = 'farmer-auth.html';
        });
    }

    // "Continue as Officer" button
    if (officerBtn) {
        officerBtn.addEventListener('click', () => {
            console.log('Continuing as Officer, redirecting to Officer Login/Dashboard!');
            window.location.href = 'officer-auth.html';
        });
    }

    // =================================================================
    // 4. Event Listeners - Chat Interface
    // =================================================================

    // --- Sidebar Event Listeners ---
    newChatBtn.addEventListener('click', () => {
        alert('Starting a new chat...');
    });

    chatHistoryItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Loading chat: "${item.textContent.trim()}"`);
        });
    });

    upgradeSection.addEventListener('click', () => {
        alert('Redirecting to upgrade page...');
    });

    // --- Main Content Event Listeners ---
    editHeaderBtn.addEventListener('click', () => {
        alert('Editing chat title...');
    });

    moreHeaderBtn.addEventListener('click', () => {
        alert('Showing more options for this chat...');
    });

    // Toggle logic for thumbs up/down
    thumbsUpBtn.addEventListener('click', () => {
        alert('Feedback: Liked the response! 👍');
        thumbsUpBtn.classList.toggle('fas'); 
        thumbsUpBtn.classList.toggle('far');
        // Ensure other button returns to 'far' (unselected)
        thumbsDownBtn.classList.remove('fas'); 
        thumbsDownBtn.classList.add('far');
    });

    thumbsDownBtn.addEventListener('click', () => {
        alert('Feedback: Disliked the response. 👎');
        thumbsDownBtn.classList.toggle('fas'); 
        thumbsDownBtn.classList.toggle('far');
        // Ensure other button returns to 'far' (unselected)
        thumbsUpBtn.classList.remove('fas'); 
        thumbsUpBtn.classList.add('far');
    });

    suggestedActionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Suggested action: "${btn.textContent.trim()}"`);
        });
    });

    regenerateBtn.addEventListener('click', () => {
        alert('Regenerating response...');
    });

    // --- Chat Input Event Listeners ---
    
    // NEW: Microphone Button Listener
    if (micBtn) {
        micBtn.addEventListener('click', () => {
            alert('Activating voice query... Please start speaking. 🎤');
        });
    }

    sendBtn.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            alert(`Sending message: "${message}"`);
            // chatInput.value = ''; // Uncomment this line to clear input after sending
        } else {
            alert('Please type a message!');
        }
    });

    // Allow pressing Enter to send message
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) { // Shift+Enter for new line
            event.preventDefault(); 
            sendBtn.click();
        }
    });

    // --- Right Panel Event Listeners ---
    userProfileIcon.addEventListener('click', () => {
        alert('Opening user profile settings...');
    });

    linkBoxes.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            // Better logic for extracting link text from a tag that might contain other elements like <span> or <i>
            const linkText = link.textContent.trim().replace(/\s+\S*$/, ''); // Remove the last word/icon text
            alert(`Opening link: "${linkText}"`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-to-dashboard-btn');
    
    // If using a button element instead of an <a> tag
    if (backBtn && backBtn.tagName === 'BUTTON') { 
        backBtn.addEventListener('click', () => {
            console.log('Returning to Dashboard...');
            // Replace 'dashboard.html' with your actual dashboard file name
            window.location.href = 'dashboard.html'; 
        });
    }
    // Since we used an <a> tag in the HTML, the browser handles the navigation directly.
});