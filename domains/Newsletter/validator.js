import Joi from 'joi'

const schema = Joi.object().keys({
  email: Joi.string().email().required()
})

/**
 * Valition function
 * @param {*} data The input data
 * @param {Function} onValidate The callback called on validation end
 */
const validate = (data, onValidate) => Joi.validate(data, schema, onValidate)

export default validate