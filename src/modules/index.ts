import {
  turboCloneArray,
  turboConcat,
  turboEvery,
  turboFill,
  turboFilter,
  turboForEach,
  turboIndexOf,
  turboLastIndexOf,
  turboMap,
  turboPluck,
  turboReduce,
  turboReduceRight,
  turboSome,
} from './array';
import { turboApply, turboBind, turboPartial, turboTry } from './function';
import {
  turboAssign,
  turboCloneObject,
  turboFilterObject,
  turboForEachObject,
  turboKeys,
  turboMapObject,
  turboReduceObject,
  turboReduceRightObject,
  turboValues,
} from './object';

const Turbo = {
  Arrays: {
    clone: turboCloneArray,
    turboConcat,
    turboEvery,
    turboFill,
    turboFilter,
    turboForEach,
    turboIndexOf,
    turboLastIndexOf,
    turboMap,
    turboPluck,
    turboReduce,
    turboReduceRight,
    turboSome,
  },
  Functions: {
    turboApply,
    turboBind,
    turboPartial,
    turboTry,
  },
  Objects: {
    turboAssign,
    turboCloneObject,
    turboFilterObject,
    turboForEachObject,
    turboKeys,
    turboMapObject,
    turboReduceObject,
    turboReduceRightObject,
    turboValues,
  },
};

export default Turbo;
