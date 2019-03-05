const Coligation = (_, { uuid }, { reply }) => {
  const { knex } = reply

  return knex('tb_coligations').where('uuid', uuid).first()
}

module.exports = {
  Coligation
}
