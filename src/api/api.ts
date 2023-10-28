const url = 'https://vortex.korabli.su/api/graphql/glossary/'

const makeRequest = (query) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({query})
    }).then(res=>res.json()).then(res=>res.data)
}

export const vehicles = async () => makeRequest(`query items{
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }`)