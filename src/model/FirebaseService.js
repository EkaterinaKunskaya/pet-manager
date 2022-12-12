import { makeAutoObservable } from 'mobx';
import { MyFirebase } from '../firebase/MyFirebase'

const firebase = MyFirebase.firebase;

class FirebaseService {

    cards;
    isLoading = true;

    constructor() {
        
        makeAutoObservable(this);
        
        var cardsRef = firebase.database().ref();
        
        cardsRef.on('value', (snapshot) => {
            const cards = [];
            
            if (snapshot) cards.push(snapshot.val());
            
            this.cards = cards[0];
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
        
    }


    addNewCard = (card) => {
        firebase.database().ref(`/${card.id}/`).set({
            ...card
        });    
    }

    removeCard = (id) => {
        firebase.database().ref().child(id).remove();
    }

    updateCard = (card) => {
        let cardRef = firebase.database().ref().child(card.id);

        cardRef.update ({
            petName: card.petName,
            view: card.view,
            breed: card.breed,
            sex: card.sex,
            birthday: card.birthday,
            microchipNumber: card.microchipNumber,
            stampNumber: card.stampNumber,
            reproduction: card.reproduction,
            notes: card.notes,
            img: card.img,
        });
    }

    removeAvatar = (id) => {
        let cardRef = firebase.database().ref(`/${id}`);
        cardRef.update ({img: ''});
    }

    addProcedure = (id, procedure) => {        
        let proceduresRef = firebase.database().ref(`/${id}/procedures/${procedure.idProc}`);
        proceduresRef.update ({
            idProc: procedure.idProc,
            nameProc: procedure.nameProc,
            dateProc: procedure.dateProc,
        });
    }

    removeProcedure = (idCard, idProc) => {
        firebase.database().ref(`/${idCard}/procedures`).child(idProc).remove();
    }

}

export default FirebaseService;