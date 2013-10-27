define([
	'comps/modapp/app',
	'hbs!./account-tpl',
], function (App, tpl) {

	return App.Module.extend({

		init: function () {
			this._super();
			this.name = 'account';
			this.tpl = tpl;

		},

	});
});