const tagsEl = document.getElementById("tags")
const textarea = document.getElementById("textarea")

textarea.focus() /*this will make the cursor already in the text area ready for user to type in*/

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)
    if(e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""
        }, 10)
        /*when user types into the text area and lifts their hand off a key, the function createTags will run which takes an input of the event target value and puts the inputs into an array, separated by a comma, and then filter out the tags that are not empty strings to trim and map the new results onto a new array. The createTags function will also clear the text area. Lastly, the createTags function will  */

        randomSelect() 
        /*highlights and unhighlights tags 30 time and lands on a random one*/
    }
}) 


function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
    
    tagsEl.innerHTML = "" /*what does this do?*/

    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect () {
    const times = 30; /*the number of times it'll highlight each one before it stops*/
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add("highlight")
}
function unHighlightTag(tag) {
    tag.classList.remove("highlight")
}