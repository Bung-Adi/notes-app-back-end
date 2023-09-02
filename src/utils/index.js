// file ini berguna untuk maping
const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  // eslint-disable-next-line camelcase
  created_at,
  // eslint-disable-next-line camelcase
  updated_at,
  username
}) => ({
  id,
  title,
  body,
  tags,
  // eslint-disable-next-line camelcase
  createdAt: created_at,
  // eslint-disable-next-line camelcase
  updatedAt: updated_at,
  username
})

module.exports = { mapDBToModel }
