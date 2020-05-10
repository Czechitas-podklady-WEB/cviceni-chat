# Cvičení: Chat

1. Prohlédni si soubor `index.html`. Stránka je nastylovaná pomocí [Bootstrapu](https://getbootstrap.com/). Nejsou potřeba žádné další CSS. Všimni si formulářových inputů `#name-input` a `#message-input`, elementu `#messages`, se kterými budeš později pracovat. Pro splnění zadání stačí upravovat pouze soubor `index.js`.
1. Uprav soubor `index.js` tak, aby stránka zobrazovala nejnovější zprávy z api.
   1. Doplň tělo funkce `renderMessage`. Jejím úkolem bude vracet HTML jedné zprávy podle předlohy, kterou najdeš v `index.html`. Správné chování můžeš vyzkoušet například výpisem do konzole pomocí `console.log(renderMessage('Pavel', 'Ahoj 👋', '11. 5. 2020 17:30:00'))`.
   1. Dopiš funci `renderMessages`, ať pomocí for smyčky zavolá pro každou zprávu `renderMessage` a přidá ji do elementu s id `messages`. Nezapomeň obsah `#messages` nejdříve vyčistit, jinak se ti zprávy budou časem opakovat.
   1. Pomocí zabudované funkce `fetch` stáhni uvnitř `updateMessages` zprávy z api. Ukázkový kód najdeš v [dokumentaci](https://czechichat.herokuapp.com/documentation/). Zprávy přes `renderMessages(data.messages)` zobraz na stránce.
1. Uprav soubor `index.js` tak, aby formulář pomocí api odesílal nové zprávy na server.
