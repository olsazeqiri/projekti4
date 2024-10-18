document.getElementById('billingForm').addEventListener('submit', function (faktura) {
    faktura.preventDefault(); 

   
    const emriKonsumatorit = document.getElementById('emrikonsumatorit').value;
    const shumaKonsumatorit = document.getElementById('shumaKonsumatorit').value;

   
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${emriKonsumatorit}</td><td>${parseFloat(shumaKonsumatorit).toFixed(2)}</td>`;


    document.getElementById('billinglist').appendChild(newRow);

  
    document.getElementById('billingForm').reset();
});