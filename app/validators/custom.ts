import vine from '@vinejs/vine'

export const Schema = vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(7).optional()
})

