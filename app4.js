let digit2 = parseInt(prompt("Завдання 4. Введіть ціле число:"));
let i4= 1;
let count4 = 0;
while ( i4 <= digit2) {
    if (digit2 % i4 === 0) {
        count4++;
    }
    i4++;
}
if (count4 === 2) {
    document.write("Так, число " + digit2 + " є простим.")
}
else {
    document.write("Ні, число " + digit2 + " не є простим.")
}
document.write("<br>")