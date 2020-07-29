const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'collectionUserScreen':
            document.getElementById('app').innerHTML = components.collectionUserScreen
            let clickNav = document.getElementById('nav-create')
            clickNav.addEventListener('click', () => {
                view.setActiveScreen("createCardScreen")
            })
            model.loadCollectionUser()
            break
        case 'cardsUserScreen':
            document.getElementById('app').innerHTML = components.cardUserScreen

            break
        case 'createCardScreen':
            document.getElementById('app').innerHTML = components.createCards
            $("#collectionCard").change(function () {
                readURL(this, "imageCollectionCard");
            })
            let id = 0
            document.getElementById('button-add-card').addEventListener('click', () => {
                if (view.addFormAddCard(id)) {
                    id++
                }
                console.log(id)
            })
            document.getElementById("firebase-add").addEventListener('submit', (e) => {
                e.preventDefault()
                controller.check()
            })
            break
        case 'editCardsScreen':
            document.getElementById('app').innerHTML = components.editCardsScreen
            break
        case "mainScreen":
            document.getElementById("app").innerHTML = components.mainScreen;
            view.showCurrentUserName();

            break;
        case "aboutScreen":
            document.getElementById("app").innerHTML = components.aboutScreen
            break;
        case "loginScreen":
            document.getElementById("app").innerHTML = components.loginScreen;
            const loginForm = document.getElementById("form-login");
            const loginBtn = document.getElementById("redirect-to-register");
            const homeBtn = document.getElementById("redirect-to-home");
            loginBtn.addEventListener("click", function () {
                view.setActiveScreen("registerScreen");
            });
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const loginInfo = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                };
                controller.login(loginInfo);
            });

            break;
        case "registerScreen":
            document.getElementById("app").innerHTML = components.registerScreen;
            const registerForm = document.getElementById("register-form");
            const btn = document.getElementById("redirect-to-login");
            btn.addEventListener("click", function () {
                view.setActiveScreen("loginScreen");
            });
            registerForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const registerInfo = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                };
                controller.register(registerInfo);
            });
            break;
    }
}
view.setErrorMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message;
  };
  
