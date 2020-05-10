'use strict'

/* ========== PŘIJÍMÁNÍ ZPRÁV ========== */

const GET_MESSAGES_ENDPOINT =
	'https://czechichat.herokuapp.com/api/list-messages'
const messagesElement = document.querySelector('#messages')

// @TODO: v opakovaném intervalu nahraj zprávy ze serveru a zobraz v elementu #messages

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
