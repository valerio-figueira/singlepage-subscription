function pullElement(element){
    return document.querySelector(element);
}
function pullElements(element){
    return document.querySelectorAll(element);
}
function setElement(type, description){
    let element = document.createElement(type);
    element.innerHTML = description;
    return element;
}
function createSpanInsideElement(type, description, className){
    let element = document.createElement(type);
    let span = setElement("span", description);
    span.className = className;
    element.appendChild(span);
    return element;
}
function createList(type, description){
    let list = setElement("li", description);
    type.appendChild(list);
    return type;
}

let mainBox = pullElement(".main-description");
mainBox.appendChild(setElement("h1", "Join our community"));
mainBox.appendChild(setElement("h2", "30-day, hassle-free money back guarantee"));
mainBox.appendChild(setElement("p", "Gain access to our full library of tutorials along with expert code reviews."));
mainBox.appendChild(setElement("p", "Perfect for any developers who are serious about honing their skills."));


let secondBox = pullElement(".purchase-info");

secondBox.appendChild(setElement("h2", "Monthly Subscription"));

let p = createSpanInsideElement("p", "$29", "price");
p.innerHTML += "per Month";
p.className = "center-text";
secondBox.appendChild(p);


secondBox.appendChild(setElement("p", "Full access for less than $1 a day"));

let btn = setElement("button", "Sign Up");
btn.className = "purchase-btn";
secondBox.appendChild(btn);


let list = pullElement(".list");
list.appendChild(setElement("h2", "Why Us"));

let unorderedList = list.appendChild(setElement("ul", ""));

createList(unorderedList, "Tutorials by industry experts");
createList(unorderedList, "Peer & expert code review");
createList(unorderedList, "Coding exercises");
createList(unorderedList, "Access to our GitHub repos");
createList(unorderedList, "Community forum");
createList(unorderedList, "Flashcard decks");
createList(unorderedList, "New videos every week");
