import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default {
  NonNegativeInt: new GraphQLScalarType({
    name: 'NonNegativeInt',
    description: 'Non negative int scalar type',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return ast.value
      }
      return null;
    },
  }),
  Direction: new GraphQLScalarType({
    name: 'Direction',
    description: 'Direction scalar type',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return ast.value
      }
      return null;
    },
  }),
  State: new GraphQLScalarType({
    name: 'State',
    description: 'State scalar type',
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return ast.value
      }
      return null;
    },
  }),
}
