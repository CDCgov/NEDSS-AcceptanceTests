export default class DateUtil {
    static getNBSFormattedDate(date: Date): string {
        const month = date.getMonth() + 1;
        let monthString = month < 10 ? '0' + month : month.toString();
        const day = date.getDate();
        let dayString = day < 10 ? '0' + day : day.toString();
        return `${monthString}/${dayString}/${date.getFullYear()}`;
    }
}
