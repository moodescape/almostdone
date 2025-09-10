// Load content from JSON and update meta tags
document.addEventListener('DOMContentLoaded', function() {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            if (window.location.pathname.includes('article')) {
                // Get article slug from URL
                const slug = window.location.pathname.split('/').pop().replace('.html', '');
                const article = data.articles.find(a => a.slug === slug);
                
                if (article) {
                    // Update meta tags for article page
                    document.title = `${article.title} | Moodscape`;
                    document.querySelector('meta[name="description"]').content = article.description;
                    document.querySelector('meta[property="og:title"]').content = `${article.title} | Moodscape`;
                    document.querySelector('meta[property="og:description"]').content = article.description;
                    document.querySelector('meta[property="og:image"]').content = article.image;
                    document.querySelector('meta[property="og:url"]').content = window.location.href;
                }
            } else {
                // Update meta tags for homepage
                document.title = "Moodscape | Discover Your Next Vibe";
                document.querySelector('meta[name="description"]').content = "Explore articles and content that resonate with the stories you love.";
                document.querySelector('meta[property="og:title"]').content = "Moodscape | Discover Your Next Vibe";
                document.querySelector('meta[property="og:description"]').content = "Explore articles and content that resonate with the stories you love.";
                document.querySelector('meta[property="og:url"]').content = window.location.href;
            }
        })
        .catch(error => console.error('Error loading content:', error));
});
