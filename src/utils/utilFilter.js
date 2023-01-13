function filterDoc({ author, email }) {

    const errors = {}

    if (!author || !email) {
        errors.format = "Invalid format."
    }

    if (typeof author != "string" || author.length < 3) {
        errors.author = "Name of Invalid Author."
    }

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!regex.test(email)) {
        errors.email = "Invalid email."
    }

    return errors
}

module.exports = filterDoc