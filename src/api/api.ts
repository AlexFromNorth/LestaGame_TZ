import { gql } from "@apollo/client";

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