const quoteText = document.querySelector(".quote")
authorName = document.querySelector(".author .name")
quoteBtn = document.querySelector("button")
soundbtn = document.querySelector(".sound")
copybtn = document.querySelector(".copy")
twitterbtn = document.querySelector(".twitter")
function randomQuote(){
    quoteBtn.innerText = "Loading..."
    quoteBtn.classList.add("Loading")
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        
    quoteBtn.innerText = "New Quote"
    quoteBtn.classList.remove("Loading")
    })
}

soundbtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}` );
    speechSynthesis.speak(utterance);
})

copybtn.addEventListener("click", ()=>{
   navigator.clipboard.writeText(quoteText.innerText)
})

twitterbtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank")
 })
quoteBtn.addEventListener("click", randomQuote)