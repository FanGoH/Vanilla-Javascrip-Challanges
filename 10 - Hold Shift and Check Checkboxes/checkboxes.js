// TODO: Bug on multiple selection

document.addEventListener("DOMContentLoaded", () => {
    const lista = Array.from(document.querySelectorAll(".listElement"))

    let multiSelect = false;
    let lastSelection = 0;

    const handleChange = (evt, element) => {
        console.groupCollapsed("Vuelta");
        console.log("start");
        let key = element.dataset.key;
        let start = key;
        let finish = key;
        console.log(`Last selection - ${lastSelection}`);
        
        if(multiSelect) {
            if(lastSelection > key ) {
                finish = lastSelection;
            }
            else if(lastSelection < key) {
                start = lastSelection;
            }
            for(let i = start-1; i < finish; i++) {
                lista[i].classList.toggle("done");
            }
            console.log(`${start} - ${finish}`)
            
        }    
        else {
            element.classList.toggle("done");
        }

        lastSelection = element.dataset.key;
        console.log(`Last selection - ${lastSelection}`);

        console.log("End");
        console.groupEnd("Vuelta");
    } 


    lista.map(input => {
        input.addEventListener("change", (e) => { handleChange(e, input)});
    });

    document.addEventListener("keydown", (e) => {
        if(e.keyCode === 16) {
            multiSelect = true;
        }
    })


    document.addEventListener("keyup", (e) => {
        if(e.keyCode === 16) {
            multiSelect = false;
        }
    })

})