define([
	'comps/modapp/app',
	'hbs!./orders-tpl',
], function (App, tpl) {

	return App.Module.extend({

		init: function () {
			this._super();
			this.name = 'orders';
			this.tpl = tpl;

		},

	});
});