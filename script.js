/*  FORMULÁRIOS PARA ESTUDO */
// Remove any non-digit characters from the birthdate string

// birthdate1 = birthdate1.replace(/\D/g, "");
// console.log(birthdate1)
//const namePerson = document.getElementById('name-person').value.toLowerCase().replace(/\s/g, "");
// substring(i,j)
// toLowerCase() => todas as letras minúsculas
// charAt()
//indexOf()
// toString()
//join()
//pop() e shift() eliminar elemento array
// typeof
// const dataFunction = (dateCalc) =>{
//     console.log(`Hoje é: ${dateCalc.getDate()}/${dateCalc.getMonth()+1}/${dateCalc.getFullYear()} às ${dateCalc.getHours()}:${dateCalc.getMinutes()}:${dateCalc.getSeconds()} `)
// }
// let data = new Date()
// dataFunction(data)



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

const negativeSequenceTriangleNumberRepeat = [
    "A pessoa fica limitada, perdendo a coragem de se aventurar em algo novo. Pode, também, ficar um longo período inativo (a), desempregado (a) ou mesmo impotente para realizar o que quer que seja permanecendo nesse estado o tempo que durar o Arcano que domina o período. Esta sequência indica, eventualmente, tendência para desenvolver alguns distúrbios ou doenças cardíacas.",
    "Esta sequência indica possibilidade de timidez e indecisão, podendo levar o (a) seu (a) possuidor (a) a ser subjugado (a) por aqueles mais próximos, sejam eles amigos, sócios, colegas de trabalho ou simplesmente conhecidos. Faz perder a autoestima, limitando-o (a) quanto a seus projetos e realizações. Pode, eventualmente, surgir alguma doença que provoque dependência.",
    "Indica possibilidade de ser incompreendido (a), dificuldade no diálogo, principalmente com colegas de trabalho e com a (o) companheira (o). Tem dificuldade de se impor em seus projetos e para convencer as pessoas. Esta sequência pode, eventualmente, indicar possibilidade de doenças respiratórias ou de articulações.",
    "Reflete dificuldade na realização profissional. Pode ser mal remunerado (a) e as perspectivas profissionais serem difíceis, ou ter dificuldade em se manter no emprego, ou se dar bem em qualquer atividade. Pode, eventualmente, indicar possibilidade de doenças reumáticas ou arteriais.",
    "Indica possíveis mudanças não desejadas de casa, de profissão ou meio social. Sob esta influência, a pessoa tem frequentes altos e baixos, não se fixando profissionalmente, sempre à procura de melhores oportunidades, e ter dificuldade para as encontrar. Pode, também, causar fuga do meio social em que habita e a desenvolver alguma doença de pele.",
    "Indica possibilidade de haver decepções com amigos, sócios, parentes e até com o cônjuge (namorada (o) ou companheira (o)), que não o (a) compreende em seus propósitos e sentimentos. Algum tipo de doença cardíaca pode aparecer nesse estado.",
    "Faz com que se afaste de tudo e de todos. Pode levar ao desmando, transforma-lo (a) em um ser dependente, vaidoso (a), arrogante e, consequentemente, vítima da própria intolerância. A persistência nesse sentimento provoca sentimentos de solidão, doenças nervosas, dependências e, eventualmente, algum tipo de câncer.",
    "Esta sequência torna arredio (a), afastando-o (a) das atividades sociais. Caso não seja evoluído (a) espiritualmente, poderá descontrolar-se emocionalmente com muita facilidade. Sob esta vibração, poderá oscilar entre a riqueza e a pobreza e, como consequência desse estresse, poderá desenvolver alguma doença.",
    "Reflete uma tendência a passar por dificuldades financeiras, eventualmente perdas de bens, eventuais fracassos nos negócios e vários tipos de provações provocadas pelos períodos de estagnação. Tudo isto pode afetar o sistema nervoso e o coração."
]


// =======================================================================================================//


const button = document.getElementById('confirm-button');
const thTable = document.getElementsByTagName('th')
const piramide = document.getElementById('piramide')
const negSequence = document.getElementById('neg-sequence')

