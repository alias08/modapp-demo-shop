define([
	'comps/modapp/app',
	'hbs!./myAccaunt-tpl',
	'./myAccauntMenu/myAccauntMenu',
], function (App, tpl, myAccauntMenu) {

	var DEFAULT_PAGE = 'accauntInfo';


	return App.Module.extend({

		init: function () {
			this._super(DEFAULT_PAGE);
			this.name = 'myAccaunt';
			this.tpl = tpl;


			this.add(new myAccauntMenu());
		}

	});
});