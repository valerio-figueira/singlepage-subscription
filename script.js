function pullElement(element){
    return document.querySelector(element);
}
function pullElements(element){
    return document.querySelectorAll(element);
}
function createElement(type, description){
    let element = document.createElement(type);
    element.innerHTML = description;
    return element;
}
function createSpanInsideElement(type, description, className){
    let element = document.createElement(type);
    let span = createElement("span", description);
    span.className = className;
    element.appendChild(span);
    return element;
}
function createList(type, description){
    let list = createElement("li", description);
    type.appendChild(list);
    return type;
}

let mainBox = pullElement(".main-description");
mainBox.appendChild(createElement("h1", "Join our community"));
mainBox.appendChild(createElement("h2", "30-day, hassle-free money back guarantee"));
mainBox.appendChild(createElement("p", "Gain access to our full library of tutorials along with expert code reviews."));
mainBox.appendChild(createElement("p", "Perfect for any developers who are serious about honing their skills."));


let secondBox = pullElement(".purchase-info");

secondBox.appendChild(createElement("h2", "Monthly Subscription"));

let p = createSpanInsideElement("p", "$29", "price");
p.innerHTML += "per Month";
p.className = "center-text";
secondBox.appendChild(p);


secondBox.appendChild(createElement("p", "Full access for less than $1 a day"));

let btn = createElement("button", "Sign Up");
btn.className = "purchase-btn";
secondBox.appendChild(btn);


let list = pullElement(".list");
list.appendChild(createElement("h2", "Why Us"));

let unorderedList = list.appendChild(createElement("ul", ""));

createList(unorderedList, "Tutorials by industry experts");
createList(unorderedList, "Peer & expert code review");
createList(unorderedList, "Coding exercises");
createList(unorderedList, "Access to our GitHub repos");
createList(unorderedList, "Community forum");
createList(unorderedList, "Flashcard decks");
createList(unorderedList, "New videos every week");
