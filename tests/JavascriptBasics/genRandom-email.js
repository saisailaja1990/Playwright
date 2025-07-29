class EmailGenerator {
    constructor() {
        this.chr = 'abcdefghijklmnopqrstuvxyz0123456789';
    }

    generateRandomEmailAddress() {
        let username = '';
        for (let i = 0; i < 6; i++) {
            username += this.chr.charAt(Math.floor(Math.random() * this.chr.length));
        }
        return `${username}testing@hotmail.com`;
    }
}

// Export the class so it can be used in another file
module.exports = EmailGenerator;
