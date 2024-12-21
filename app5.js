let digit5 = parseInt(prompt("Завдання 5. Введіть ціле число: "));
let i5 = 0;
let mainNumber = 3;
while (digit5 % mainNumber === 0) {
    digit5= digit5 / mainNumber;
    i5++;
}
if (digit5 === 1) {
    document.write("Так, це число можна отримати шляхом вознесення " + mainNumber + " в ступінь.")
}
else {
    document.write("Ні, число не можна отримати шляхом вознесення в ступінь " + mainNumber + ".")
}