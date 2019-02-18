axios
  .get('https://api.github.com/users/mhaidarh')
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
