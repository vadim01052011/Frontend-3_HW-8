// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

// Спочатку через for

// Потім через join()



const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// через цикл for
let string = '';
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', ';
  }
}
console.log(string);

// через join()
const joined = friends.join(', ');
console.log(joined);



// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];



// 3. Видалити
const cardToRemove = 'Карточка-3';

const index = cards.indexOf(cardToRemove);
if (true) {
  cards.splice(index, 1);
}
console.log(cards); 


// 4. Додати
const cardToInsert = 'Карточка-6';

const insertIndex = 2;
cards.splice(insertIndex, 0, cardToInsert);
console.log(cards);


// 5. Оновити
const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate !== -1) {
  cards[indexToUpdate] = 'Оновлена картка-4';
}
console.log(cards);
