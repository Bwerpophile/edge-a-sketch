const body = document.querySelector('body');




let squareDiv = function (number) {
    const container = document.createElement('div');
    container.classList.add('container');
    
    // prévoir le cas pour 0 avec un if
    for (let i = 0; i < number; i++ ) {
    
        const div = document.createElement('div');
        div.classList.add('divsquare');
    
        container.appendChild(div);
        
    }
    body.appendChild(container);
};

squareDiv(10);