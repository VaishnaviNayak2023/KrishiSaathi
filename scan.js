document.addEventListener('DOMContentLoaded', () => {
    const scanButton = document.querySelector('.scan-button');

    scanButton.addEventListener('click', () => {
        // This button initiates the AI scan after the photo has been uploaded.
        alert('Initiating crop disease scan! Please wait for the analysis...');
        
        // In a real application, you would make an API call here.
        // Upon success, you would redirect to a results page:
        // window.location.href = 'scan-results.html';
    });

    // Note: The photo upload/initial success state would be handled 
    // by logic on the previous page or via an AJAX call.
});