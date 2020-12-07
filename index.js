const cenario1 = [0, 0, 1, 0, 0, 1, 0];
const cenario2 = [0, 0, 0, 0, 1, 0];

const jumpingOnClouds = c => {
  var pulos = 0;

  for (var i = 0; i < c.length; i++) {
    //Caso a próximas duas nuvens sejam puláveis, contará apenas 1 pulo e pulará duas nuvens
    if ((c[i + 1] === 0 && c[i + 2] === 0) || c[i + 1] === 1) { // OU caso a próxima nuvem seja não pulável também contará como um pulo e pulará duas nuvens
      pulos++;
      i++;
    } else if (c[i + 2] === 1) { // Caso a segunda nuvem após a atual não seja pulável, contará um pulo e pulará apenas uma casa
      pulos++;
    }
  }
  //console.log(pulos);
  return(pulos);
}

jumpingOnClouds(cenario1)

//c representa o cenario, mantenha o nome pra eu poder testar no hackerrank :D