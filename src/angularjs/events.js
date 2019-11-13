// EXPORT EVENTS TO THE ROOT APPLICATION
export const events = {
	module: 'assessment',
	methods: [
		{
			command: 'open',
			route: '/angularjs/lorem-ipsum' // extend to accept path parameters
			// parameters: ['assessmentId'] (optional, not in use)
		}
	]
};

/*
export const events = {
	module: 'assessment',
	methods: [
		{
			command: 'open',
			publish: function(params) {
				return new CustomEvent(events.module + this.command, { detail: params });
			},
			subscribe: function() {
				return document.addEventListener(events.module + this.command, event => {
					singleSpaNavigate('/angularjs/lorem-ipsum?assessmentId=' + event.detail);
				});
			}
		}
	]
};
*/