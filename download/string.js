export default class FormattableString extends String {
  format(options) {
    let string = this;
    for (const option in options) {
      const regex = new RegExp(`{{${option}}}`, 'g');

      string = string.replace(regex, options[option]);
    }

    return string;
  }
}