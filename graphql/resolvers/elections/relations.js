const states = ({ uuid }, _, { reply }) => {
  const { knex } = reply

  return knex('tb_states')
    .where('election_uuid', uuid)
}

module.exports = {
  states
}
