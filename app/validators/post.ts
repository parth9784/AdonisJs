import vine from '@vinejs/vine'

export const postValidator = vine.compile(vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(7),
  name:vine.string().minLength(3),
}))

