const CONSTANTS = {
    BASE_URL: 'http://demo4949022.mockable.io'
}

const HEADER_CONFIG = (token: string) => ({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
})

export {
    CONSTANTS,
    HEADER_CONFIG,
}