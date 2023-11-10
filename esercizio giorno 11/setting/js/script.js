    //dichiaro funzione genera tabella
    const generateTable = function () {
        //Seleziono nodo radice #tableArea e assegno a mia variabile divTableArea
        let divTableArea = document.querySelector("#tableArea");

        //creo elemento tabella 
        let table = document.createElement('table');
        // creo ed assegno a variabile l'elemento tr (Table Row) per la tabella 
        let tr = document.createElement('tr');
        // creo ed assegno a variabile l'elemento th1 (Table Head) per la tabella 
        let th1 = document.createElement('th');
        // inserisco testo all'interno del campo th1
        th1.innerText = "Nome Task"
        // creo ed assegno a variabile l'elemento th2 (Table Head) per la tabella 
        let th2 = document.createElement('th');
        // inserisco testo all'interno del campo th2
        th2.innerText = "Completato"
        // creo ed assegno a variabile l'elemento th3 (Table Head) per la tabella 
        let th3 = document.createElement('th');
        // inserisco testo all'interno del campo th3
        th3.innerText = "Eliminazione"
        //appendo l'elemento child th1 all'elemento padre tr
        tr.appendChild(th1);
        //appendo l'elemento child th2 all'elemento padre tr
        tr.appendChild(th2);
        //appendo l'elemento child th3 all'elemento padre tr
        tr.appendChild(th3);

        //appendo l'elemento child tr all'elemento padre table
        table.appendChild(tr);
        // appendo elemento child table all'elemento padre divTableArea
        divTableArea.appendChild(table);
    }
    //richiamo funzione genera tabella
    generateTable()

    // Seleziono nodo BTN e assegno mia variabile BTN
    let btn = document.querySelector('#btn')
    // Aggiungo un addEventListener alla mia variabile BTN
    btn.addEventListener('click', function(e) {
        
        //Seleziono input form e assegno mia variabile task    
        let task = document.querySelector('form input[name="task"]')
        //Eseguo controllo sulla lunghezza
        if(task.value.trim().length >= 2) {
            //Richiamo Funzione Addrow
            addRow(task)
        } else {
            alert(task.value + ' Non corretto')
        }
        e.preventDefault()
    })

    //dichiaro funzione aggiungi riga
    const addRow = function (task) {
        for(let i=0; i<1; i++){
            // creo ed assegno a variabile l'elemento tr (Table Row) per la tabella
            var tr = document.createElement('tr');
            // creo ed assegno a variabile l'elemento td1 (Table Data) per la tabella 
            let td1 = document.createElement('td');
            // inserisco valore prelevato dal form e lo inietto all'interno del td1
            td1.innerHTML = task.value.trim()
            // creo ed assegno a variabile l'elemento td2 (Table Data) per la tabella
            let td2 = document.createElement('td');
            // inserisco testo all'interno del td2
            td2.innerHTML = '<input name="html" class="checkbox" type="checkbox"/>'
            
            //tento senza riuscirci di verificare lo stato della checkbox
            td2.addEventListener('click', function (e) {
                if(td2.checkbox === checked ){
                    e = tr.style.textDecoration = 'line-through'
                }

            })

            // creo ed assegno a variabile l'elemento td2 (Table Data) per la tabella
            let td3 = document.createElement('td');
            // inserisco testo all'interno del td2
            td3.innerHTML = '<button class="btn-delete" type="submit">Elimina Task</button>'
            // appendo elemento child td1 all'elemento padre tr
            tr.appendChild(td1);
            // appendo elemento child td2 all'elemento padre tr
            tr.appendChild(td2);
            // appendo elemento child td3 all'elemento padre tr
            tr.appendChild(td3);
            let table = document.querySelector('#tableArea table')
            // appendo elemento child tr all'elemento padre table
            table.appendChild(tr);
        }
    };