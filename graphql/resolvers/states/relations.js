const coligations = ({ uuid }, _, { reply }) => {
  const { knex } = reply

  return knex('tb_coligations')
    .where('state_uuid', uuid)
}

module.exports = {
  coligations
}
