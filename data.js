const nama = "bagus dwt";
let umur = 11;

let biodata = document.getElementById('biodata')
console.log(biodata);

function generateBiodata() {
    let generasi;

  if (umur > 10 && umur < 18) {
    
   generasi = 'generasi remaja'

  
} else if (umur > 18 && umur < 30) {
    
    generasi = 'generasi dewasa'
  } 
  else if (umur >= 30) {
    
    generasi = 'generasi tua'
  } 
  else if (umur < 10 && umur > 3 )
  { 
  generasi = 'generasi anak'
  } 
  else if(umur < 3 && umur > 0) {
    generasi = 'generasi balita'
} else {
    console.log('anda bukan manusia')
}
return biodata.innerHTML
}

console.log(nama);
console.log(umur);

generateBiodata();
