// promise的应用
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',

]

Promise.all(urls.map(url => {
  return fetch(url).then(res => res.json())
}))
.then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
})
.catch(error => console.log(error))
.finally(data => console.log('finally:', data))


const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url => {
      fetch(url).then(resp => resp.json())
    }))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  }
  catch (err) {
    console.log(err)
  }

}