'use strict'

/* ========== PŘIJÍMÁNÍ ZPRÁV ========== */

const GET_MESSAGES_ENDPOINT =
	'https://czechichat.herokuapp.com/api/list-messages'
const messagesElement = document.querySelector('#messages')

// @TODO: v opakovaném intervalu nahraj zprávy ze serveru a zobraz v elementu #messages

const renderMessage = (name, message, date) => {
	// @TODO: funkce vracející HTML zprávy
}

const renderMessages = (messages) => {
	// @TODO: funkce vypisující zprávy na stránku
}

const updateMessages = () => {
	// @TODO: funkce stahující zprávy ze server a přidávající je na stránku
}

setInterval(updateMessages, 2000) // Každé dvě sekundy zavolá updateMessages

/* ========== ODESÍLÁNÍ ZPRÁV ========== */

const SEND_MESSAGE_ENDPOINT =
	'https://czechichat.herokuapp.com/api/send-message'
const nameInputElement = document.querySelector('#name-input')
const messageInputElement = document.querySelector('#message-input')

document.querySelector('#send-form').addEventListener('submit', (event) => {
	event.preventDefault() // Zamezí přesměrování na jinou stránku

	console.log('Name:', nameInputElement.value)
	console.log('Message:', messageInputElement.value)

	// @TODO: odešli zprávu na server
})
