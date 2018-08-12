/**
 * Created by jesica on 7/23/2018.
 */
function quoteGenerator() {
    const quotes = ["That’s not the point. The point is, who will stop me?",
        "The smallest minority on earth is the individual. Those who deny individual rights cannot claim to be defenders of minorities.",
        "If you don't know, the thing to do is not to get scared, but to learn.",
        "Learn to value yourself, which means: fight for your happiness.",
        "Freedom (n.): To ask nothing. To expect nothing. To depend on nothing.",
        "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
        "I am not primarily an advocate of capitalism, but of egoism; and I am not primarily an advocate of egoism, but of reason."];

    var randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

function updateQuote() {
    document.getElementById("quote").innerHTML = quoteGenerator();
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("quote").innerHTML = quoteGenerator();
});

