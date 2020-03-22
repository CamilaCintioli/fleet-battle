import { gql } from 'apollo-server';

const schema = gql`
  scalar NonNegativeInt
  scalar Direction
  scalar State

  type Bomb {
    x: NonNegativeInt!
    y: NonNegativeInt!
  }

  type Ship {
    x: NonNegativeInt!
    y: NonNegativeInt!
    direction: Direction!
    size: NonNegativeInt!
  }

  type Board {
    bombs: [Bomb]!
    ships: [Ship]!
  }

  type Match {
    state: State!
    turn: NonNegativeInt!
    boards: [Board!]!
  }

  type Query {
    matches: [Match]!
  }
`;

export default schema;