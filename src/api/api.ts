// const url = 'https://vortex.korabli.su/api/graphql/glossary/'

import { gql } from "@apollo/client";

// const makeRequest = (query) => {
//     return fetch(url, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({query})
//     }).then(res=>res.json()).then(res=>res.data)
// }

// export const vehicles = async () => makeRequest(`query items{
//   vehicles {
//     title
//     description
//     icons {
//       medium
//     }
//     level
//     type {
//       title
//       icons {
//         default
//       }
//     }
//     nation {
//       title
//       color
//       icons {
//         small
//       }
//     }
//   }
// }`).then(res=>res.vehicles)


export const GET_VEHICLES = gql`
  query items{
    vehicles {
      title
      description
      icons {
        medium
      }
      level
      type {
        title
        icons {
          default
        }
      }
      nation {
        title
        color
        icons {
          small
        }
      }
    }
}
`;