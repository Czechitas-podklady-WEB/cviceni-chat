'use strict'

const SEND_MESSAGE_ENDPOINT =
	'https://czechichat.herokuapp.com/api/send-message'
const GET_MESSAGES_ENDPOINT =
	'https://czechichat.herokuapp.com/api/list-messages'

const nameInputElement = document.querySelector('#name-input')
const messageInputElement = document.querySelector('#message-input')

const messagesElement = document.querySelector('#messages')

document.querySelector('#send-form').addEventListener('submit', (event) => {
	/*
	event.preventDefault()

	console.log('Name:', nameInputElement.value)
	console.log('Message:', messageInputElement.value)
	*/
	// @TODO: odešli zprávu
})

// @TODO: v opakovaném intervalu nahraj zprávy ze serveru a zobraz v elementu #messages
