import { $ } from '@wdio/globals'


class CartPage {

    async goBack () {
        await $('id:back').click();
    }

}

export default new CartPage();
