document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JavaScript months are 0-11
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    const birthDate = new Date(year, month, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
});
