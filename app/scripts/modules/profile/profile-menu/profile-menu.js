define([
	'comps/modapp/app',
	'hbs!./profile-menu-tpl'
], function (App, tpl) {

	return App.Module.extend({

		init: function () {
			this._super();
			this.name = 'profile-menu';
			this.tpl = tpl;
		},


	});
});