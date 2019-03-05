const Party = (_, { uuid }, { reply }) => {
  const { knex } = reply

  return knex('tb_parties').where('uuid', uuid).first()
}

module.exports = {
  Party
}
