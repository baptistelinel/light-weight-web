import { inMemoryDependencies } from './in-memory.dependencies';
import { productionDependencies } from './production.dependencies';

// export const dependencies =
//   process.env.NODE_ENV === 'production'
//     ? productionDependencies
//     : inMemoryDependencies;

export const dependencies = inMemoryDependencies;
