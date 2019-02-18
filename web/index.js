axios
  .get('https://api.github.com/users/mhaidarh')
  .then(response => {
    const $data = document.getElementById('data')
    const $userUsername = document.getElementById('user-username')
    const $userAvatar = document.getElementById('user-avatar')
    const $userURL = document.getElementById('user-url')

    const userUsername = response.data.login
    const userAvatar = response.data.avatar_url
    const userURL = response.data.html_url

    $userUsername.innerHTML = userUsername
    $userAvatar.setAttribute('src', userAvatar)
    $userURL.setAttribute('href', userURL)
    $userURL.innerHTML = userURL
    $data.innerHTML = JSON.stringify(response.data, null, 2)
  })
  .catch(error => console.log(error))
