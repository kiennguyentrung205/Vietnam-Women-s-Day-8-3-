document.getElementById('shareButton').addEventListener('click', function() {
    const message = "Join us in celebrating International Women's Day on March 8! #IWD2023 #GenderEquality";
    const url = "https://www.internationalwomensday.com/";
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(url)}`;
    
    window.open(shareUrl, '_blank');
});