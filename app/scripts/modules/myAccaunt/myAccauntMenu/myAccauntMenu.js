define([
	'comps/modapp/app',
	'hbs!./myAccauntMenu-tpl'
], function (App, tpl) {

	return App.Module.extend({

		init: function () {
			this._super();
			this.name = 'myAccauntMenu';
			this.tpl = tpl;
		},


	});
});