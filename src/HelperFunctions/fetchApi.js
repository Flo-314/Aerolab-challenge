const fetchApi = async (path, route, action, body) => {
  try {
    const token =
      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
        .eyJfaWQiOiI2MWYxZDJiZjBkNzNiMDAwMjE3MzY5ZDIiLCJpYXQiOjE2NDMyMzgwNzl9
        .OAwWbYlP8EnkXC_mSRjgIVkjzaqVK3aD8gzfV1JrZ3g;

    let Authorization = "Bearer " + token;
    let link = "https://coding-challenge-api.aerolab.co/" + path;

    if (route) {
      link += "/" + route;
    }
    const ping = await fetch(link, {
      method: action,
      body: body,
      headers: {
        Authorization,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const response = await ping.json();

    return response;
  } catch (err) {
    return err;
  }
};

export default fetchApi;
