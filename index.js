/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ExampleApp from './src/components/camera';

AppRegistry.registerComponent(appName, () => ExampleApp);
