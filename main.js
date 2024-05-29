const { createApp } = Vue;

// Inizializzo vuejs
createApp({
    data() {
        return {
            // Creo un titolo ed un array vuoto da riempire con le mail
            title: 'eMail List:',
            emails: [],
        };
    },

    created() {
        for (let i = 0; i < 10; i++) {
            // Tramite axios, uso .get per ottenere la risposta delle api
            // Una volta ricevuta la risposta, uso .then per pusharla all'interno dell'array inizialmente vuoto
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                });
        }
    },
}).mount('#app');