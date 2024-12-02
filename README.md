# Netflix Clone

This project is a Netflix clone built using React. It mimics the basic functionality and user interface of Netflix, allowing users to browse and watch movies and TV shows.

## Features

- Browse movies and TV shows
- Watch trailers
- Responsive design

## Technologies Used

- React
- Redux
- Firebase (for authentication and database)
- TMDB API (for movie and TV show data)
- CSS/SCSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fake-netflix.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fake-netflix
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your Firebase and TMDB API keys:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```
5. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000`
- Browse and search for movies and TV shows
- Click on a movie or TV show to watch its trailer

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

- Only the front part where it shows a list of movies is implemented. Other features like detailed movie pages, user profiles, and recommendations are not included.
