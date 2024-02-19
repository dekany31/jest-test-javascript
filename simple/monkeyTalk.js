// A magánhangzókkal kezdődő szavak átalakulnak Eek, különben átalakulnak Ook. A visszaadott karakterlánc az első betűt nagybetűvel írja, az összes írásjelet eltávolítja, és egy pontot a végén.
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const monkeyTalk = phrase => {
  if (phrase.trim() === '') {
    return '';
  }
  return phrase
    .split(" ")
    .map(word => (/^[aeiou]$/i).test(word[0]) ? 'eek' : 'ook')
    .join(" ")
    .capitalize() + "."
}
module.exports = monkeyTalk
