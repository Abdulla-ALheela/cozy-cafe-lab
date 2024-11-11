console.log("working");

/*
Part 1

The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.
*/

const titleEl = document.querySelector("#main-title ")

titleEl.textContent = "Welcome to the Cozy Cafe"
titleEl.style.textAlign ="center"

/*
Part 2

Select the body element and change the background color to a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)
*/

const bodyEl = document.querySelector("body")

bodyEl.style.backgroundColor = "bisque"




/*
Part 3

Select the <p> element which is meant to hold the quote of the day. Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).
*/

const pEl = document.querySelector("#quote-of-the-day")

pEl.textContent = "Life happens, coffee helps."


/*
Part 4

Select all elements with the class highlight-title and change their font-style to italic. Remember, you might need to iterate through a collection of elements.
*/

const highlightClass = document.querySelectorAll(".highlight-title")

console.log(highlightClass)

highlightClass.forEach((element) => {

    element.style.fontStyle = "italic"

    
})


/*
Part 5


Let’s add a new item to the Past Menu Items list. Create a new <li> element, set the text to “Rose Cake”, and append it to the list.
*/

const newList = document.createElement("li")

newList.textContent = "Rose Cake"

const pastMenu = document.querySelector("#past-menu-items")

pastMenu.appendChild(newList)


/*
Part 6

Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).
*/



const cafeSpEl = document.querySelector("#cafe-specialties")

const secondNewList = document.createElement("li")

secondNewList.textContent = "maybe Karak Tea is on offer now?"

cafeSpEl.appendChild(secondNewList)


/*
Part 7

Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.
*/

const blogEl = document.querySelector("#blogs")

const newDivEl = document.createElement("div")

newDivEl.setAttribute("class" , "blog-post")

console.log(newDivEl)

const newH3El = document.createElement("h3")

newH3El.textContent = "Karak Tea Tasting Event"

const newPEl = document.createElement("p")

newPEl.textContent = "Karak Tea Tasting Event was full of people!"

blogEl.appendChild(newDivEl)

newDivEl.appendChild(newH3El)

newDivEl.appendChild(newPEl)

/*
Part 8 - 🚀 Level Up

It turns out the cafe never served the item “Fish Tacos”. Select the Past Menu Items list and remove “Fish Tacos” from it. Hint: You’ll have to cache both the “Fish Tacos” list item element as well as it’s parent, then use the removeChild() method on the parent to remove the cached <li> element.\
*/

const fishTacosEl = document.querySelector("#past-menu-items:nth-of-type(2)")

console.log(fishTacosEl);

pastMenu.removeChild(fishTacosEl) 