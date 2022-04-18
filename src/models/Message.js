export default class Message {
    constructor(sender, text, date, type) {
        this.sender = sender || "";
        this.text = text || "";
        this.date = date || new Date();
        this.type = type || "message";
    }
}