const reset = () => {
    window.location.reload()
}
const getValues = () => {
    const entry = document.getElementById('name-person')
    entry.focus()
    const entername = entry.value
    const namePerson = entername.replace(/\s/g, "");
    // const namePersonOriginal = document.querySelector('#name-person').value
    // const birthdatePerson = document.getElementById('birthdate').value.replace(/\D/g, "");


    if (namePerson.length != 0) {
        button.style.display = 'none'
        // document.getElementById("main-title").innerHTML = `<h1>${namePerson}, nascido em: ${birthdatePerson} </h1>`;
        // document.getElementsByTagName("th").innerHTML = `<th>Olá Mundo</th>`;

        // namePerson = namePerson.toLowerCase().replace(/\s/g, "");
        // birthdatePerson = birthdatePerson.replace(/\D/g, "");

        let arrayOriginal = []
        let arrayName = []
        let arrayNameNumber = []
        let i = 0
        let j = 0
        for (i = 0; i <= namePerson.length; i++) {
            arrayName[i] = namePerson.toLowerCase().charAt(i)
            arrayOriginal[i] = namePerson.charAt(i)
        }
        arrayOriginal.pop()
        arrayName.pop()

        // let arrayBirthdate = []
        // i = 0
        // for (i = 0; i <= birthdatePerson.length; i++) {
        //     arrayBirthdate[i] = birthdatePerson.charAt(i)
        // }
        // arrayBirthdate.pop()
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

        function sumDigitWhile(number) {
            let numberA
            while (number > 9) {
                numberA = Math.floor(number / 10) + (number % 10)
                number = numberA

            }
            return numberA
        }
        // Teste
        console.log(`arrayoriginal: ${arrayOriginal},\narraynamenumber: ${arrayNameNumber},\nnameperson: ${namePerson},\narrayname: ${arrayName}`)
        /*
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        */

        let baseName = document.querySelector('tr#name-resp')
        baseName.innerHTML = `<strong><p style="text-align: center">${arrayOriginal.join(" &nbsp ")}</p></strong>`
        baseName.innerHTML += `<p style="text-align: center">${arrayNameNumber.join(" &nbsp ")}</p>`

        const end = arrayNameNumber.length
        let count = []
        let copy = []
        let num = []
        let vetor = []
        let neg = []
        copy = arrayNameNumber
        let x = 0




        for (j = 0; j < end; j++) {

            for (i = 0; i < copy.length; i++) {

                count[i] = copy[i] + copy[i + 1]

                if (count[i] > 9) {
                    vetor = sumDigitWhile(count[i])
                    count[i] = vetor
                    // console.log(`Vetor:${vetor} `)

                }
            }
            copy = count
            count.pop()
            num = count
            numberRed()
            baseName.innerHTML += `<p style="text-align: center" >${count.join(" &nbsp ")}</p>`
            count = num
            console.log(`Count: ${count}, Neg: ${neg}`)

            console.log(`NUM = ${num}`)


            function numberRed() {

                for (let i = 2; i < count.length; i++) {

                    if ((count[i] == count[i - 1]) && (count[i] == count[i - 2])) {
                        neg.push(count[i])

                        // baseName.style.color = 'red'
                        // baseName.innerHTML += `<p style="text-align: center" >${count.join(" &nbsp ")}</p>`
                    }


                }

            }

            piramide.innerHTML = `Pirâmide Invertida no Nome: <span>${entername}</span>`


        }
        console.log(neg.length)
        
        let novaNeg = neg.filter(function(este, i) {
            return neg.indexOf(este) === i;
        });

        for (i = 0; i < novaNeg.length; i++) {
            novaNeg.sort()           
            negSequence.innerHTML += `<br><span style="color:red">${novaNeg[i]} ${novaNeg[i]} ${novaNeg[i]}</span>
             - ${negativeSequenceTriangleNumberRepeat[novaNeg[i] - 1]}<br>`
            console.log(`${neg[i]} ${neg[i]} ${neg[i]} `)
        }





        // baseName.innerHTML += `<h2 style="color:red">${num.join(" &nbsp ")}</h2>`
        //   ${count.join(" &nbsp ")}

        // copy = count
        // console.log(`copy: ${copy} count: ${count} vetor: ${vetor}`)
        // count[i] = Math.floor(count[i] / 10) + (count[i] % 10)




        /*
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        */






        /*
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        */



        // console.log(arrayNameNumber) 

        // const base1 = arrayName.join(" &nbsp ")
        // const base2 = arrayNameNumber.join(" &nbsp ")
        // const base3 = count.join(" &nbsp ")
        // const basex = `<table><tr>${base1}<br>${base2}<br>${base3}<br></tr><br></table>`
        // document.getElementById("name-resp").innerHTML = basex

        // document.getElementById("name-numb").innerHTML = arrayNameNumber.join(" &nbsp ")       
        // console.log(namePerson);
        // console.log(birthdatePerson);  

        /*
       ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       */

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const localButton = document.querySelector("#local-button")
        const myLink = document.querySelector("#my-link")
        const buttonReset = document.createElement('input')
        buttonReset.setAttribute('type', 'button')
        buttonReset.setAttribute('id', 'button-reset')
        buttonReset.setAttribute('value', 'Reset')
        buttonReset.setAttribute('href', 'container-medium')
        localButton.appendChild(buttonReset)

        const contact = document.createElement('input')
        contact.setAttribute('type', 'button')
        contact.setAttribute('id', 'my-contact')
        contact.setAttribute('value', 'Clique aqui para corrigir suas Energias')
        myLink.appendChild(contact)





        buttonReset.addEventListener('click', reset)

        /*
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        */

    } else {
        alert("Por favor, preencha o seu nome completo.")
    }

}








// button.addEventListener('click', getValues);

