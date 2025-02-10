import { API_URL, API_URL_PUBLIC, api } from "@/config/axios";

class BookService {
  getActiveBooks() {
    return api.request({
      method: "GET",
      url: `/codes/my-book`,
      baseURL: API_URL,
    });
  }

  search(query) {
    return api.request({
      method: "GET",
      url: `/books/search`,
      params: {
        search: query,
      },
    });
  }

  activeBook(bookId, codeId) {
    return api.request({
      method: "POST",
      url: `/codes/active`,
      baseURL: API_URL,
      data: {
        book_code: Number(bookId),
        code_id: codeId,
      },
    });
  }

  getDetailBook(bookId) {
    return api.request({
      method: "GET",
      url: `/users/book-detail/${bookId}`,
      baseURL: API_URL,
    });
  }

  getMenuBook(bookId) {
    return api.request({
      method: "GET",
      url: `/menu-book?book_id=${bookId}`,
      baseURL: API_URL,
    });
  }

  getDetailSection(id) {
    return api.request({
      method: "GET",
      url: `/menu-book/${id}`,
      baseURL: API_URL,
    });
  }

  getQuestion(id) {
    return api.request({
      method: "GET",
      url: `/questions/${id}`,
      baseURL: API_URL,
    });
  }

  getNewBook() {
    return api.request({
      method: "GET",
      url: `/books`,
      baseURL: API_URL,
    });
  }
}

const bookService = new BookService();

export default bookService;
