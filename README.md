# Cvičení: Chat

## Zadání

1. Prohlédni si soubor `index.html`. Stránka je nastylovaná pomocí [Bootstrapu](https://getbootstrap.com/). Nejsou potřeba žádné další CSS. Všimni si formulářových inputů `#name-input` a `#message-input`, elementu `#messages`, se kterými budeš později pracovat. Pro splnění zadání stačí upravovat pouze soubor `index.js`.
1. Uprav soubor `index.js` tak, aby stránka zobrazovala nejnovější zprávy z api.
   1. Doplň tělo funkce `renderMessage`. Jejím úkolem bude vracet HTML jedné zprávy podle předlohy, kterou najdeš v `index.html`. Správné chování můžeš vyzkoušet například výpisem do konzole pomocí `console.log(renderMessage('Pavel', 'Ahoj 👋', '11. 5. 2020 17:30:00'))`.
   1. Dopiš funkci `renderMessages`, ať pomocí for smyčky zavolá pro každou zprávu `renderMessage` a přidá ji do elementu s id `messages`. Nezapomeň obsah `#messages` nejdříve vyčistit, jinak se ti zprávy budou časem opakovat.
   1. Vyzkoušej, že volání přidává zprávy do stránky.
      ```js
      renderMessages([
      	{ name: 'Pavel', message: 'Ahoj 👋', date: '11. 5. 2020 17:30:00' },
      	{
      		name: 'Martina',
      		message: 'Ja se máte?',
      		date: '11. 5. 2020 17:29:54',
      	},
      	{ name: 'Michal', message: 'Nazdar', date: '12. 5. 2020 12:17:21' },
      	{ name: 'Ivana', message: 'Ahoj', date: '12. 5. 2020 11:02:15' },
      ])
      ```
   1. Pomocí zabudované funkce `fetch` stáhni uvnitř `updateMessages` zprávy z api. Ukázkový kód najdeš v [dokumentaci](https://czechichat.herokuapp.com/documentation/). Zprávy přes `renderMessages(data.messages)` zobraz na stránce.
1. Uprav soubor `index.js` tak, aby formulář pomocí api odesílal nové zprávy na server.
   1. Doplň funkci `onSubmit`, která při uložení formuláře odešle jméno a text z inputů.
   1. Pozdrav ostatní v chatu. Vyplň na stránce políčko pro tvé jméno a zprávu textem „Ahoj“. Odešli.

## Bonus

1. Vymaž políčko na zadávání textu zprávy po jeho odeslání.
1. Zabraň dvojímu odeslání formuláře, pokud uživatel omylem dvakrát za sebou rychle klikne na `Odeslat`.
1. Přidej do stránky CSS, které problikne žlutě všemi zprávami při přijetí jakékoliv nové. Vyžaduje úpravu `index.html`.
   ```css
   <style>
       @keyframes new-message {
           0% {
               background-color: #ffffd3;
           }
       }
       .card {
           animation: new-message 1s;
       }
   </style>
   ```
1. Při přijímání zpráv sleduj hodnotu `lastUpdate`, kterou posílá server společně s `messages`. Volej `renderMessages` jen při změně `lastUpdate`. Server mění tuto hodnotu jen při přijetí nové zprávy.
