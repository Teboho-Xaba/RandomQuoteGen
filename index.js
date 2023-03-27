const btnEl = document.getElementById("btn")
const quoteEl = "https://api.quotable.io/random"
const quote = document.getElementById("quote")
const writer = document.getElementById("author")

async function getQuote (){
    try {
        btnEl.innerHTML = "Loading..."
        btnEl.disabled = true
        quote.innerHTML = "Updating..."
        writer.innerHTML = "Updating..."
        const response = await fetch(quoteEl)
        const data = await response.json()
        const contentEl = data.content
        const authorEl = data.author
        quote.textContent = contentEl
        writer.textContent = "~ " + authorEl
        btnEl.innerHTML = "Get Quote. "
        btnEl.disabled = false
        
    } catch (error) {
        quote.innerText = "An error has occured."
        writer.innerText = "Check if you're connected to the internet."
        btnEl.innerHTML = "Get Quote. "
        btnEl.disabled = false
    }
}
getQuote()

btnEl.addEventListener("click", getQuote)