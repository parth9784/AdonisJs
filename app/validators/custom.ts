import vine from '@vinejs/vine'

export const Schema = vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(4)
})
export const messages={
    'email.email': 'Email is not valid',
    'password.minLength': 'Password must be at least 4 characters long',
    'password.required': 'Password is required',
    'email.required': 'Email Id is required',
}

