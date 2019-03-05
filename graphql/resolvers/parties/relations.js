const delegates = ({ uuid }, _, { reply }) => {
  const { knex } = reply

  return knex('tb_delegates')
    .where('party_uuid', uuid)
}

module.exports = {
  delegates
}
