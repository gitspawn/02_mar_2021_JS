import { loremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from "uuid";

export default function createTask() {
    return {
        id: uuidv4(),
        text: loremIpsum(),
        completed: false,
    };
}

// createTask()

// {
//   id: '124qw3klrwjerf2jorw3ior',
//   text: 'lorem ipdsrefsdf',
//   completed: false
// }
