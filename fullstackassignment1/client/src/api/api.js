const BASE = import.meta.env.VITE_API_BASE_URI || 'http://localhost:3000'


async function request (path, options = {}) {
    const res = await fetch(`${BASE}${path}`, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    })
    const isJson = res.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await res.json() : null;
    if(!res.ok){
        const message = data?.message || res.statusText;
        throw new Error(message);

    }
    return data;
}


export const BooksAPi = {
    list: () => request('/api/books'),
    get: (id) => request(`/api/books/${id}`),
    create: (book) => request('/api/books', {
        method: 'POST',
        body: JSON.stringify(book),

    }),
    update: (id, book) => request(`/api/books/${id}`, {
        method: 'PUT',
        body: JSON.stringify(book),
    }),
    delete: (id) => request(`/api/books/${id}`, {
        method: 'DELETE',
    }),
};  