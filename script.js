const people = document.getElementsByClassName('person');

const rightCarrots = document.getElementsByClassName('right-carrot');
const leftCarrots = document.getElementsByClassName('left-carrot');

//toggles "selected" class
function togglePerson(personDiv) {
    personDiv.classList.toggle('selected');
}

//removes 'selected' class from all people elements
function removeAllSelectedStatus() {
    [...people].forEach(person => {
        if ([...person.classList].includes('selected')) {
            togglePerson(person);
        }
    });
}

//moves selected divs right
function moveDivsRight(parentNode) {
    const selectedPeople = parentNode.getElementsByClassName('selected');
    
    //if no one selected, no one to move
    if (!selectedPeople.length) {
        return;
    }

    const targetNode = parentNode.nextElementSibling;
    shiftSelectedPeople(selectedPeople, targetNode)
}

//moves selected divs left
function moveDivsLeft(parentNode) {
    const selectedPeople = parentNode.getElementsByClassName('selected');
    
    //if no one selected, no one to move
    if (!selectedPeople.length) {
        return;
    }

    const targetNode = parentNode.previousElementSibling;
    shiftSelectedPeople(selectedPeople, targetNode)
}

//performs shift
function shiftSelectedPeople(selectedPeople, targetNode) {
    const targetNodePersonContainer = targetNode.getElementsByClassName('person-container');
    [...selectedPeople].forEach(person => {
        person.remove();
        targetNodePersonContainer[0].appendChild(person);
    })
    removeAllSelectedStatus()
}

//event listeners for people to toggle selection
[...people].forEach(person => {
    person.addEventListener('click', (ev) => {
        togglePerson(person);
    })
});

//event listeners for move right
[...rightCarrots].forEach(moveRightBtn => {
    moveRightBtn.addEventListener('click', (ev) => {
        const parentNode = moveRightBtn.parentNode;
        if ([...ev.target.classList].includes('clickable')) {
            moveDivsRight(parentNode);
        }
    })
});

//event listeners for move left
[...leftCarrots].forEach(moveLeftBtn => {
    moveLeftBtn.addEventListener('click', (ev) => {
        const parentNode = moveLeftBtn.parentNode;
        if ([...ev.target.classList].includes('clickable')) {
            moveDivsLeft(parentNode);
        }
    })
})