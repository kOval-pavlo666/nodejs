const Joi = require('joi');

const WorkerSchema = Joi.object({
    fullName: Joi.string()
        .min(2)
        .max(100),

    specialty: Joi.string()
        .min(2)
        .max(100),

    schedule: Joi.object()
        .keys({
            dayOfWeek: Joi.string()
                .min(2)
                .max(100),
            start: Joi.string()
                .min(2)
                .max(100),
            end: Joi.string()
                .min(2)
                .max(100)
        }),
    
    office: Joi.number(),
    
    area: Joi.string()
});

module.exports = {
    WorkerSchema
};