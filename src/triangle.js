const digitValues = {
    "A_1": 1,
    "A_2": 2,
    "A_3": 3,
    "A_4": 4,
    "A_5": 5,
    "A_6": 6,
    "A_7": 7,
    "A_8": 8,
    "A_9": 9
};
const vowelValues = {
    "A_a": 1,
    "A_á": 3,
    "A_â": 8,
    "A_ã": 4,
    "A_à": 2,
    "A_ä": 2,
    "A_e": 5,
    "A_é": 7,
    "A_ê": 3,
    "A_è": 1,
    "A_ë": 1,
    "A_i": 1,
    "A_í": 3,
    "A_ì": 2,
    "A_î": 8,
    "A_ï": 2,
    "A_o": 7,
    "A_ó": 9,
    "A_ô": 5,
    "A_õ": 1,
    "A_ò": 5,
    "A_ö": 5,
    "A_u": 6,
    "A_ú": 8,
    "A_ü": 3,
    "A_ù": 3,
    "A_y": 1
};
const consonantValues = {
    "A_b": 2,
    "A_c": 3,
    "A_ç": 6,
    "A_d": 4,
    "A_f": 8,
    "A_g": 3,
    "A_h": 5,
    "A_j": 1,
    "A_k": 2,
    "A_l": 3,
    "A_m": 4,
    "A_n": 5,
    "A_ñ": 8,
    "A_p": 8,
    "A_q": 1,
    "A_r": 2,
    "A_s": 3,
    "A_t": 4,
    "A_v": 6,
    "A_x": 6,
    "A_w": 6,
    "A_z": 7
};
const digitReductionArray = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    [2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
    [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];
const interpretationData = [null, ["Força, poder, originalidade, iniciativa e liderança; pioneirismo, criatividade e ambição; autoconfiança, coragem, ousadia e controle; brilho, sucesso, conquistas e posses; independência, autoridade, determinação.", "Arrogância, agressividade, orgulho, autoritarismo, egoísmo, cinismo e solidão; preguiça, presunção e falta de iniciativa.", "Com a iniciativa e a determina&#231;&#227;o: a pessoa fica limitada, perdendo a coragem de se aventurar em algo novo. Pode, tamb&#233;m, ficar um longo per&#237;odo inativo, desempregado ou mesmo impotente para realizar o que quer que seja, permanecendo nesse estado o tempo que durar o Arcano que domina o per&#237;odo. Tal sequ&#234;ncia pode ainda provocar doen&#231;as card&#237;acas de v&#225;rios tipos."],
    ["Cooperação, participação, concessão; flexibilidade, sociabilidade, adaptação; facilidade de relacionamento, diplomacia, gentileza, cordialidade; atencioso e receptivo.", "Submissão, timidez, insegurança, indecisão; inibição, descuido, apatia; dependência, depressão.", " Com a autoconfian&#231;a: esta configura&#231;&#227;o provoca timidez e indecis&#227;o, podendo levar o seu possuidor a ser subjugado por aqueles mais pr&#243;ximos, sejam eles amigos, s&#243;cios, colegas de trabalho ou simplesmente conhecidos. Faz a pessoa perder a autoestima, limitando-a quanto a seus projetos e realiza&#231;&#245;es. Pode, ainda, causar doen&#231;as que provocam depend&#234;ncia qu&#237;mica."],
    ["Imaginação, criatividade, múltiplos talentos; sociabilidade, comunicação, valorização da beleza; fertilidade, multiplicação; divertido, otimista, benquisto; interessante, interessado.", "Desordenado, desastrado; exagero, extravagância; superficialidade, tagarelice; exibicionismo, excesso de vaidade; ciúme.", "Com a comunica&#231;&#227;o: a pessoa torna-se incompreendida, falta di&#225;logo sobre tudo e com todos, principalmente com colegas de trabalho e com o/a companheiro/a. Tem dificuldade de se impor em seus projetos e &#233; dif&#237;cil convencer as pessoas. Esta sequ&#234;ncia pode ainda causar doen&#231;as respirat&#243;rias ou de articula&#231;&#245;es."],
    ["Ordem, disciplina, organização, rigidez, equilíbrio; dedicação, sacrifício, trabalhador nato e obediente, resistente, incansável; honestidade, sinceridade, lealdade; estabilidade, persistência.", "Sistemático, visão limitada, tedioso; teimosia, inflexibilidade, sovinice; excesso de cautela, conservadorismo; inveja; medo do novo.", "Com o trabalho: torna dif&#237;cil qualquer realiza&#231;&#227;o profissional. Normalmente &#233; mal remunerado e as perspectivas profissionais s&#227;o dif&#237;ceis ou tem dificuldade em se manter no emprego ou se dar bem em qualquer atividade. Pode, ainda, causar doen&#231;as reum&#225;ticas e arteriais."],
    ["Liberdade, independência; versatilidade, facilidade de adaptação; desprendido, aventureiro, cigano; ousadia, coragem; sensualidade, sexualidade ativa; sociabilidade; esperteza.", "Irresponsabilidade; irreflexão, instabilidade; ansiedade, inquietação, temperamental; impulsividade; insatisfação; agitado, barulhento; abusos e vicios.", "Com a instabilidade financeira e pessoal: pode causar mudan&#231;as n&#227;o desejadas de casa, de emprego, meio social, de pa&#237;s e de parceiro. Sob esta influ&#234;ncia, a pessoa tem muitos altos e baixos, n&#227;o se fixando profissionalmente, sempre &#224; procura de melhores oportunidades, sem, contudo, as encontrar. Pode, tamb&#233;m, causar fuga do meio social em que habita e contrair doen&#231;as superficiais e destrutivas, ou seja, doen&#231;as de pele."],
    ["Tranquilidade, paz, calma; emotividade, afeição, amorosidade; caseiro, valoriza o lar; amizade, simpatia; conciliação, cooperação; bondade, solicitude; idealismo.", "Acomodação, desleixo, irresponsabilidade; paternalismo; controlador da vida alheia; apego excessivo aos familiares; excesso de preocupação; presunção, convencionalismo; ansiedade, ciúme.", "Com os afetos e sentimentos: causa decep&#231;&#245;es com amigos, s&#243;cios, colegas de trabalho, parentes e at&#233; com o c&#244;njuge (namorado ou companheiro), que n&#227;o o/a compreende em seus prop&#243;sitos e sentimentos. Em vista dessas decep&#231;&#245;es, a pessoa pode desenvolver algum tipo de doen&#231;a card&#237;aca."],
    ["Análise, introspecção, autocontrole; intelectualidade, cultura, racionalidade; perfeccionismo, exigência; sensibilidade, intuição; misticismo, superstição; seletividade, refinamento; honra, fidelidade.", "Arredio, confuso, vago; excesso de racionalidade; alto grau de exigência, mania de criticar; apreensão, nervosismo, vícios; sarcasmo; solidão; autodestruição.", "Com o medo e a intoler&#226;ncia: faz com que a pessoa se afaste de tudo e de todos; pode levar ao desmando, transformando as pessoas em seres dependentes, vaidosos, arrogantes e, consequentemente, v&#237;tima da pr&#243;pria intoler&#226;ncia. Provoca sentimentos de solid&#227;o, des&#226;nimo, doen&#231;as nervosas, dependentes e, em vista disso, possivelmente algum tipo de c&#226;ncer."],
    ["Direto, objetivo, verdadeiro; capacidade de organização, praticidade; retidão, autoridade; sucesso material, prestígio, ambição; talento para altos cargos; visionário.", "Injustiça, vingança, dominação; desonestidade, crueldade, uso das pessoas; autoritarismo, teimosia; egoísmo, ganância, excesso de apego ao material; mau uso da autoridade, sede de poder; frieza.", "Com problemas emocionais e tamb&#233;m financeiros: esta sequ&#234;ncia torna a pessoa arredia, afastando-a das atividades sociais. Caso n&#227;o seja evolu&#237;do espiritualmente, pode se descontrolar emocionalmente com muita facilidade. Sob esta vibra&#231;&#227;o, a pessoa pode oscilar entre a riqueza e a pobreza e, como consequ&#234;ncia, pode contrair graves doen&#231;as ou mesmo ter algum de seus dependentes com tais sintomas."],
    ["Humano, solícito, impessoal, compreensivo, generoso, prestativo, justo, capaz de amor incondicional; capacidade de realização, determinação; romantismo, sentimentalismo; magnetismo, Intuição; sentido artístico; ausência de preconceitos; visionário.", "Possessivo, acusador, rabugento, teimoso; vícios, autodestruição; mal humorado, temperamental; extravagância; bajulação; excessiva emotividade; indiscrição; melancolia e principalmente egoísmo.", "Com rela&#231;&#227;o a finan&#231;as: a pessoa passa por s&#233;rios problemas financeiros, tem perda de bens (m&#243;veis e im&#243;veis), as empresas fracassam e passa por v&#225;rios tipos de prova&#231;&#245;es provocados por longos per&#237;odos de paralisa&#231;&#227;o. Tudo isto pode afetar o sistema nervoso e o cora&#231;&#227;o."], null, ["Inspiração, intuição; sensibilidade desenvolvida; espiritualismo; sentido artístico, múltiplas habilidades.", "Apreensão, nervosismo, vícios; paranoia, mania de perseguição; negligência em relação ao material; instabilidade.", "é o primeiro número mestre, e é também conhecido como o número da fama."], null, null, null, null, null, null, null, null, null, null, ["Sabedoria nata, genialidade, facilidade de ensinar; força, vigor; espiritualismo, magia; futurista, sonhador.", "Ganância, corrupção; destruição acentuada; imprudência; uso da magia para o mal ou para si próprio.", "é o segundo número mestre e está relacionado a fama internacional e também empreendedorismo vitorioso."], null, null, null, null, null, null, null, null, null, null, ["Reúne as qualidades e defeitos dos dois primeiros, do número 11 e número 22. Inspiração, intuição; sensibilidade desenvolvida; espiritualismo; sentido artístico, múltiplas habilidades. Sabedoria nata, genialidade, facilidade de ensinar; força, vigor; espiritualismo, magia; futurista, sonhador.", "Reúne as qualidades e defeitos dos dois primeiros, do número 11 e número 22. Apreensão, nervosismo, vícios; paranoia, mania de perseguição; negligência em relação ao material; instabilidade. Ganância, corrupção; destruição acentuada; imprudência; uso da magia para o mal ou para si próprio.", "é o terceiro número mestre e é a somatória dos dois primeiros, e portanto é o maior e mais perfeito número mestre, sendo associado �  Cristo."],
];

function intReduction(count) {
    var sCount = count.toString();
    while ((sCount.length > 1) && (count != 11) && (count != 22) && (count != 33)) {
        count = 0;
        for (var j = 0; j < sCount.length; j++) count += parseInt(sCount[j]);
        sCount = count.toString();
    }
    return count;
}
var vowel_count = 0;
var consonant_count = 0;
var alphanum_count = 0;
var vowel_data = [];
var consonant_data = [];
var alphanum_data = [];
var vowel_value = [];
var consonant_value = [];
var alphanum_value = [];
var vowel_reduct = 0;
var consonant_reduct = 0;
var alphanum_reduct = 0;
var pyramid_value = [];
var pyramid_triads = [];
var triads_set = [];

function kabbalahNumerologyNameCalc(name) {
    vowel_data = [];
    vowel_value = [];
    vowel_count = 0;
    consonant_data = [];
    consonant_value = [];
    consonant_count = 0;
    alphanum_data = [];
    alphanum_value = [];
    alphanum_count = 0;
    name = name.toLowerCase();
    var pyramid_level = [];
    for (var i = 0; i < name.length; i++) {
        if (vowelValues["A_" + name[i]]) {
            vowel_data.push(name[i]);
            consonant_data.push(null);
            alphanum_data.push(name[i]);
            vowel_value.push(vowelValues["A_" + name[i]]);
            consonant_value.push(0);
            alphanum_value.push(vowelValues["A_" + name[i]]);
            vowel_count += vowelValues["A_" + name[i]];
        } else if (consonantValues["A_" + name[i]]) {
            vowel_data.push(null);
            consonant_data.push(name[i]);
            alphanum_data.push(name[i]);
            vowel_value.push(0);
            consonant_value.push(consonantValues["A_" + name[i]]);
            alphanum_value.push(consonantValues["A_" + name[i]]);
            consonant_count += consonantValues["A_" + name[i]];
        } else if (digitValues["A_" + name[i]]) {
            vowel_data.push(name[i]);
            consonant_data.push(null);
            alphanum_data.push(name[i]);
            vowel_value.push(digitValues["A_" + name[i]]);
            consonant_value.push(0);
            alphanum_value.push(digitValues["A_" + name[i]]);
            vowel_count += digitValues["A_" + name[i]];
        }
        alphanum_count = vowel_count + consonant_count;
        vowel_reduct = intReduction(vowel_count);
        consonant_reduct = intReduction(consonant_count);
        alphanum_reduct = intReduction(alphanum_count);
        pyramid_value = [];
        pyramid_value.push(alphanum_value);
    }
    while (pyramid_value[pyramid_value.length - 1].length > 1) {
        pyramid_level = new Array(pyramid_value[pyramid_value.length - 1].length - 1);
        for (var j = 0; j < pyramid_value[pyramid_value.length - 1].length - 1; j++) {
            pyramid_level[j] = digitReductionArray[pyramid_value[pyramid_value.length - 1][j]][pyramid_value[pyramid_value.length - 1][j + 1]]
        }
        pyramid_value.push(pyramid_level);
    }
    pyramid_triads = [];
    triads_set = [];
    for (var i = 0; i < pyramid_value.length - 2; i++) {
        for (var j = 2; j < pyramid_value[i].length; j++) {
            if ((pyramid_value[i][j]) == (pyramid_value[i][j - 1]) && (pyramid_value[i][j]) == (pyramid_value[i][j - 2])) {
                pyramid_triads.push([pyramid_value[i][j], i, j - 2]);
                if (triads_set.indexOf(pyramid_value[i][j]) == -1) triads_set.push(pyramid_value[i][j]);
                pyramid_value[i][j - 2] = "<span style=\"color:red\">" + pyramid_value[i][j - 2] + "</span>";
                pyramid_value[i][j - 1] = "<span style=\"color:red\">" + pyramid_value[i][j - 1] + "</span>";
                pyramid_value[i][j] = "<span style=\"color:red\">" + pyramid_value[i][j] + "</span>";
            }
        }
    }
    return name;
}
const br = "<br />\n";
const hr = "<hr>\n";
const nbsp = "\&nbsp;";

function kabbalahNumerologyNameHandleFormat() {
    var pyramid_data = [];
    var tempArray;
    tempArray = [];
    var is_first_consonant = true;
    /*for (var i = 0; i < consonant_value.length; i++) {
        if (consonant_value[i]) {
            if (is_first_consonant) {
                tempArray.push(consonant_value[i]);
                tempArray.push(nbsp);
                is_first_consonant = false;
            } else {
                tempArray.push(consonant_value[i]);
                tempArray[tempArray.length - 2] = "+";
                tempArray.push(nbsp);
            }
        } else {
            tempArray.push(nbsp);
            tempArray.push(nbsp);
        };
    }
    if (consonant_count) {
        tempArray.push("=");
        tempArray.push(intReduction(consonant_count));
    } else {
        tempArray.push(nbsp);
        tempArray.push(nbsp);
    }
    pyramid_data.push(tempArray);
    tempArray = [];
    var is_first_vowel = true;
    for (var i = 0; i < vowel_value.length; i++) {
        if (vowel_value[i]) {
            if (is_first_vowel) {
                tempArray.push(vowel_value[i]);
                tempArray.push(nbsp);
                is_first_vowel = false;
            } else {
                tempArray.push(vowel_value[i]);
                tempArray[tempArray.length - 2] = "+";
                tempArray.push(nbsp);
            }
        } else {
            tempArray.push(nbsp);
            tempArray.push(nbsp);
        };
    }
    /*if (vowel_count) {
        tempArray.push("=");
        tempArray.push(intReduction(vowel_count));
    } else {
        tempArray.push(nbsp);
        tempArray.push(nbsp);
    }*/
    pyramid_data.push(tempArray);
    tempArray = [];
    for (var i = 0; i < alphanum_data.length; i++) {
        tempArray.push(alphanum_data[i]);
        tempArray.push(nbsp);
    }
    tempArray.push(nbsp);
    tempArray.push(nbsp);
    pyramid_data.push(tempArray);
    tempArray = [];
    /*for (var i = 0; i < alphanum_value.length; i++) {
        tempArray.push(alphanum_value[i]);
        tempArray.push("+");
    }*/
    /*if (alphanum_count) tempArray[tempArray.length - 1] = nbsp;
    if (alphanum_count) {
        tempArray.push("=");
        tempArray.push(intReduction(alphanum_count));
    } else {
        tempArray.push(nbsp);
        tempArray.push(nbsp);
    }*/
    pyramid_data.push(tempArray);
    for (var i = 0; i < pyramid_value.length; i++) {
        tempArray = [];
        for (var j = 0; j < i; j++) {
            tempArray.push(nbsp);
        }
        for (var j = 0; j < pyramid_value[i].length; j++) {
            tempArray.push(pyramid_value[i][j]);
            tempArray.push(nbsp);
        }
        pyramid_data.push(tempArray);
    }    var thePyramid = "<table>\n";
    for (var i = 0; i < pyramid_data.length; i++) {
        thePyramid += "<tr>\n";
        for (var j = 0; j < pyramid_data[i].length; j++) {
            thePyramid += "<td>\n";
            thePyramid += pyramid_data[i][j];
            thePyramid += "</td>\n";
        }
        thePyramid += "</tr>\n";
    }
    thePyramid += "</table>\n";
    return thePyramid;
}

function kabbalahNumerologyReportHandle(theName) {
    var theReport = "";
    theReport = "<p><b>Pirâmide Invertida do nome:</b> " + theName;
    "</p>\n"
 
    if (triads_set.length) {
        theReport += "<p><b>Sequências Negativas:</b>" + br;
        for (var i = 0; i < triads_set.length; i++) {
            theReport +="<font color=red>" + triads_set[i].toString() + triads_set[i].toString() + triads_set[i].toString() + "</font> - " + interpretationData[triads_set[i]][2] + br;
        }
        theReport += "</p>\n";
    }
    return theReport;
}

function kabbalahNumerologyNameHandle(theObject, thePyramidContainerId, theReportContainerId) {
    setTimeout(function() {
        kabbalahNumerologyNameCalc(theObject.value);
        
        document.getElementById(thePyramidContainerId).innerHTML = kabbalahNumerologyNameHandleFormat();
        document.getElementById(theReportContainerId).innerHTML = kabbalahNumerologyReportHandle(theObject.value);

    //     document.getElementById(container-back).innerHTML = kabbalahNumerologyNameHandleFormat();
    //     document.getElementById(container-back).innerHTML = kabbalahNumerologyReportHandle(theObject.value);
    }, 50);
}