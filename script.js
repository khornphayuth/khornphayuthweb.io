document.getElementById('bootstrapForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('nameDisplay').innerText = document.getElementById('name').value;
    document.getElementById('emailDisplay').innerText = document.getElementById('email').value;
    document.getElementById('salaryDisplay').innerText = `$${parseFloat(document.getElementById('salary').value).toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    document.getElementById('dateDisplay').innerText = document.getElementById('hireDate').value;
    document.getElementById('alertBox').classList.remove('d-none');
    alert ("1.EmpName : " + document.getElementById('name').value + "\n"+ 
        "2.Email : " + document.getElementById('email').value + "\n"+
        "3.Salary : " + `$${parseFloat(document.getElementById('salary').value).toLocaleString(undefined, {minimumFractionDigits: 2})}` + "\n"+
        "4.HireDate " + document.getElementById('hireDate').value + "\n")
});
function goBack() {
    window.history.back();
}
function hidealert(){
    document.getElementById('alertBox').classList.add('d-none');
}
