import { createContext, useContext } from 'react';

const ManageTaskContext = createContext({
    deleteTaskHandler: () => { },
    toggleTaskDoneHandler: () => { },
});

export const useManageTask = () => useContext(ManageTaskContext)

export default ManageTaskContext