import { ITemplateLauncher } from "./IModels";

import { UsersModel } from "./Users/UsersModel";
import { UsersTemplateLauncher } from "./Users/UsersTemplateLauncher";

interface IModels {
    users: typeof UsersModel;
};

const models: Array<ITemplateLauncher> = [
    UsersTemplateLauncher,
];

export { IModels, models };