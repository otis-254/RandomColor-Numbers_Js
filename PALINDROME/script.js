function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
    return s === s.split('').reverse().join('');
}

function checkPalindrome() {
    const inputString = document.getElementById("inputString").value;
    const resultElement = document.getElementById("result");

    if (inputString === "") {
        resultElement.innerText = "Please enter a word or phrase.";
        return;
    }

    if (isPalindrome(inputString)) {

        resultElement.innerText = `"${inputString}" is a palindrome!`;

    } else {
        resultElement.innerText = `"${inputString}" is NOT a palindrome.`;

    }
}

