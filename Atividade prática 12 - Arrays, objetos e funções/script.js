// 1. Imprima no console a quantidade de pessoas Total.
// 2. Imprima no console a quantidade de pessoas do sexo
// Feminino.
// 3. Imprima no console a soma do salário de todas as pessoas.
// 4. Imprima no console a média do salário de todas as pessoas.
// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
// 10. Imprima os nomes utilizando o MAP

const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
]

const totalPessoas = data.filter((pessoa) => pessoa.nome).length
console.log("O total de pessoas é: " + totalPessoas)

const totalFeminino = data.filter((pessoa) => pessoa.sexo === "F").length
console.log("O total de pessoas do sexo feminino é: " + totalFeminino)

const totalSalarios = data.reduce(function (acc, object) {
  return acc + object.salario
}, 0)
console.log("O valor total dos salários das pessoas é: " + totalSalarios)

const mediaSalarios = data.reduce(function (acc, object) {
  return acc + object.salario + object.nome
})
console.log(`O média dos salários é: ${totalSalarios / totalPessoas}`)

const totalSalarioMas = data.reduce((acc, pessoa) => {
  if (pessoa.sexo === "M") {
    return acc + pessoa.salario
  } else {
    return acc
  }
}, 0)

console.log(
  "O soma salarial das pessoas do sexo masculino é: " + totalSalarioMas
)

const mediaSalarioMasc = data.reduce(function (acc, object) {
  if (object.sexo === "M") {
    totalMasculino = totalPessoas - totalFeminino
    return acc + object.salario + object.sexo
  }
}, 0)

console.log(
  `A média salarial das pessoas do sexo masculino é ${
    totalSalarioMas / totalMasculino
  }`
)

const maiorQue7000 = data.some((valor) => valor.salario > 7000)
console.log(maiorQue7000)

const posicaoIndexPessoa = data.findIndex((pessoa) => pessoa.nome === "Eva Trindade")
console.log(posicaoIndexPessoa)

const sobreNomeSilva = data.filter((pessoa) => pessoa.nome.includes("Silva"))
console.log(sobreNomeSilva)

const nomes = data.map((pessoas) => pessoas.nome)
console.log(nomes)


