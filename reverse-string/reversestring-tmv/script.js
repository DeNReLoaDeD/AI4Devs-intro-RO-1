function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseWithButton() {
    const input = document.getElementById('input1').value;
    document.getElementById('output1').value = reverseString(input);
}

function handleInput2() {
    const input = document.getElementById('input2').value;
    const button = document.getElementById('button2');
    button.style.display = input.length >= 3 ? 'inline-block' : 'none';
}

function reverseWithMinChars() {
    const input = document.getElementById('input2').value;
    document.getElementById('output2').value = reverseString(input);
}

function reverseLive() {
    const input = document.getElementById('input3').value;
    document.getElementById('output3').value = reverseString(input);
}