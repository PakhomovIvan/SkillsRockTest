import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import {
  addBook,
  fetchBook,
  selectisLoadingViaAPI,
} from '../../redux/slices/booksSlice'
import { setError } from '../../redux/slices/errorSlices'
import booksData from '../../data/books.json'
import createBookWithID from '../../utils/createBookWithID'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const isLoadingViaAPI = useSelector(selectisLoadingViaAPI)
  // const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithID(randomBook, 'Random')))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, 'Manual')))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('You must fill title and author!'))
    }
  }

  const handleAddRandomBookAPI = () => {
    dispatch(
      fetchBook(
        'https://react-redux-redux-toolkit.vercel.app/random-book-delayed'
      )
    )
    // dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
  }
  // const handleAddRandomBookAPI = async () => {
  //   try {
  //     const res = await axios.get('http://localhost:4000/random-book')
  //     if (res?.data?.title && res?.data?.author) {
  //       dispatch(addBook(createBookWithID(res.data, 'API')))
  //     }
  //   } catch (error) {
  //     console.log('error fetching random book', error)
  //   }
  // }
  return (
    <div className="app-block book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} autoComplete={'off'}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Enter title:"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            placeholder="Enter author:"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button
          type="button"
          onClick={handleAddRandomBookAPI}
          disabled={isLoadingViaAPI}
        >
          {isLoadingViaAPI ? (
            <>
              <span>Loading...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add Random API'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
