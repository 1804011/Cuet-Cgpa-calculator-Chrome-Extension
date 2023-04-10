const selectButton = document.getElementsByTagName('select')[0];
const table = document.getElementsByTagName('tbody')[0];

const getResult = () => {
    let tableContent = table.innerHTML;
    const grades = {
        "A+": 4.00,
        "A": 3.75,
        "A-": 3.50,
        "B+": 3.25,
        "B": 3.00,
        "B-": 2.75,
        "C+": 2.50,
        "C": 2.25,
        "D": 2.00,
        "F": 0,
        "I": 0

    }
    console.clear();
    let totalCredit = 0;
    let totalGrades = 0;
    let length = 0;
    const row = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr')
    for (const e of row) {
        const credit = parseFloat(e.getElementsByTagName('td')[1]?.innerText);
        const grade = parseFloat(grades[e.getElementsByTagName('td')[4]?.innerText]);
        if (!isNaN(credit)) { totalCredit += credit; }
        if (!isNaN(credit) && (!isNaN(grade))) { totalGrades += credit * grade; }
        length++;
        console.log(credit, grade);
    }
    if (totalCredit === 0) return;
    console.log('cgpa is: ' + totalGrades / totalCredit);
    table.innerHTML = tableContent + `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <th>Cgpa: </th>
        <th>${totalGrades / totalCredit}</th>
    </tr>`


}

selectButton.addEventListener('change', getResult);



getResult();