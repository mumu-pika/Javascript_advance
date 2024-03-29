// for await of
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

// getData
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => {
        fetch(url).then(resp => resp.json())
      })
    )
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (err) {
    console.log(err)
  }
}

const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url))
  for await (let request of arrayOfPromises) {
    const data = await request.json()
    console.log(data) // 分别对应 users, posts, albums
  }
}