view.addCollectionUser = (collection) => {
    const collectionWrapper = document.createElement('div')
    collectionWrapper.classList.add("collection-item")
    collectionWrapper.id = collection.id
    collectionWrapper.innerHTML = `    
    <p>${collection.collectionName}</p>
    <img src="${collection.imageCover}" alt="">`
    const listCollection = document.querySelector('.list-collections-card')
    listCollection.appendChild(collectionWrapper)
    collectionWrapper.addEventListener("click", () => {
        view.setActiveScreen("cardsUserScreen")
        model.loadCardsUser(collection.id)

    })
}
view.showCollections = () => {
    for (let oneCollection of model.collectionsUser) {
        view.addCollectionUser(oneCollection)

    }
}
view.addCardUser = (card) => {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('card')
    cardWrapper.innerHTML = `
    <div class="font-card">
        <div class="image-card">
            <img src="${card.imageVocab}" alt="">
        </div>
        <div class="main-vocab">
            <div class="vocab" style="font-size: 55px;">${card.vocab}</div>
            <div class="pronun" style="font-size: 30px;">${card.pronunciation}</div>
            <button id="btn${card.id}"><i class="fas fa-volume-up"></i></button>
            
        </div>
    </div>
    <div class="back-card">
        <div class="listNotes" id=${card.id}>
            <h3 class="meaning">Meaning: ${card.meaning}</h3>
            <h3 class="same-meaning">Same meaning: ${card.sameMeaning}</h3>
            <h3>Example: </h3>
        </div>
    </div>`

    const listCard = document.querySelector('.main-add-card')
    listCard.appendChild(cardWrapper)
    document.getElementById(`btn${card.id}`).addEventListener("click", () => {
        let file = `${card.sound}`
        play(file)
    })
}
view.showCards = () => {
    for (let oneCard of model.cardsUser) {
        view.addCardUser(oneCard)
        // view.showNotes(oneCard)
    }
}
view.addNote = (note, id) => {
    const noteWrapper = document.createElement('p')
    noteWrapper.classList.add('notes')
    noteWrapper.innerText = `${note}`
    const listNotes = document.getElementById(`${id}`)
    listNotes.appendChild(noteWrapper)
}
view.showNotes = (note) => {
    for (let oneNote of note.notes) {
        view.addNote(oneNote, note.id)
    }
}
view.showInforCollection = (infor, number) => {
    const inforCollection = document.querySelector('.infor-collection-card')
    if (model.currentUser.email == infor.owner) {
        inforCollection.innerHTML = `    
        <div class="image-collection-cover">
        <img src="${infor.imageCover}" alt="">
        </div>
        <p class="chu-de">Chủ đề: ${infor.collectionName}</p>
        <p>Số thẻ:${number} </p>
        <p>Của: ${infor.owner}</p>
        <button id="btnToQuizz" >Học bộ thẻ này</button>
        <button id="btnToEdit" >Chỉnh sửa bộ thẻ</button>`
    } else {
        inforCollection.innerHTML = `    
        <div class="image-collection-cover">
        <img src="${infor.imageCover}" alt="">
        </div>
        <p>Chủ đề: ${infor.collectionName}</p>
        <p>Số thẻ:${number} </p>
        <p>Của: ${infor.owner}</p>
        <button id="btnToQuizz">Học bộ thẻ này</button>`
    }
    document.getElementById("btnToEdit").addEventListener("click", () => {
        view.setActiveScreen("editCardsScreen")
        model.loadCardToEdit(infor)
    })
}
view.showInforUser = (user) => {
    const inforUser = document.getElementById('inforUser')
    inforUser.innerHTML = `
    <div class="ava-user">
    <img src="${user.photoUrl}" alt="">
    </div>
    <div class="infor-user">
    <p>Tên: ${user.displayName}</p>
    <p>Bộ thẻ hiện có: ${user.collection}</p>
    </div>`
}
view.addFormAddCard = (id) => {
    if (id == 0) {
        let formAdd = document.createElement('form')
        formAdd.id = `formCard${id}`
        formAdd.innerHTML = `<div class="card">
    <div class="font-card">
        <div class="image-card">
            <input type="file" name="imageCard" id="inputImageCard${id}">
            <img src="../image/tải xuống.png" alt="" id="imageCard${id}">
            <div class="error image-collection-error" id='imageCollectionError${id}'></div>
        </div>
        <div class="main-vocab">
            <div class="input-vocab">
                <input type="text" name="vocab" placeholder="Add vocab">
                <div class="error vocab-error" id='vocabError${id}'></div>
            </div>
            <div class="pronuncitaion">
                <div class="sound">
                    <input type="file" name="sound">
                    <i class="fas fa-volume-up"></i>
                    <div class="error sound-error" id='soundError${id}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="pronun" placeholder="Add pronun">
                    <div class="error pronun-error" id="pronunError${id}"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="back-card">
        <div class="input-wrapper">
            <input type="text" name="meaning" placeholder="Meaning">
            <div class="error meaning-error" id='meaningError${id}'></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="samemeaning" placeholder="Same meaning">
            <div class="error same-meaning-error" id='sameMeaningError${id}'></div>
        </div>
        <div class="Example" >
            <h3 style="padding-left: 20px ;">Example</h3>
            <input type="text" name="example" placeholder="Add Example">
            <div class="error example-error" id='exampleError${id}'></div>
        </div>        

    </div>
</div>`
        document.querySelector('.card-wrapper').appendChild(formAdd)
        $(`#inputImageCard${id}`).change(function () {
            readURL(this, `imageCard${id}`);
        })
        return id + 1
    } else {
        let formAdd = document.createElement('form')
        formAdd.id = `formCard${id}`
        formAdd.innerHTML = `<div class="card">
    <div class="font-card">
        <div class="image-card">
            <input type="file" name="imageCard" id="inputImageCard${id}">
            <img src="../image/tải xuống.png" alt="" id="imageCard${id}">
            <div class="error" id='imageCollectionError${id}'></div>
        </div>
        <div class="main-vocab">
            <div class="input-vocab">
                <input type="text" name="vocab" placeholder="Add vocab">
                <div class="error" id='vocabError${id}'></div>
            </div>
            <div class="pronuncitaion">
                <div class="sound">
                    <input type="file" name="sound">
                    <i class="fas fa-volume-up"></i>
                    <div class="error" id='soundError${id}'></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="pronun" placeholder="Add pronun">
                    <div class="error" id="pronunError${id}"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="back-card">
        <div class="input-wrapper">
            <input type="text" name="meaning" placeholder="Meaning">
            <div class="error" id='meaningError${id}'></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="samemeaning" placeholder="Same meaning">
            <div class="error" id='sameMeaningError${id}'></div>
        </div>
        <div class="Example" >
            <h3 style="padding-left: 20px ;">Example</h3>
            <input type="text" name="example" placeholder="Add Example">
            <div class="error" id='exampleError${id}'></div>
        </div>        
    </div>
</div>`

        let card = document.getElementById(`formCard${id - 1}`)
        let filesImage = card.imageCard.files
        let fileImage = filesImage[0]
        let filesSound = card.sound.files
        let fileSound = filesSound[0]
        let inforCard = {
            imageVocab: fileImage,
            vocab: card.vocab.value,
            sound: fileSound,
            pronunciation: card.pronun.value,
            meaning: card.meaning.value,
            sameMeaning: card.samemeaning.value,
            idCollection: " ",
            createdAt: new Date(),
        }
        if (controller.checkCard(inforCard, (id - 1))) {

            document.querySelector('.card-wrapper').appendChild(formAdd)
            $(`#inputImageCard${id}`).change(function () {
                readURL(this, `imageCard${id}`);
            })
            model.createCard.push(inforCard)
            console.log(model.createCard)
            console.log(inforCard.imageVocab)

            return true
        } else {
            return false
        }
    }
}
view.addCardEdit = (card) => {

    let formEdit = document.createElement('form')
    formEdit.id = `formEdit${card.id}`
    formEdit.innerHTML = `
    <div class="card">
    <div class="font-card">
        <div class="image-card">
            <input type="file" name="imageCard" id="inputImageCardEdit${card.id}">
            <img src="${card.imageVocab}" alt="" id="imageCardEdit${card.id}">
            <div class="error" id='imageCollectionErrorEdit'></div>
        </div>
        <div class="main-vocab">
            <div class="input-vocab">
                <input type="text" name="vocab" placeholder="Add vocab" value="${card.vocab}">
                <div class="error" id='vocabErrorEdit'></div>
            </div>
            <div class="pronuncitaion">
                <div class="sound">
                    <input type="file" name="sound">
                    <i class="fas fa-volume-up"></i>
                    <div class="error" id='soundErrorEdit'></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" name="pronun" placeholder="Add pronun" value="${card.pronunciation}" >
                    <div class="error" id="pronunErrorEdit"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="back-card">
        <div class="input-wrapper">
            <input type="text" name="meaning" placeholder="Meaning" value="${card.meaning}">
            <div class="error" id='meaningErrorEdit'></div>
        </div>
        <div class="input-wrapper">
            <input type="text" name="samemeaning" placeholder="Same meaning" value="${card.sameMeaning}">
            <div class="error" id='sameMeaningErrorEdit'></div>
        </div>
        <div class="Example">
            <h3 style="padding-left: 20px ;">Example</h3>
            <input type="text" name="example" placeholder="Add Example">
            <div class="error" id='exampleErrorEdit'></div>
        </div>
    </div>
    <button id="btnEdit${card.id}" type="submit" > <i class="far fa-check-circle"></i></button>
    <button id="btnDelete${card.id}" type="submit" > <i class="far fa-times-circle"></i></button>
</div>`
    const listCardToEdit = document.querySelector('.edit-card-screen .edit-card-main .main-edit-card .card-wrapper')
    listCardToEdit.appendChild(formEdit)
    $(`#inputImageCardEdit${card.id}`).change(function () {
        readURL(this, `imageCardEdit${card.id}`);
    })
    document.getElementById(`formEdit${card.id}`).addEventListener('submit', (e) => {
        e.preventDefault()
        let cardUpdate = document.getElementById(`formEdit${card.id}`)
        let filesImage = cardUpdate.imageCard.files
        let fileImage = filesImage[0]
        let filesSound = cardUpdate.sound.files
        let fileSound = filesSound[0]
        const dataEdit = {
            vocab: cardUpdate.vocab.value,
            pronunciation: cardUpdate.pronun.value,
            meaning: cardUpdate.meaning.value,
            sameMeaning: cardUpdate.samemeaning.value
        }
        if (fileImage) {
            dataEdit.imageVocab = fileImage
        }
        if (fileSound) {
            dataEdit.sound = fileSound
        }
        model.updateDataCard(dataEdit, card.id)
    })
}
view.showCardsToEdit = () => {
    for (oneCard of model.cardsUser) {
        view.addCardEdit(oneCard)
    }
}
view.showCollectionToEdit = (infor) => {
    let formCollectionEdit = document.querySelector(".infor-collection-card-edit")
    formCollectionEdit.innerHTML = `
        <form id="test" runat="server">
            <div class="eidt-collection-card">
                <div class="image-colection">
                    <input type="file" name="imageCollectionEdit" id="collectionCardEdit">
                    <img src="${infor.imageCover}" id="imageCollectionCardEdit" alt="">
                    <div class='error' id="errorImageCollectionEdit"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Content" name='content' value="${infor.collectionName}">
                    <div class="error" id="errorContentEdit"></div>
                </div>
                <button class="btn-create" id="button-submit-collection-edit" type="submit"><i
                        class="fas fa-check" style="color: white;"></i></button>
                <div class="error" id="errorAmountCardEdit"></div>
            </div>
        </form>`
    document.getElementById("test").addEventListener('submit', (e) => {
        e.preventDefault()
        // view.setActiveScreen("collectionUserScreen")
    })
}


