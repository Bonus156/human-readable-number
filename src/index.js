module.exports = function toReadable (number) {
  
  const twenties = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number >= 0 && number < twenties.length) return twenties[number];
  let reader = String(number);
  if (reader.length === 2 && reader[1] === '0') return dozens[Number(reader[0])];
  if (reader.length === 2 && reader[1] !== '0') return dozens[Number(reader[0])] + ' ' + twenties[Number(reader[1])];
  if (reader.length === 3 && reader[1] === '0' && reader[2] === '0') return twenties[Number(reader[0])] + ' hundred';
  if (reader.length === 3 && reader[1] !== '0' && reader[2] === '0') return twenties[Number(reader[0])] + ' hundred ' + dozens[Number(reader[1])];
  if (reader.length === 3 && (reader[1] === '0' || reader[1] === '1') && reader[2] !== '0') return twenties[Number(reader[0])] + ' hundred ' + twenties[Number(reader[1] + reader[2])];
  else return twenties[Number(reader[0])] + ' hundred ' + dozens[Number(reader[1])] + ' ' + twenties[Number(reader[2])];

}
