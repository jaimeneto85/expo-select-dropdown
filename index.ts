import SelectDropdown, {SelectDropdownProps} from "./components/SelectDropdown";
import DropdownData from "./interfaces/DropdownData";
import {TagData} from "./interfaces/TagData";
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

export {SelectDropdown, SelectDropdownProps, DropdownData, TagData}
