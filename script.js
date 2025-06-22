// The Movie Database API configuration
const TMDB_API_KEY = '2a63de246979a076679459f6e9c40696';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// DOM elements
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const loadingIndicator = document.getElementById('loading-indicator');

// Genre mapping for better API results
const genreMapping = {
    'comedy': 35,
    'drama': 18,
    'thriller': 53,
    'action': 28,
    'adventure': 12,
    'romance': 10749,
    'horror': 27,
    'sci-fi': 878,
    'scifi': 878,
    'science fiction': 878,
    'fantasy': 14,
    'animation': 16,
    'crime': 80,
    'documentary': 99,
    'family': 10751,
    'history': 36,
    'music': 10402,
    'mystery': 9648,
    'war': 10752,
    'western': 37
};

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Add a message to the chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex place-items-start space-x-3';
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="flex-1"></div>
            <div class="flex-1">
                <div class="bg-primary text-white rounded-lg p-3 max-w-xs lg:max-w-md ml-auto">
                    <p>${message}</p>
                </div>
            </div>
            <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <span class="text-sm">👤</span>
                </div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span class="text-sm">🤖</span>
                </div>
            </div>
            <div class="flex-1">
                <div class="bg-gray-100 rounded-lg p-3 max-w-xs lg:max-w-md">
                    <p class="text-gray-800">${message}</p>
                </div>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show/hide loading indicator
function showLoading(show = true) {
    if (show) {
        loadingIndicator.classList.remove('hidden');
    } else {
        loadingIndicator.classList.add('hidden');
    }
}

// Get genre ID from user input
function getGenreId(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Direct mapping
    if (genreMapping[input]) {
        return genreMapping[input];
    }
    
    // Check if input contains any genre keywords
    for (const [genre, id] of Object.entries(genreMapping)) {
        if (input.includes(genre)) {
            return id;
        }
    }
    
    return null;
}