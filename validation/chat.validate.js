import Joi from 'joi';

const chatValidationSchema =  Joi.object()
    .keys({
        user_id: Joi.string()
            .min(3)
            .max(40)
            .required(),
        user_message: Joi.string()
            .required()
            .min(3)
            .max(200)
    })

export default chatValidationSchema;