import scalars from './scalars';
import matches from './dataSet';

export default {
    ...scalars,
    Query: {
        matches: () => matches,
    }
}
