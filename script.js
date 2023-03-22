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
// const tablechar = [b, c, ç, d, f, g, h, j ]
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

const tableNumerologyLetter = ["a", "á", "â", "ã", "à", "ä", "b", "c", "ç", "d", "e", "é", "ê", "è", "ë", "f", "g", "h", "i", "í", "ì", "î", "ï", "j", "k", "l", "m", "n", "ñ", "o", "ó", "ô", "õ", "ò", "ö", "p", "q", "r", "s", "t", "u", "ú", "ü", "ù", "v", "w", "x", "y", "z"]
const tableNumerologyNumber = [1, 3, 8, 4, 2, 2, 2, 3, 6, 4, 5, 7, 3, 1, 1, 8, 3, 5, 1, 3, 2, 8, 2, 1, 2, 3, 4, 5, 8, 7, 9, 5, 1, 5, 5, 8, 1, 2, 3, 4, 6, 8, 3, 3, 6, 6, 6, 1, 7]
// =======================================================================================================//


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
        let arrayNameNumber = []
        let i = 0
        let j = 0
        for (i = 0; i <= namePerson.length; i++) {
            arrayName[i] = namePerson.charAt(i)
        }

        let arrayBirthdate = []
        i = 0
        for (i = 0; i <= birthdatePerson.length; i++) {
            arrayBirthdate[i] = birthdatePerson.charAt(i)
        }
        // =======================================================================================================//

        // for (i = 0; i < tableNumerologyLetter.length; i++) {
        //     for (j = 0; j <= arrayName.length; j++) {
        //         if (tableNumerologyLetter[i] === arrayName[j]) {
        //             arrayNameNumber[j] = tableNumerologyNumber[i] 
        //         }
        //     }

        // }


        tableNumerologyLetter.forEach((variable, i) => {
            arrayName.forEach((variable2, j) => {
                if (variable === variable2) {
                    arrayNameNumber[j] = tableNumerologyNumber[i]
                }
            })

        })


        //}

        // sum = function(x,y){
        //     for(i = 0; i < arrayNameNumber.length; i++){
        //        x[i] =  arrayNameNumber[i] + arrayNameNumber[i++]
        //        if(x[i] > 9)
        //     }

        // }



        console.log(arrayNameNumber)
        
        const base1 = arrayName.join(" &nbsp ")
        const base2 = arrayNameNumber.join(" &nbsp ")
        const basex = `<table><tr>${base1}<br>${base2}</tr></table>`

        document.getElementById("name_resp").innerHTML = basex
        // document.getElementById("name_num1").innerHTML = arrayNameNumber.join(" &nbsp ")
        
        // console.log(namePerson);
        // console.log(birthdatePerson);
    } else {
        alert("Preencha Todos os Campos")
    }

}








button.addEventListener('click', getValues);

