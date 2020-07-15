
export const getContacts = async () => {
    const result = await fetch('https://ycmu19rp83.execute-api.us-east-2.amazonaws.com/dev/contacts')
    return result.json()
}