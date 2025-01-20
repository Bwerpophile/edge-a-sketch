const body = document.querySelector('body');

const btnContainer = document.createElement('div');
btnContainer.style.display = 'flex'
btnContainer.style.gap = '2%';
btnContainer.style.justifyContent = 'center';
btnContainer.style.margin = '2%';

const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Enter grid size';


const btn = document.createElement('button');
btn.innerText = "Let's Go !"



btnContainer.appendChild(input);
btnContainer.appendChild(btn);
body.appendChild(btnContainer);


let squareDiv = function (gridNumber) {
    const container = document.createElement('div');
    container.classList.add('container');

    const existingContainer = document.querySelector('.container');
    if (existingContainer) {
        body.removeChild(existingContainer);
    }


    let squareNumber = gridNumber * gridNumber;
    
    // prévoir le cas pour 0 avec un if
    if (gridNumber <= 0) {
        console.log("Le nombre doit être supérieur à 0 !");
        return;
    }
    if (gridNumber > 64 ){
        alert("Invalid input ! Can't be above 64")
        return;
    }
    
    for (let i = 0; i < squareNumber; i++ ) {
    
        const divSquare = document.createElement('div');
        divSquare.classList.add('divsquare');
        divSquare.innerText = "heho";
    
        container.appendChild(divSquare);
        let widthSquare =  100 / gridNumber;
        console.log(widthSquare);
        divSquare.style.width = `${widthSquare}%`;
        divSquare.style.backgroundColor = 'blue';
        divSquare.style.height = `${widthSquare}%`;

       divSquare.addEventListener("mouseenter", () => {
            divSquare.style.backgroundColor = 'red';
        })

        divSquare.addEventListener("mouseleave", () => {
            divSquare.style.backgroundColor = 'red';
        })
    }
    

    body.appendChild(container);
}

btn.addEventListener('click',() => {
    const gridNumber = parseInt(input.value,10);
        if (!isNaN(gridNumber)) {
            squareDiv(gridNumber);
        }
        
        else {
            alert("Invalid input !")
        }
})