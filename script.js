function initVue() {
  new Vue ({
    el:'#container',
    data:{
      logo:'https://www.boolean.careers/images/misc/logo.png',
      contacts: [
        {
            name: 'Michele',
            avatar: 'img/sinister.jpeg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: 'img/split.jpeg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: 'img/stranger.jpeg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: 'img/youg.jpeg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
    ],
    indContact:null,
    newMsg:
    {
      text: '',
      status: 'sent'
    },
    receivedMsg:
    {
      text: 'ok',
      status: 'received'
    },
    searchName: '',
  },
  methods:{
    viewMsg : function (contact) {
      const i = this.contacts.indexOf(contact);
      this.indContact=i;
    },
    send: function () {
      if (!this.newMsg.text == '') {
        const {text,status} = this.newMsg;
        this.contacts[this.indContact].messages.push({text,status});
        this.newMsg.text = '';
        setTimeout(this.received,2000);
      }
    },
    received:function () {
      const {text,status} = this.receivedMsg;
      this.contacts[this.indContact].messages.push({text,status});
    }
  },
  computed:{
    searchContact: function () {
      return this.contacts.filter((contact,ind) => {
        const cntName = contact.name.toLowerCase();
        const inputSearch = this.searchName.toLowerCase();
        return cntName.match(inputSearch);
      });
    }
  }
  });
}

function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
