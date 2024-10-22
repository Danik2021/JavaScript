'use strict';

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value += str;
  }

  padEnd(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

/* На що буде звертати увагу ментор !!!
Оголошений клас StringBuilder
Властивість value у класі StringBuilder оголошена приватною
У класі StringBuilder оголошений метод getValue
Метод getValue повертає значення приватної властивості value екземпляра класу, який його викликає
У класі StringBuilder оголошений метод padEnd
Метод padEnd змінює значення приватної властивості value екземпляра класу, який його викликає
У класі StringBuilder оголошений метод padStart
Метод padStart змінює приватну властивість value екземпляра класу, який його викликає
У класі StringBuilder оголошений метод padBoth
Метод padBoth змінює значення приватної властивості value екземпляра класу, який його викликає
У результаті виклику new StringBuilder(".") значення приватної змінної builder — це об'єкт
Об'єкт builder не містить публічну властивість value
Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає рядок .
Другий виклик builder.getValue() після виклику builder.padStart("^") повертає рядок ^.
Третій виклик builder.getValue() після виклику builder.padEnd("^") повертає рядок ^.^
Четвертий виклик builder.getValue() після виклику builder.padBoth("=") повертає рядок =^.^=
*/
