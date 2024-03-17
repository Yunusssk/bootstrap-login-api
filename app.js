function validateForm() {
    var input = document.getElementById("exampleInputEmail1").value;
    if (input.length < 3) {
      alert("En az 3 karakter girmelisiniz!");
      return false;}
}


// Sayfa yüklendiğinde localStorage'da saklanan bilgileri kontrol edip, varsa ilgili alanlara yerleştir
window.onload = function() {
    var rememberedUsername = localStorage.getItem('rememberedUsername');
    var rememberedPassword = localStorage.getItem('rememberedPassword');
    var rememberMeCheckbox = document.getElementById('exampleCheck1');
    var usernameField = document.getElementById('exampleInputEmail1');
    var passwordField = document.getElementById('exampleInputPassword1');
  
    if (rememberedUsername && rememberedPassword) {
      usernameField.value = rememberedUsername;
      passwordField.value = rememberedPassword;
      rememberMeCheckbox.checked = true;
    }
  };
  
  // Form gönderildiğinde hatırla kutusu işaretliyse bilgileri localStorage'a kaydet
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    event.preventDefault();
    if (document.getElementById('exampleCheck1').checked) {

      localStorage.setItem('rememberedUsername', username);
      localStorage.setItem('rememberedPassword', password);

  
      
    } else {
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberedPassword');
    }
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then(console.log);

      
  });






