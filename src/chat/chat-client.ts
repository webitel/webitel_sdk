export class ChatClient {
  constructor(private baseUrl: string) {}

  async postData(path: string, data?: any) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

    return response.json()
  }

  async delete(path: string) {
    return fetch(`${this.baseUrl}${path}`, {
      method: 'DELETE',
    })
  }

  async getData(path: string) {
    const response = await fetch(`${this.baseUrl}/${path}`)

    return response.json()
  }
}
