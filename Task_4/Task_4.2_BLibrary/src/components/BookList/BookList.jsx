import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import {
  deleteBook,
  deleteAllBook,
  toggleFavorite,
  selectBooks,
} from '../../redux/slices/booksSlice'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './BookList.css'

const BookList = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }
  const handleDeleteAllBook = () => {
    dispatch(deleteAllBook())
  }
  const handleToggleFavourite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true

    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const hightlightMatch = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books availible</p>
      ) : (
        <ul>
          {filteredBooks.length === 0 ? (
            <p>No books for filter</p>
          ) : (
            filteredBooks.map((book, i) => (
              <li key={book.id}>
                <div className="book-info">
                  {++i}. {hightlightMatch(book.title, titleFilter)} by{' '}
                  <strong>{hightlightMatch(book.author, authorFilter)}</strong>{' '}
                  ({book.source})
                </div>
                <div className="book-actions">
                  <span onClick={() => handleToggleFavourite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>
                  <button onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
      {!!books.length && (
        <button type="button" onClick={() => handleDeleteAllBook()}>
          Reset
        </button>
      )}
    </div>
  )
}

export default BookList
