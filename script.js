/*  FORMULÁRIOS PARA ESTUDO */
// Remove any non-digit characters from the birthdate string

// birthdate1 = birthdate1.replace(/\D/g, "");
// console.log(birthdate1)
//const namePerson = document.getElementById('name-person').value.toLowerCase().replace(/\s/g, "");
// substring(i,j)
// charAt()
// toString()
//join()



/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

// button.addEventListener('click', getValues);

const tabelaNumerologia = {
    "b": 2,
    "c": 3,
    "ç": 6,
    "d": 4,
    "f": 8,
    "g": 3,
    "h": 5,
    "j": 1,
    "k": 2,
    "l": 3,
    "m": 4,
    "n": 5,
    "ñ": 8,
    "p": 8,
    "q": 1,
    "r": 2,
    "s": 3,
    "t": 4,
    "v": 6,
    "x": 6,
    "w": 6,
    "z": 7,
    "a": 1,
    "á": 3,
    "â": 8,
    "ã": 4,
    "à": 2,
    "ä": 2,
    "e": 5,
    "é": 7,
    "ê": 3,
    "è": 1,
    "ë": 1,
    "i": 1,
    "í": 3,
    "ì": 2,
    "î": 8,
    "ï": 2,
    "o": 7,
    "ó": 9,
    "ô": 5,
    "õ": 1,
    "ò": 5,
    "ö": 5,
    "u": 6,
    "ú": 8,
    "ü": 3,
    "ù": 3,
    "y": 1
};

const button = document.getElementById('confirm-button');
const thTable = document.getElementsByTagName("th")


const getValues = () => {
    const namePerson = document.getElementById('name-person').value.toLowerCase().replace(/\s/g, "");
    const birthdatePerson = document.getElementById('birthdate').value.replace(/\D/g, "");

    if (namePerson && birthdatePerson) {
        // document.getElementById("main-title").innerHTML = `<h1>${namePerson}, nascido em: ${birthdatePerson} </h1>`;
        // document.getElementsByTagName("th").innerHTML = `<th>Olá Mundo</th>`;

        // namePerson = namePerson.toLowerCase().replace(/\s/g, "");
        // birthdatePerson = birthdatePerson.replace(/\D/g, "");

       
       let arrayName = []
       let i = 0  
       for(i=0; i<=namePerson.length; i++){
        arrayName[i] = namePerson.charAt(i)
       }

       let arrayBirthdate = []
       i = 0  
       for(i=0; i<=birthdatePerson.length; i++){
        arrayBirthdate[i] = birthdatePerson.charAt(i)
       }
      
       document.getElementById("name_resp").innerHTML = arrayName.join(" - ")
       
      console.log(arrayName, arrayBirthdate, tabelaNumerologia.a) 



    console.log(namePerson);
    console.log(birthdatePerson);
} else {
    alert("Preencha Todos os Campos")
    }

}








button.addEventListener('click', getValues);

