import { AppRegistry } from 'react-native';
import App from './App';

// Define a new app name for the web if you want, or use the one from app.json
const appName = 'YourAppNameForWeb';

AppRegistry.registerComponent(appName, () => App);

if (window.document) {
    AppRegistry.runApplication(appName, {
        initialProps: {},
        rootTag: document.getElementById('app-root'),
    });
}
