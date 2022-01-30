const sortArray = (array, type, category) => {
  switch (type) {
    case "Lowest Price": {
      return array.sort((a, b) => {
        if (a.cost > b.cost) return -1;
        if (b.cost > a.cost) return 1;
      });
    }
    case "Highest Price": {
      return array.sort((a, b) => {
        if (a.cost > b.cost) return 1;
        if (b.cost > a.cost) return -1;
      });
    }

    case "category": {
      return array.filter((product) => {
        if (product.category === category) return true;

        return false;
      });
    }
  }
};

export default sortArray;
