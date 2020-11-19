import { createContext, useContext } from 'react';

const ManageTaskContext = createContext({
    deleteTaskHandler: () => { },
    toggleTaskDoneHandler: () => { },
    showDeleteIconHandler: () => { },
    hideDeleteIconHandler: () => { }
});

export const useManageTask = () => useContext(ManageTaskContext)

export default ManageTaskContext