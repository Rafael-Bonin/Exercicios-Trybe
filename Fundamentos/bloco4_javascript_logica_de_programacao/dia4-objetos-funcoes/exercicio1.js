let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics 178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

//   console.log('Bem-vinda, ' + info.personagem)
//   console.log(info)

  for (let key in info) {
      if (key === 'recorrente') {
          console.log("Ambos recorrentes")
      } else {
          console.log(info[key] + ' e ' + info2[key])
      }

}
   
   
    //   console.log(key)
    // console.log(info[key])


