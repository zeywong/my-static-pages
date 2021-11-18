function goToInfo() {
    document.location="#";
}

function randomQuote() {
    var random = Math.floor(Math.random() * 11);
    var quote = "";
    switch (random) {
        case 0: quote = "Zero Dawn"; break;
        case 1: quote = "Don't give up on dream. Else, you no differences with salted fish."; break;
        case 2: quote = "Do it now. Sometimes later becomes never."; break;
        case 3: quote = "Progress of your dream is decided by you."; break;
        case 4: quote = "I'm the random quote."; break;
        case 5: quote = "Live your life. Not someone's opinion."; break;
        case 6: quote = "Try something new. Else, you're not moving forward."; break;
        case 7: quote = "There is no failure. Either success or experiences."; break;
        case 8: quote = "When you focus on you. you grow. When you focus on shit, shit grow."; break;
        case 9: quote = "Pieces by pieces. It'll complete one day."; break;
        case 10: quote = "Siakap Fish."; break;
    }
    alert(quote);
}

function alertComingSoon() {
    alert("Coming Soon. Stay tuned.");
}

