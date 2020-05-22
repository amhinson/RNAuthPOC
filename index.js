/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

YellowBox.ignoreWarnings(['Possible', 'Picker']);

AppRegistry.registerComponent(appName, () => App);
