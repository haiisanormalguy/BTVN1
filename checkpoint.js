function sendInfo(){
  var user = document.getElementById('user').value;
  var age = document.getElementById('age').value;
  var tel = document.getElementById('tel').value;
  var male = document.getElementById('male');
  var female = document.getElementById('female');
  var none = document.getElementById('none');
  var gender = "";

  if (isNaN(age)) {
    alert('Age must be a number!');
    return;
  }
  
  if (isNaN(tel)) {
    alert('Telephone must be a number!');
    return;
  }
  
  if (user == "" || age == "" || tel == "" || !male.checked && !female.checked && !none.checked) {
    alert('Please fill all fields');
    return;
  }
}