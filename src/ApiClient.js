import "isomorphic-fetch";

function ensureSuccess(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

class ApiClient {
  static BASE_URL = "https://api.500px.com/v1";

  constructor(consumerKey) {
    this.consumerKey = consumerKey;
  }

  async photos() {
    return await this.get("/photos")
      .then(ensureSuccess)
      .then(response => response.json());
  }

  async get(path) {
    let url = this.prefixed(path);
    // TODO: do it betterer with an actual URL builder lib
    let urlWithParams = `${url}?consumer_key=${this.consumerKey}`;
    console.info("HTTP GET", urlWithParams);
    return fetch(urlWithParams);
  }

  prefixed(path) {
    return `${ApiClient.BASE_URL}${path}`;
  }
}

export default ApiClient;
