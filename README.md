# Movie Finder Chatbot 🎬

A single-page chatbot that recommends movies based on user-specified genres using The Movie Database (TMDB) API.

## Features

- **Clean Chat Interface**: Modern, responsive design using Tailwind CSS
- **Genre Recognition**: Supports various movie genres (Comedy, Sci-Fi, Thriller, Romance, etc.)
- **Real-time API Integration**: Fetches movie recommendations from TMDB API
- **Loading Indicators**: Shows "AI is thinking..." while fetching recommendations
- **Responsive Design**: Works on desktop and mobile devices
- **User-friendly**: Simple input field with Enter key support

## Setup Instructions

### 1. Get TMDB API Key

1. Visit [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Create a free account
3. Go to your account settings
4. Navigate to the "API" section
5. Request an API key for "Developer" use
6. Copy your API key

### 2. Configure the Application

1. Open `script.js` in your code editor
2. Find the line: `const TMDB_API_KEY = '...';`
3. Replace `'...'` with your actual API key
4. Save the file

### 3. Run the Application

1. Open `index.html` in your web browser
2. Start chatting by typing a genre (e.g., "Comedy", "Sci-Fi", "Thriller")

## Supported Genres

The chatbot recognizes the following genres:
- Comedy
- Drama
- Thriller
- Action
- Adventure
- Romance
- Horror
- Sci-Fi / Science Fiction
- Fantasy
- Animation
- Crime
- Documentary
- Family
- History
- Music
- Mystery
- War
- Western

## How It Works

1. **User Input**: User types a genre in the chat input
2. **Genre Processing**: The app maps the user input to TMDB genre IDs
3. **API Call**: Makes a request to TMDB API to discover movies in that genre
4. **Random Selection**: Picks a random popular movie from the results
5. **Response**: Displays the movie title, year, rating, and description

## Technical Details

- **Frontend**: Vanilla HTML, CSS (Tailwind), and JavaScript
- **API**: The Movie Database (TMDB) API
- **No Dependencies**: Pure vanilla JavaScript implementation
- **Responsive**: Mobile-friendly design

## File Structure

```
Movie Finder chatbot/
├── index.html          # Main HTML file with chat interface
├── script.js           # JavaScript functionality and API integration
└── README.md           # This file
```

## API Endpoints Used

- `GET /discover/movie` - Discover movies by genre
- Parameters: `with_genres`, `sort_by=popularity.desc`, `page`, `language=en-US`

## Troubleshooting

- **"API key not found"**: Make sure you've replaced the placeholder API key in `script.js`
- **"No movies found"**: Try a different genre or check your internet connection
- **CORS errors**: The TMDB API supports CORS, so this shouldn't be an issue

**Note**: This is a demo application.