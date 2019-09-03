const users = [
  { id: 1, name: 'Cauê', email: 'caue1018218291@oi.com' },
  { id: 2, name: 'Robson', email: 'testeee@oi.com' }
]

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[0],
  }
}

/*aqui tem array fixo pra simular banco e ali duas querys so pra exemplo de como 
funciona, no video ensina como fazer isso funcionar e usar o mongoose para query
no mongo
*/