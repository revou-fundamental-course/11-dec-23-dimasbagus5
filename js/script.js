//form validation
function validateForm(){
    const nama = document.forms["message-form"]["nama"].value;
    const ttl = document.forms["message-form"]["ttl"].value;
    const kelamin = document.forms["message-form"]["kelamin"].value;
    const pesan = document.forms["message-form"]["pesan"].value;

    if(nama == "" || ttl == "" || kelamin == "" || pesan == ""){
        alert("Tidak boleh kosong");
        return false
    } else{
        showData(nama, ttl, kelamin, pesan);
        return false;
    }
}

//menampilkan data input
function showData(nama, ttl, kelamin, pesan){
    const date = new Date().toDateString();

    document.getElementById("guest-nama").innerHTML = nama;
    document.getElementById("show-nama").innerHTML = nama;
    document.getElementById("nama").placeholder = nama;
    document.getElementById("show-ttl").innerHTML = ttl;
    document.getElementById("show-kelamin").innerHTML = kelamin;
    document.getElementById("show-pesan").innerHTML = pesan;
    document.getElementById("show-date").innerHTML = date;
}