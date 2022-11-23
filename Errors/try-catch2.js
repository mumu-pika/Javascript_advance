try {
  try {
    console.log('trying somthing...')
  } catch (e) {
    throw new Error(e)
  }
} catch (e) {
  console.log('got error:', e)
}
