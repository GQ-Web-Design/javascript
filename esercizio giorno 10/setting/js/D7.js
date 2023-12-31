  /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
       const changeTitle = function () {
        document.querySelector('div > h1').innerText = "Titolo creato con JS"
    }
    changeTitle()

    /* ESERCIZIO 2
     Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
  */
    const addClassToTitle = function () {
       document.querySelector("h1").className = "myHeading";
    }
    addClassToTitle()

    /* ESERCIZIO 3
     Scrivi una funzione che cambi il testo dei p figli di un div
    */
    const changePcontent = function () {
      let changeP = document.querySelectorAll("p")
        changeP.forEach(paragraph => paragraph.innerText = "P figli di DIV cambiato con JS")      
    }
    changePcontent()

    /* ESERCIZIO 4
     Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
    */
    const changeUrls = function () {
      let ahref = document.querySelectorAll("a:not(footer a)");
      for(let i=0; i<ahref.length; i++){
        ahref[i].innerText = "https://www.google.com";
        ahref[i].href = "https://www.google.com";
      }
    }
    changeUrls()

    /* ESERCIZIO 5
     Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
  */
    const addToTheSecond = function () {
      let addList = document.querySelector("#secondList");
      let addListLi = document.createElement("li");
      console.log(addList) // verifico selezione seconda lista
      console.log(addListLi); // verifico creazione elemento figlio
      addListLi.innerText = "4rd";
      addList.appendChild(addListLi);
      
    }
    addToTheSecond()
    /* ESERCIZIO 6
     Scrivi una funzione che aggiunga un paragrafo al primo div
  */
    const addParagraph = function () {
      let selectDiv = document.querySelector("#firstDiv"); //seleziono il div
      let addPtoDiv = document.createElement("p");
      console.log(selectDiv) // verifico selezione seconda lista
      console.log(addPtoDiv)
      addPtoDiv.innerText = "Lorem Ipsum"
      selectDiv.appendChild(addPtoDiv);

    }
    addParagraph()

    /* ESERCIZIO 7
     Scrivi una funzione che faccia scomparire la prima lista non ordinata
  */

    const hideFirstUl = function () {
      document.querySelector("#firstList").style.display = 'none';
    }
    hideFirstUl()
    /* ESERCIZIO 8 
     Scrivi una funzione che renda verde il background di ogni lista non ordinata
    */

    const paintItGreen = function () {
        let changeBgColor = document.querySelectorAll("ul")
        for(let i=0; i<changeBgColor.length; i++){
          changeBgColor[i].style.backgroundColor ="green";
        }
      }
    paintItGreen()

    /* ESERCIZIO 9
     Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
    */

    const makeItClickable = function () {
        const h1 = document.querySelector('div > h1')
        let txt = h1.innerText;
        txt = txt.slice(0, -1)
        h1.innerText = txt;
    }

    /* ESERCIZIO 10
     Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
    */

    const revealFooterLink = function () {
        const linkFooter = document.querySelector('footer a');
        const txt = linkFooter.getAttribute('href');
        alert(txt);
    }

    /* ESERCIZIO 11
     Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
     La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
  */
    const generateTable = function () {
      //Seleziono nodo radice
      let divTableArea = document.querySelector("#tableArea");

      //creo la tabella
      let table = document.createElement('table');
      table.style.border = '1px solid black';
      let tr = document.createElement('tr');
      let th1 = document.createElement('th');
      th1.innerText = "Immagine"
      let th2 = document.createElement('th');
      th2.innerText = "Nome Prodotto"
      let th3 = document.createElement('th');
      th3.innerText = "Quantità"
      let th4 = document.createElement('th');
      th4.innerText = "Prezzo"

      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);

      table.appendChild(tr);

      let prodotti = ['iphone 15', 'Galaxy 32', 'Motorola', 'Windows Phone', 'abc 123']

      for(let i=0; i<5; i++){
          let tr = document.createElement('tr');
          let td1 = document.createElement('td');
          td1.innerText = 'test'
          tr.appendChild(td1);
          let td2 = document.createElement('td');
          td2.innerText = prodotti[i]
          tr.appendChild(td2);
          let td3 = document.createElement('td');
          td3.innerText = Math.round(Math.random()*5)
          tr.appendChild(td3);
          let td4 = document.createElement('td');
          td4.innerText = Math.round(Math.random()*500) + ',00 €'
          tr.appendChild(td4);
          table.appendChild(tr);
      }
      divTableArea.appendChild(table);

    }
    generateTable()

    /* ESERCIZIO 12
     Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
  */

    const addRow = function (img, nome, qta, prezzo) {
      let tr = document.createElement('tr');
          let td1 = document.createElement('td');
          td1.innerHTML = `<img src="`+img+`" height=100px />`
          tr.appendChild(td1);
          let td2 = document.createElement('td');
          td2.innerText = nome
          tr.appendChild(td2);
          let td3 = document.createElement('td');
          td3.innerText = qta
          tr.appendChild(td3);
          let td4 = document.createElement('td');
          td4.innerText = prezzo
          tr.appendChild(td4);

          let table = document.querySelector('#tableArea table')
          table.appendChild(tr);
    };
    addRow('https://c8.alamy.com/compit/k94awp/nuovo-di-zecca-realistico-nero-telefono-cellulare-smartphone-in-apple-iphone-x-k94awp.jpg', 'NuovoProd', 3, '250,00 €');
    /* ESERCIZIO 14
    Crea una funzione che nasconda le immagini della tabella quando eseguita
  */

    const hideAllImages = function () {}

    /* EXTRA ESERCIZIO 15
    Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
  */

    const changeColorWithRandom = function () {}

    /* EXTRA ESERCIZIO 16
    Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
  */

    const deleteVowels = function () {}