function initVue() {
  new Vue ({
    el:'#container',
    data:{
      logo:'img/boolzapp.png',
      myName:'Pasquale',
      contacts: [
        {
            name: 'Michele',
            avatar: 'img/sinister.jpeg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    menu: true
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    menu: true
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received',
                    menu: true
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
                    status: 'sent',
                    menu: true
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    menu: true
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    menu: true
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: 'img/stranger.jpeg',
            visible: false,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received',
                    menu: true
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    menu: true
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received',
                    menu: true
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
                    status: 'sent',
                    menu: true
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    menu: true
                }
            ],
        },
    ],
    indContact:null,
    notMsg: 'Non ci sono messaggi',
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
        this.contacts[this.indContact].messages.push
        ({date: this.getDate(),text,status,menu:true});
        this.newMsg.text = '';
        if (this.contacts[this.indContact].visible) {
          this.received();
        }
      }
    },
    received:function () {
      const toReceived = this.indContact;
      setTimeout(()=>{
        const {text,status} = this.receivedMsg;
        this.contacts[toReceived].messages.push
        ({date: this.getDate(),text,status,menu:true});
      },2000);
    },
    viewMenu:function(msg){
      msg.menu = !msg.menu;
    },
    deleteMsg: function (ind) {
      this.contacts[this.indContact].messages.splice(ind,1);
    },
    getDate:function () {
      const date = new Date();
      const dateStr = date.getDate() + '/'
                    + date.getMonth() + '/'
                    + date.getFullYear() + ' '
                    + date.getHours() + ':'
                    + date.getMinutes();
      return dateStr;
    },
    getLastDate:function (contact) {
      return contact.messages
      [contact.messages.length -1].date;
    },
    lastMsg: function (contact) {
      return contact.messages
      [contact.messages.length -1].text.slice(0,10);
    }
  },
  computed:{
    searchContact: function () {
      return this.contacts.filter(contact => {
        const cntName = contact.name.toLowerCase();
        const inputSearch = this.searchName.toLowerCase();
        return cntName.match(inputSearch);
      });
    }
  },
  updated() {
    const container = this.$el.querySelector("#chat");
    container.scrollTop = container.scrollHeight;
  }
  });
}

function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
