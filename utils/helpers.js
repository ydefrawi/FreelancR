module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
  }, format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  }
};
