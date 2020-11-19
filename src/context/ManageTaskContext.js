import { createContext } from 'react';

const ManageTaskContext = createContext({
    deleteTaskHandler: () => { },
    toggleTaskDoneHandler: () => { },
    showDeleteIconHandler: () => { },
    hideDeleteIconHandler: () => { }
});

export default ManageTaskContext;