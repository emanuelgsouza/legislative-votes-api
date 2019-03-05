const parties = ({ uuid }, _, { reply }) => {
  const { knex } = reply
  return knex('tb_parties')
    .where('coligation_uuid', uuid)
}

module.exports = {
  parties
}
