import * as singleSpa from 'single-spa';
import { events as assessmentEvents } from '../angularjs/events';
import { eventManager } from 'dom-pub-sub-path-router';
import _ from 'lodash';

const applicationModules = [
		{
			name: 'angularjs',
			dependencies: []
		},
		{
			name: 'app-2',
			dependencies: [assessmentEvents]
		}
	],
	application = {
		modules: applicationModules,
		allEvents: () => {
			const listOfEvents = [];

			application.modules.forEach((appModule) => {
				listOfEvents.concat(appModule);
			});

			return listOfEvents;
		}
	},
	pathPrefix = prefix => (location => (location.pathname.startsWith(`${prefix}`)));

singleSpa.registerApplication('app-1', () =>
	import ('../app1/app1.js'), pathPrefix('/app1'));
singleSpa.registerApplication('app-2', () =>
	import ('../app2/app2.js'), pathPrefix('/app2'));
singleSpa.registerApplication('angularjs', () =>
	import ('../angularjs/angularjs.app.js'), pathPrefix('/angularjs'));

singleSpa.start();

window.addEventListener('single-spa:app-change', evt => {
	const requiredDeps = [],
		mountedApps = singleSpa.getMountedApps();

	_.each(mountedApps, appModule => {
		const targetModule = _.find(application.modules, ['name', appModule]);

		if (targetModule && targetModule.dependencies.length > 0) {
			targetModule.dependencies.forEach(eventDependencies => {
				eventManager.subscribe(singleSpaNavigate, eventDependencies);
			});

			requiredDeps.concat(targetModule.dependencies);
		}
	});

	_.each(_.difference(application.allEvents(), requiredDeps), (unusedEvents) => {
		if (unusedEvents) {
			eventManager.unsubscribe(unusedEvents);
		}
	});
});
