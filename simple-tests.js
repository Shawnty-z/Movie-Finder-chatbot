// Simple browser-based tests for Movie Finder Chatbot

function runTests() {
    console.log('Running Movie Finder Chatbot Tests...');

    // Test genre processing
    try {
        console.assert(getGenreId('comedy') === 35, '❌ Comedy genre test failed');
        console.assert(getGenreId('COMEDY') === 35, '❌ Uppercase genre test failed');
        console.assert(getGenreId('I want a comedy movie') === 35, '❌ Partial match genre test failed');
        console.assert(getGenreId('invalid') === null, '❌ Invalid genre test failed');
        console.log('✅ Genre processing tests passed');
    } catch (e) {
        console.error(e);
    }

    // Test message generation
    try {
        const testMovie = {
            title: 'Test Movie',
            overview: 'Test overview',
            releaseDate: '2020-01-01',
            rating: 8.0
        };
        const response = generateMovieResponse(testMovie);
        console.assert(response.includes('Test Movie'), '❌ Movie title missing in response');
        console.assert(response.includes('2020'), '❌ Release year missing in response');
        console.assert(response.includes('⭐ 8'), '❌ Rating missing in response');
        console.assert(response.includes('Test overview'), '❌ Overview missing in response');
        console.log('✅ Message generation tests passed');
    } catch (e) {
        console.error(e);
    }

    // Test missing data
    try {
        const testMovie = {
            title: 'Test Movie',
            overview: null,
            releaseDate: null,
            rating: null
        };
        const response = generateMovieResponse(testMovie);
        console.assert(response.includes('Unknown'), '❌ Unknown year test failed');
        console.assert(response.includes("don\'t have a description"), '❌ Missing overview test failed');
        console.log('✅ Missing data tests passed');
    } catch (e) {
        console.error(e);
    }

    console.log('🎉 All basic tests completed!');
}

// Run tests when page loads (only if functions exist)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof getGenreId === 'function' && typeof generateMovieResponse === 'function') {
        runTests();
    } else {
        console.warn('Test functions not found. Make sure to include this script after script.js.');
    }
});
