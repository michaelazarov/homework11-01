//hw-10-01----------------------------
// Логирование поступающих сообщений в объекте log
// Ваша задача - напилить код функции handler,
// которая получает сообщение и заносит его в объект log
// в виде нового свойства,
// значение которого - текст поступившего сообщения,
// а ключ ( имя свойства ) - это время поступления сообщения ( в виде строки )
//------------------------------------
let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]
var log = {}
var sendMessage = ( message, callback ) => 
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )
messages.forEach (
    message => sendMessage ( message, handler )
)
getKey = () => {
    let key = new Date().toLocaleTimeString(), x = 0
    while ( log [ `${key}[${x}]` ] ) { x++ }
    return `${key}[${x}]`
}
getKeyFirst = () => new Date().toLocaleTimeString()

//Вариант 1 через getOwnPropertyNames
// function handler (message) {
//     Object.getOwnPropertyNames(log).find( item => item === new Date().toLocaleTimeString())
//         ?log[getKey()] = message
//             :log[getKeyFirst()] = message 
// }

//Вариант 2 через keys
function handler (message) {
    Object.keys(log).find( item => item === new Date().toLocaleTimeString())
        ?log[getKey()] = message
            :log[getKeyFirst()] = message 
}



//hw-10-02----------------------------
// Допилите код конструктора User, дополнив его 
// акцессорами приватного свойства presence
//------------------------------------

//Вариант 1 (приминимо к созданному объекту)
// function User ( name ) {
//     this.name = name
//     var presence = false       
// }
// let user = new User ( "Ivan" )
// Object.defineProperty ( user, "presence", {
//     get: () => this.presence ? this.name + " is present" :  this.name + " is absent",
//     set: newVal => presence = newVal === '+' ?  true : false
// })

//Вариант2 (по заданию)
function User ( name ) {
    this.name = name
	var presence = false
    Object.defineProperty ( this, "presence", {
//      get: () => presence ? name + " is present" :  name + " is absent",
        get: () => name + " is " + (presence ?  "present" :  "absent"),
        set: newVal => presence = newVal === '+' ?  true : false
    })      
}
let user = new User ( "Ivan" )

console.info ( user.presence )
user.presence = "+"
console.info ( user.presence )


//hw-10-03----------------------------
// Объявить функцию-конструктор User
// Конструктор должен принимать аргументы, описывающие юзера
//  - Статические свойства и методы конструктора
//  - Собственные свойства экземпляров
//  - Унаследованные свойства экземпляров
//------------------------------------
while (document.head.firstChild)
    document.head.removeChild(document.head.firstChild)
while (document.body.firstChild)
    document.body.removeChild(document.body.firstChild)

function createWindowMessage (elem) {
  elemFigure = elem.appendChild(document.createElement('figure'))
  elemFigure.className = "sign"
  elemPOut = elemFigure.appendChild(document.createElement('p'))
  elemImg = elemPOut.appendChild(document.createElement('img'))
  elemImg.style = `width: 90px; height: 90px;`
  elemImg.src = ''
  elemCaption = elemFigure.appendChild(document.createElement('figcaption'))
  elemPOut = elem.appendChild(document.createElement('p'))
  elemPOut.className = "message"  
}

function User(name='Noname', email='noname@box.com', avatar=User.getAvatar()) {
    this.name = name
    this.email = email
    this.photoURL = avatar
    this.historyArrMessages = [] 
}
User.admin = {
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "admin"
}
User.getAvatar = function() {
    return this.avatars.shift()
}
User.avatars = [
"https://st.depositphotos.com/1967477/1843/i/950/depositphotos_18438047-stock-photo-happy-smiley-emoticon-face.jpg",
"https://static8.depositphotos.com/1007989/1011/i/950/depositphotos_10118087-stock-photo-smiley-in-love.jpg", 
"https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png", 
"http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png", 
"https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
"http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico", 
"http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png", 
"https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
]


function setMessageBox () {
  var classes = [
      `.sign {
      float: left;      
      border: 1px solid #333;     
      padding: 7px; 
      font-size: 12pt;    
      margin: 5px 0 5px 5px;      
      background: #f0f0f0;
      position: absolute;   
    }
    .sign figcaption {
      margin: 0 auto 5px;   
    }
    .message {
      width: 335px;
      height: 167px;
      line-height: 50px;
      font-size: 20pt;
      border: 4px double black;
      padding: 0 0 0 110px;
      text-align: center;   
    }
    .history {
      width: 460px;
      min-height: 70%;
      line-height: 25px;
      font-size: 14pt;
      border: 4px double black;
      padding: 0 0 0 10px;
      text-align: center;

    }   
      .input {
      border: 1px solid #333;     
      padding: 7px;     
      margin: 5px 0 5px 5px;      
      background: #f0f0f0;
      width: 425px;
    }`
  ]
  var style = document.createElement('style')
  document.head.appendChild(style)
  for (var item of classes) {
    style.appendChild(document.createTextNode(item))
  }

  createWindowMessage (document.body)

  elemInput = document.body.appendChild(document.createElement('input'))
  elemInput.className = "input"
  elemInput.type = "text"

  elemDivHistory = document.body.appendChild(document.createElement('div'))
  elemDivHistory.className = "history"

  User.prototype.messageBox = {
    TextOut: elemPOut,
    ImgOut: elemImg,
    NameUser: elemCaption,
    TextInput: elemInput,
    BoxHistory: elemDivHistory
  } 

}
setMessageBox ()

User.prototype.messageBox.TextInput.onkeyup = function(event) {
    if (event.target === elemInput && event.keyCode === 13 && !!event.target.value) {
        User.prototype.write(event.target.value, User.admin.photoURL, User.admin.name)
        event.target.value = ''
    }
}
User.prototype.read = function(inputText, photoURL, name ) {
    users.forEach((user) => {
      console.log('Прочитано: ' + user.name + ': ' + user.messageBox.TextOut.textContent)
      var historyMessage = {}
      historyMessage.message = inputText
    historyMessage.photoURL = photoURL
    historyMessage.name = name
    user.historyArrMessages.push(historyMessage)     

    })
}
User.prototype.write = function(inputText='', photoURL=this.photoURL, name=this.name) {

    !elemDivHistory.firstChild 
        ?elemDiv = this.messageBox.BoxHistory.appendChild(document.createElement('div'))    
        :elemDiv = this.messageBox.BoxHistory.insertBefore(document.createElement('div'),elemDivHistory.firstChild)
    createWindowMessage (elemDiv)
         
    this.messageBox.TextOut.innerHTML = elemPOut.innerHTML = inputText
    this.messageBox.ImgOut.src = elemImg.src = photoURL
    this.messageBox.NameUser.innerHTML = elemCaption.innerHTML = name
    this.read(inputText, photoURL, name )    
}

var users = [
  new User("Иван"), 
  new User('Alex',"alex@gmail.com"), 
  new User('Bob',"bob777@gmail.com"), 
  new User('Dima',"dima888@gmail.com"), 
  new User('Fima',"fima999@gmail.com")
]

var k = 1
users.forEach(function(user) {
    setTimeout(function() {
        user.write(`Hello, I'm ${user.name}`)
    }, 3000 * k++)
})
