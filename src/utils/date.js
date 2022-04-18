import { dateOptions as options } from "../config";

export default class DateHelper {
    static formatDate(value) {
        if (!value) return ""
        return new Date(value).toLocaleString(options.locale, options.opions);
    }
}