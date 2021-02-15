function copy() {

  var copyText = document.getElementById('password').textContent;
  var selectedText = '';

  selectedText = window.getSelection()

  if (copyText!=selectedText){
  	alert("Password selection does not match with the generated password.")
  }
  else{
  	document.execCommand("copy");
  	alert("Password copied!")
  }

}