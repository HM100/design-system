import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function () {
	this.route('overview', function () {
		this.route('getting-started');
		this.route('quick-start');
		this.route('contributing');
		this.route('svg-assets');
		this.route('installation');
	});

	this.route('base-styles', function () {
		this.route('breakpoints');
		this.route('typography');
		this.route('colors');
		this.route('z-index');
	});

	// We have a good reason to call this route `route-components` and put it in `/components` path.
	// Ember requires you to keep route's (or to be strict - controller's) templates in
	// `/templates` dir. It also requires you to keep Ember component's templates in
	// `/templates/components` dir. If we had a route named `components` then its children's
	// templates would have to be in `/templates/components` together with Ember's components'
	// templates. This would be more messy than just the config we have below.  If you have a
	// better idea, feel free to improve this!
	this.route('route-components', {
		path: 'components'
	}, function () {
		this.route('assets');
		this.route('avatars');
		this.route('buttons');
		this.route('dropdowns');
		this.route('lists');
		this.route('progress-indicators');
		this.route('tabs');
	});

	this.route('identity', function () {
		this.route('assets');
		this.route('global-footer', function () {
			this.route('standalone', {
				path: 'standalone/:variant_name'
			});
		});
		this.route('global-navigation', function () {
			this.route('standalone', {
				path: 'standalone/:variant_name'
			});
		});
		this.route('community-header', function () {
			this.route('standalone', {
				path: 'standalone/:variant_name'
			})
		});

		this.route('api');
	});
});

export default Router;
