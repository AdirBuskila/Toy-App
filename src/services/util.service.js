export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    capitalizeFirstLetter,
    toysPerYear,
    pricesPerToyLabels,
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function pricesPerToyLabels(toys) {
    const labels = [
      "On wheels",
      "Box game",
      "Art",
      "Baby",
      "Doll",
      "Puzzle",
      "Outdoor",
    ];
    let avgPrices = [
      { sum: 0, num: 0 },
      { sum: 0, num: 0 },
      { sum: 0, num: 0 },
      { sum: 0, num: 0 },
      { sum: 0, num: 0 },
      { sum: 0, num: 0 },
      { sum: 0, num: 0 },
    ];
    for (let i = 0; i < toys.length; i++) {
      const toy = toys[i];
      toy.labels.forEach((currLabel) => {
        let idx = labels.findIndex((label) => {
          return label === currLabel;
        });
        if (idx && idx !== -1) {
          avgPrices[idx].sum += Number(toy.price);
          avgPrices[idx].num += 1;
        }
      });
    }
    var arr = avgPrices.map((avg) => {
      if (avg.sum === 0) return 0;
      return Math.floor(avg.sum / avg.num);
    });
    return arr;
  }
  
  function toysPerYear(toys) {
    let toysPerYear = {};
    toys.forEach((toy) => {
      var { createdAt } = toy;
      const date = new Date(createdAt);
      var year = date.getFullYear();
      var count = toysPerYear[year];
      count = !count ? 1 : count + 1;
      toysPerYear[year] = count;
    });
    return toysPerYear;
  }
  