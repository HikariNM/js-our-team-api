axios.get('https://boolean-teachers.github.io/mock/api/members/').then(answer => {

    const teamMembers = answer.data;

    const cardHtml = document.getElementById('cardContainer');
    const cardForm = document.getElementById('cardFormRow');
    let count = 0;

    renderCard()

    document.getElementById('addBtn').addEventListener('click', function () {
        event.preventDefault();
        count++;

        if (count % 2 != 0) {
            cardForm.innerHTML = `<div class="col-3">
                                        <form id="CardForm" action="">
                                            <div class="mb-3">
                                                <label for="formGroupExampleInput" class="form-label">Nome</label>
                                                <input type="text" class="form-control" id="inputName" placeholder="Nome Cognome">
                                            </div>
                                            <div class="mb-3">
                                                <label for="formGroupExampleInput" class="form-label">Ruolo</label>
                                                <input type="text" class="form-control" id="inputRole" placeholder="Ruolo">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Indirizzo Email</label>
                                                <input type="email" class="form-control" id="inputEmail" placeholder="Indirizzo Email" aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-3">
                                                <label for="formGroupExampleInput" class="form-label">URL Immagine</label>
                                                <input type="text" class="form-control" id="inputImg" placeholder="Inserisci un URL per l'immagine">
                                            </div>

                                        </form>
                                    </div>`

        }
        else {
            const inputName = document.getElementById('inputName').value;
            const inputRole = document.getElementById('inputRole').value;
            const inputEmail = document.getElementById('inputEmail').value;
            const inputImg = document.getElementById('inputImg').value;

            const check = teamMembers.find(function (member) {
                return member.name === inputName;
            });

            if (inputName === '' || inputRole === '' || inputEmail === '') {
                alert("Inserisci tutti i campi");
                count--;
                return;
            }

            if (!check) {
                teamMembers.push({
                    name: inputName,
                    role: inputRole,
                    email: inputEmail,
                    img: inputImg,
                });

                cardForm.innerHTML = ``;

            } else {
                alert('Card già inserita');
                count--;
            }

            renderCard();

        }

    });

    function renderCard() {
        let cardList = '';
        teamMembers.forEach(element => {
            const teamMember = element;

            const card = `<div class="col-lg-4">
                              <div id="card" class="bg-black d-flex">
                                  <img id="cardImg" src="${teamMember.img}" alt="${teamMember.name}">
                                  <div class="card-body p-3">
                                      <h4 id="name">${teamMember.name}</h4>
                                      <p id="role">${teamMember.role}</p>
                                      <a id="email" class="text-decoration-none" href="mailto:${teamMember.email}">${teamMember.email}</a>
                                  </div>
                                </div>
                            </div>`;

            cardList += card


        })
        cardHtml.innerHTML = cardList;
    };

});


/******************************************Funzione asincrona************************************** */


async function getTeamMembers() {
        const response = await axios.get('https://boolean-teachers.github.io/mock/api/members/');
        teamMembers = response.data; 
        renderCard();
  
}

let teamMembers = getTeamMembers();
const cardHtml = document.getElementById('cardContainer');
const cardForm = document.getElementById('cardFormRow');
let count = 0;

document.getElementById('addBtn').addEventListener('click', function (event) {
    event.preventDefault();
    count++;

    if (count % 2 != 0) {
        cardForm.innerHTML = `<div class="col-3">
                                        <form id="CardForm" action="">
                                            <div class="mb-3">
                                                <label for="formGroupExampleInput" class="form-label">Nome</label>
                                                <input type="text" class="form-control" id="inputName" placeholder="Nome Cognome">
                                            </div>
                                            <div class="mb-3">
                                                <label for="formGroupExampleInput" class="form-label">Ruolo</label>
                                                <input type="text" class="form-control" id="inputRole" placeholder="Ruolo">
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Indirizzo Email</label>
                                                <input type="email" class="form-control" id="inputEmail" placeholder="Indirizzo Email" aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-3">
                                                <label for="formGroupExampleInput" class="form-label">URL Immagine</label>
                                                <input type="text" class="form-control" id="inputImg" placeholder="Inserisci un URL per l'immagine">
                                            </div>
                                            
                                        </form>
                                    </div>`

    }
    else {
        const inputName = document.getElementById('inputName').value;
        const inputRole = document.getElementById('inputRole').value;
        const inputEmail = document.getElementById('inputEmail').value;
        const inputImg = document.getElementById('inputImg').value;

        if (inputName === '' || inputRole === '' || inputEmail === '') {
            alert("Inserisci tutti i campi");
            count--;
            return;
        }
        
        const check = teamMembers.find(function (member) {
            return member.name === inputName;
        });

        if (!check) {
            teamMembers.push({
                name: inputName,
                role: inputRole,
                email: inputEmail,
                img: inputImg,
            });

            cardForm.innerHTML = ``;

        } else {
            alert('Card già inserita');
            count--;
        }

        renderCard();

    }

});

function renderCard() {
    let cardList = '';
    teamMembers.forEach(element => {
        const teamMember = element;

        const card = `<div class="col-lg-4">
                              <div id="card" class="bg-black d-flex">
                                  <img id="cardImg" src="${teamMember.img}" alt="${teamMember.name}">
                                  <div class="card-body p-3">
                                      <h4 id="name">${teamMember.name}</h4>
                                      <p id="role">${teamMember.role}</p>
                                      <a id="email" class="text-decoration-none" href="mailto:${teamMember.email}">${teamMember.email}</a>
                                  </div>
                                </div>
                            </div>`;

        cardList += card


    })
    cardHtml.innerHTML = cardList;
};
