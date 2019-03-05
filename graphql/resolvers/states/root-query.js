const State = (_, { uuid }, { reply }) => {
  const { knex } = reply

  return knex('tb_states').where('uuid', uuid).first()
}

module.exports = {
  State
}
