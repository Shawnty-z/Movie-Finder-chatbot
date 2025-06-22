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