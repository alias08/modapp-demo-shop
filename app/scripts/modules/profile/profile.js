define([
	'comps/modapp/app',
	'hbs!./profile-tpl',
	'./profile-menu/profile-menu',
	'./account/account',
	'./orders/orders'
], function (App, tpl, ProfileMenu, Account, Orders) {

	var DEFAULT_PAGE = 'account';

	return App.Module.extend({

		init: function () {
			this._super(DEFAULT_PAGE);
			this.name = 'profile';
			this.tpl = tpl;

			this.add(new ProfileMenu());
			this.add(new Account());
			this.add(new Orders());
		}

	});
});